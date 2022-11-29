<?php

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
   return 'index';
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

    Route::get('plan', [\App\Http\Controllers\Plan::class, 'index'])->name('plan.index');
    Route::put('plan/{desk}', [\App\Http\Controllers\Plan::class, 'update'])->name('plan.update');
    Route::delete('plan/{desk}/{detail_id}', [\App\Http\Controllers\Plan::class, 'destroy'])->name('plan.delete');

    Route::get('sales', function () {
        return Inertia::render('Admin/Custom/Index', [
            'data' => \App\Models\Sale::query()
                ->when(request('search'), function($query, $search) {
                    $query->where('id', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'date' => $item->created_at,
                    'desk' => $item->desk?->section?->name . ' ' . $item->desk?->name,
                    'amount' => $item->details()->get()->sum(fn ($detail) => $detail->quantity * $detail->price)
                ]),
            'filter' => request('search'),
            'header' => 'Sales',
            'columns' => [
                'id' => 'Sale Id',
                'date' => 'Date',
                'desk' => 'Desk',
                'amount' => 'Amount'
            ],
            'actions' => false,
            'routes' => [
                'search' => route('sales')
            ]
        ]);
    })->name('sales');

});
