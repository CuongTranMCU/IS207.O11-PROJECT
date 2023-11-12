<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderCollection;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Services\OrderQuery;
use App\Http\Requests\BulkStoreOrderRequest;
use Illuminate\Support\Arr;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    public function index(Request $request){
        $filter = new OrderQuery();
        $query = $filter->transform($request);
        $query = Order::where($query);
        $orders = $query->get();
        return new OrderCollection($orders);
    }
    public function show($id){
        $order = Order::where('Order_ID', $id)->first();
        if($order)
            return new OrderResource($order);
        else return response()->json(['message' => 'Not found'], 404);
    }

    public function update(UpdateOrderRequest $request, $id){
        $Order = Order::where('Order_ID', $id)->first();
        if($Order)
            $Order->update($request->all());
        else return response()->json(['message' => 'Not found'], 404);
    }

    public function destroy($id){
        $Order = Order::where('Order_ID', $id)->first();
        if($Order)
            $Order->delete($Order);
        else return response()->json(['message' => 'Not found'], 404);
    }

    public function bulkStore(BulkStoreOrderRequest $request){
        ddd('aa');
        $bulk = collect($request->all())->map(function($arr, $key){
            
            return Arr::except($arr,  ['productId', 'productName', 'productPrice']);
        });
        
        Order::insert($bulk->toArray());
    return response()->json(['message'=>'Success']);

    }
}
