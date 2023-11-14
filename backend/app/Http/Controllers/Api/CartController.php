<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use Illuminate\Http\Request;
use App\Services\CartQuery;
use App\Http\Resources\CartCollection;
use App\Http\Resources\CartResource;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CartQuery();
        $query = $filter->transform($request);
        $query = cart::where($query);
        $orders = $query->get();
        return new CartCollection($orders);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        return new CartResource(Cart::create($request->all())); 
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $cart = Cart::where('id', $id)->first();
        if($cart){
            return new CartResource($cart);
        }
        return response()->json(['message'=>'Not found'], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, $id)
    {
        $cart = Cart::where('id', $id)->first();
        if($cart){
            $cart->update($request->all());
            return response()->json(['message'=>'Success']);
        }
        else return response()->json(['message' => 'Not found'], 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cart = Cart::where('id', $id)->first();
        if($cart){
            $cart->delete($cart);
            return response()->json(['message'=>'Success']);
        }
        else return response()->json(['message' => 'Not found'], 404);
    }
    public function bulkDestroy(Request $request, $userId){
        $request->validate([
            'status'=>'required'
        ]);
 
        $status = $request->query('status');
        $carts = Cart::where('User_ID', $userId)->get();
        foreach($carts as $cart){
            if($cart->Status == $status)
                $cart->delete($cart);
        }
        return response()->json(['message'=>'Success']);
    }
}
