<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class User extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Custom/Index', [
            'data' => \App\Models\User::query()
                ->when(request('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->where('id', '!=', Auth::user()->id)
                ->paginate(4)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                    /*'can' => [
                        'edit' => Auth::user()->can('edit', $user),
                        'delete' => Auth::user()->can('delete', $user)
                    ]*/
                ]),
            'filter' => request('search'),
            'header' => 'Users',
            'route' => 'users',
            'columns' => [
                'name' => 'Name'
            ]
            /*'can' => [
                'createUser' => Auth::user()->can('create', User::class)
            ]*/
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Custom/Create', [
            'route' => 'users',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name'
                ],
                [
                    'name' => 'email',
                    'label' => 'Email',
                    'type' => 'email'
                ],
                [
                    'name' => 'password',
                    'label' => 'Password',
                    'type' => 'password'
                ],
                [
                    'name' => 'active',
                    'label' => 'Active',
                    'type' => 'checkbox',
                    'value' => true
                ]
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $input = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email', 'max:50', 'unique:users'],
            'password' => ['required', 'min:4', 'max:32']
        ]);
        $input["password"] = Hash::make($input["password"]);
        \App\Models\User::create($input);

        return Redirect::route('users.index')->with(['message' => 'New user successfully created']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $record = \App\Models\User::find($id);
        if(!$record)
            return Redirect::route('users.index');

        return Inertia::render('Admin/Custom/Create', [
            'id' => $record->id,
            'route' => 'users',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name',
                    'value' => $record->name
                ],
                [
                    'name' => 'email',
                    'label' => 'Email',
                    'type' => 'email',
                    'value' => $record->email
                ],
                [
                    'name' => 'password',
                    'label' => 'Password',
                    'type' => 'password'
                ],
                [
                    'name' => 'active',
                    'label' => 'Active',
                    'type' => 'checkbox',
                    'value' => $record->active
                ]
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $record = \App\Models\User::find($id);
        if(!$record)
            return Redirect::route('users.index');

        $record->update($request->all());
        return Redirect::route('users.index')->with(['message' => 'User successfully updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $record = \App\Models\User::find($id);
        if(!$record)
            return Redirect::route('users.index');

        $record->delete();
        return Redirect::route('users.index')->with(['message' => 'User successfully deleted']);
    }
}
