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
        $carts = Cart::where($query)->get();
        return new CartCollection($carts);
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
    public function update(Request $request)
    {
        // Lấy dữ liệu từ JSON
    $jsonData = $request->json()->all();

    // Lấy danh sách các cartId từ JSON
    $cartIds = array_column($jsonData, 'cartId');

    // Lấy danh sách các bản ghi từ cơ sở dữ liệu có cartId nằm trong danh sách trên
    $cartsToUpdate = Cart::whereIn('id', $cartIds)->get();

    // Cập nhật thông tin từ JSON cho từng bản ghi
    foreach ($cartsToUpdate as $cart) {
        $jsonDataForCart = collect($jsonData)->firstWhere('cartId', $cart->id);
       // return response()->json(['message' => $jsonDataForCart]);

        if ($jsonDataForCart) {
            // Loại bỏ giá trị null từ mảng dữ liệu JSON
            $updateData = array_filter([
                'Product_ID' => $jsonDataForCart['productId'] ?? null,
                'Product_name' => $jsonDataForCart['productName'] ?? null,
                'Product_price' => $jsonDataForCart['productPrice'] ?? null,
                'Quantity' => $jsonDataForCart['quantity'] ?? null,
                'User_ID' => $jsonDataForCart['userId'] ?? null,
                'Status' => $jsonDataForCart['status'] ?? null,
                'Img_path'=> $jsonDataForCart['imgPath'] ?? null
            ]);

            // Cập nhật bản ghi chỉ với các trường có giá trị
            $cart->update($updateData);
        } else return response()->json(['message'=>'Success']);
    }

    return response()->json(['message' => 'Success']);
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
    public function bulkDestroy(Request $request){
        $filter = new CartQuery();
        $query = $filter->transform($request);
        $carts = Cart::where($query)->get();
        foreach($carts as $cart){
                $cart->delete($cart);
        }
        return response()->json(['message'=>'Success']);
    }
}
