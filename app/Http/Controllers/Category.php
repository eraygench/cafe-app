<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Category extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Custom/Index', [
            'data' => \App\Models\Category::query()
                ->where('organization_id', '=', Auth::user()->organization_id)
                ->when(request('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(4)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name
                ]),
            'filter' => request('search'),
            'header' => 'Categories',
            'route' => 'categories',
            'columns' => [
                'name' => 'Name'
            ]
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
            'route' => 'categories',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name'
                ],
                [
                    'name' => 'active',
                    'label' => 'Active',
                    'type' => 'checkbox',
                    'value' => true
                ],
                [
                    'name' => 'show_in_menu',
                    'label' => 'Show In Menu',
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
            'name' => ['required', 'max:100'],
            'active' => ['boolean', 'required'],
            'show_in_menu' => ['boolean', 'required']
        ]);
        \App\Models\Category::create($input);

        return Redirect::route('categories.index')->with(['message' => 'New category successfully created']);
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
        $record = \App\Models\Category::find($id);
        if(!$record)
            return Redirect::route('categories.index');

        return Inertia::render('Admin/Custom/Create', [
            'id' => $record->id,
            'route' => 'categories',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name',
                    'value' => $record->name
                ],
                [
                    'name' => 'active',
                    'label' => 'Active',
                    'type' => 'checkbox',
                    'value' => $record->active
                ],
                [
                    'name' => 'show_in_menu',
                    'label' => 'Show In Menu',
                    'type' => 'checkbox',
                    'value' => $record->show_in_menu
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
        $record = \App\Models\Category::find($id);
        if(!$record)
            return Redirect::route('categories.index');

        $record->update($request->all());
        return Redirect::route('categories.index')->with(['message' => 'Category successfully updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $record = \App\Models\Category::find($id);
        if(!$record)
            return Redirect::route('categories.index');

        $record->delete();
        return Redirect::route('categories.index')->with(['message' => 'Category successfully deleted']);
    }
}
