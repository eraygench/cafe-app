<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Product extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Custom/Index', [
            'data' => \App\Models\Product::query()
                ->where('organization_id', '=', Auth::user()->organization_id)
                ->when(request('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(4)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                    'category_name' => $item->category?->name,
                    'price' => $item->price
                ]),
            'filter' => request('search'),
            'header' => 'Products',
            'route' => 'products',
            'columns' => [
                'name' => 'Name',
                'category_name' => 'Category',
                'price' => 'Price'
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
            'route' => 'products',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name'
                ],
                [
                    'name' => 'price',
                    'label' => 'Price',
                    'type' => 'number',
                    'value' => 0
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
            'price' => ['numeric', 'required'],
            'active' => ['boolean', 'required'],
            'show_in_menu' => ['boolean', 'required']
        ]);
        \App\Models\Product::create($input);

        return Redirect::route('products.index')->with(['message' => 'New product successfully created', 'icon' => 'success']);
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
        $record = \App\Models\Product::find($id);
        if(!$record)
            return Redirect::route('products.index');

        return Inertia::render('Admin/Custom/Create', [
            'id' => $record->id,
            'route' => 'products',
            'fields' => [
                [
                    'name' => 'name',
                    'label' => 'Name',
                    'value' => $record->name
                ],
                [
                    'name' => 'price',
                    'label' => 'Price',
                    'type' => 'number',
                    'value' => $record->price
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
        $record = \App\Models\Product::find($id);
        if(!$record)
            return Redirect::route('products.index');

        $record->update($request->all());
        return Redirect::route('products.index')->with(['message' => 'Product successfully updated', 'icon' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $record = \App\Models\Product::find($id);
        if(!$record)
            return Redirect::route('products.index');

        $record->delete();
        return Redirect::route('products.index')->with(['message' => 'Product successfully deleted', 'icon' => 'success']);
    }
}
