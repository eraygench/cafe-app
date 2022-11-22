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

Route::middleware('auth')->group(function () {

    Route::get('/', function () {
        return Inertia::render('Home');
    });

    Route::resource('users', \App\Http\Controllers\User::class)/*->can('isAdmin', 'App\Models\User')*/->withTrashed();

    Route::resource('organizations', \App\Http\Controllers\Organization::class)/*->can('isAdmin', 'App\Models\User')*/->withTrashed();

    Route::resource('categories', \App\Http\Controllers\Category::class)/*->can('isOrganizationUser', 'App\Models\User')*/->withTrashed();

    Route::resource('products', \App\Http\Controllers\Product::class)/*->can('isOrganizationUser', 'App\Models\User')*/->withTrashed();

    Route::resource('sections', \App\Http\Controllers\Section::class)/*->can('isOrganizationUser', 'App\Models\User')*/->withTrashed();

    Route::resource('sections.desks', \App\Http\Controllers\Desk::class)/*->can('isOrganizationUser', 'App\Models\User')*/->withTrashed();

    Route::get('plan', function () {
        return Inertia::render("Plan", [
            'sections' => \App\Models\Section::query()
                ->where('organization_id', '=', Auth::user()->organization_id)
                ->where('active', '=', true)
                ->chunkMap(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                    'desks' => $item->desks()
                        ->where('active', '=', true)
                        ->get()
                        ->map(fn(Desk $desk) => [
                        'id' => $desk->id,
                        'name' => $desk->name,
                        'sale' => $desk->sale()
                    ])
                ])
                ->filter(fn($item) => count($item["desks"]) > 0),
            'products' => \App\Models\Product::query()
                ->where('organization_id', '=', Auth::user()->organization_id)
                ->where('active', '=', true)
                ->select(['id', 'name', 'price'])->get()
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
        $sale = $record->sales()->updateOrCreate(['id' => $request->get('id')], $request->except(['details']));
        collect($request->get('details'))->each(function($detail) use ($sale) {
            $sale->details()->updateOrCreate(['id' => $detail['id']], $detail);
        });
        return Redirect::route('plan');
    });

    Route::delete('plan/{desk}', function (Request $request, Desk $record) {
        $record->sale()->details()->delete($request->get('detail_id')) > 0 && $record->sale()->details()->count() == 0 && $record->sale()->delete();
        return Redirect::route('plan');
    });
});
