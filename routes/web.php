<?php

use App\Models\Desk;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('login', function () {
    return Inertia::render("Auth/Login");
})->name('login');

Route::post('login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return redirect()->intended();
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->onlyInput('email');
});

Route::post('logout', function () {
    Auth::logout();
    return redirect()->route('login');
})->middleware('auth');*/

Route::get('/', function () {
   return 'h';
});

Route::get('/menu/{organization_uuid}', function ($organization_uuid) {
    $organization = \App\Models\Organization::query()->where('uuid', $organization_uuid)->with('categories')->firstOrFail();
    return Inertia::render('Menu', [
        'organization' => $organization
    ]);
});

Route::get('/menu/{organization_uuid}/{category_uuid}', function ($organization_uuid, $category_uuid) {
    $organization = \App\Models\Organization::query()->where('uuid', $organization_uuid)->firstOrFail();
    $category = \App\Models\Category::query()->where('organization_id', $organization->id)->where('uuid', $category_uuid)->with('products')->firstOrFail();
    return Inertia::render('Menu', [
        'category' => $category
    ]);
});

Route::middleware('auth')->prefix('admin')->group(function () {

    Route::get('/', function () {
        return Inertia::render('Admin/Home');
    })->name('home');

    Route::resource('users', \App\Http\Controllers\User::class)/*->can('isAdmin', 'App\Models\User')*/;

    Route::resource('organizations', \App\Http\Controllers\Organization::class)/*->can('isAdmin', 'App\Models\User')*/;

    Route::resource('categories', \App\Http\Controllers\Category::class)/*->can('isOrganizationUser', 'App\Models\User')*/;

    Route::resource('products', \App\Http\Controllers\Product::class)/*->can('isOrganizationUser', 'App\Models\User')*/->withTrashed();

    Route::resource('sections', \App\Http\Controllers\Section::class)/*->can('isOrganizationUser', 'App\Models\User')*/;

    Route::resource('sections.desks', \App\Http\Controllers\Desk::class)/*->can('isOrganizationUser', 'App\Models\User')*/;

    Route::get('plan', function () {
        return Inertia::render("Plan", [
            'sections' => \App\Models\Section::query()
                ->where('organization_id', Auth::user()->organization_id)
                ->where('active', true)
                ->chunkMap(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                    'desk_count' => $item->desks()
                        ->where('active', true)
                        ->count()
                ])
                ->filter(fn($item) => $item["desk_count"] > 0),
            '_desks' => Desk::query()
                ->where('active', true)
                ->whereNotNull('section_id')
                ->whereHas('section', function ($query) {
                    $query
                        ->where('active', true)
                        ->where('organization_id', Auth::user()->organization_id);
                })
                ->get()
                ->map(fn(Desk $desk) => [
                    'id' => $desk->id,
                    'name' => $desk->name,
                    'sale' => $desk->sale() ?
                        collect($desk->sale())->put('total', $desk->sale()?->details()->get()->sum(fn ($detail) => $detail->quantity * $detail->price))->all()
                        : null,
                    'section' => $desk->section()->first(),
                    'openedBy' => null
                ]),
            'categories' => \App\Models\Category::query()
                ->where('organization_id', Auth::user()->organization_id)
                ->where('active', true)
                ->whereHas('products', function ($query) {
                    $query
                        ->where('active', true)
                        ->where('organization_id', Auth::user()->organization_id);
                })
                ->get(),
            'products' => \App\Models\Product::query()
                ->where('organization_id', Auth::user()->organization_id)
                ->where('active', true)
                ->whereNotNull('category_id')
                ->whereHas('category', function ($query) {
                    $query
                        ->where('active', true)
                        ->where('organization_id', Auth::user()->organization_id);
                })
                ->get()
        ]);
    })->name('plan');

    /*Route::get('plan/{desk}', function (Desk $record) {
        return Inertia::render("Desk", [
            'back' => route('plan'),
            'desk' => $record->only(['id', 'name']),
            'activeSale' => $record->sales->firstWhere('status', '=', 0),
            'products' => \App\Models\Product::query()
                ->where('organization_id', '=', Auth::user()->organization_id)
                ->where('active', '=', true)
                ->select(['id', 'name', 'price'])->get()
        ]);
    })->name('desk');*/

    Route::put('plan/{desk}', function (Request $request, Desk $record) {
        if($request->has('details')) {
            $sale = $record->sales()->updateOrCreate(['id' => $request->get('id')], $request->except(['details']));
            collect($request->get('details'))->except('id')->each(function($detail) use ($sale) {
                $current = $sale->details()->where('product_id', $detail['product_id'])->first();
                if($current)
                    $current->update(['quantity' => $current->quantity + $detail['quantity']]);
                else
                    $sale->details()->updateOrCreate(['product_id' => $detail['product_id']], collect($detail)->except('id')->all());
            });
            broadcast(new \App\Events\Sale($record->id))->toOthers();
        }
        return Redirect::route('plan');
    })->name('plan.update');

    Route::delete('plan/{desk}/{detail_id}', function (Request $request, Desk $record, $detail_id) {
        $record->sale()->details()->firstWhere('id', $detail_id)->delete() && $record->sale()->details()->count() == 0 && $record->sale()->delete();
        broadcast(new \App\Events\Sale($record->id));
        return Redirect::route('plan');
    })->name('plan.delete');
});
