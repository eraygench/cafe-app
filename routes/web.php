<?php

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

    Route::get("plan", function () {
        return Inertia::render("Plan");
    });

});
