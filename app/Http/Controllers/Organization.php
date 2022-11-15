<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class Organization extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Admin/Organizations/Index', [
            'organizations' => \App\Models\Organization::query()
                ->when(request('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(4)
                ->withQueryString()
                ->through(fn($organization) => [
                    'id' => $organization->id,
                    'name' => $organization->name,
                    /*'can' => [
                        'edit' => Auth::user()->can('edit', $user),
                        'delete' => Auth::user()->can('delete', $user)
                    ]*/
                ]),
            'filter' => request('search'),
            /*'can' => [
                'createUser' => Auth::user()->can('create', User::class)
            ]*/
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return Inertia::render('Admin/Organizations/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $organization = $request->validate([
            'name' => ['required', 'max:50'],
            'active' => ['boolean', 'required'],
            'show_menu' => ['boolean', 'required']
        ]);
        \App\Models\Organization::create($organization);

        return Redirect::route('organizations.index')->with(['message' => 'New organization successfully created']);
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
     * @return Response
     */
    public function edit($id)
    {
        $organization = \App\Models\Organization::find($id);
        if(!$organization)
            return Redirect::route('organizations.index');

        return Inertia::render('Admin/Organizations/Create', [
            'organization' => $organization->only(['id', 'name', 'active', 'show_menu'])
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
        $organization = \App\Models\Organization::find($id);
        if(!$organization)
            return Redirect::route('organizations.index');

        $organization->update($request->except(['id']));
        return Redirect::route('organizations.index')->with(['message' => 'Organization successfully updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $organization = \App\Models\Organization::find($id);
        if(!$organization)
            return Redirect::route('organizations.index');

        $organization->delete();
        return Redirect::route('organizations.index')->with(['message' => 'New organization successfully deleted']);
    }
}
