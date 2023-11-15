<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class Ba extends Controller
{
    public function index(){
        
    }
    public function calculateSoldProducts(Request $request) {
        // Kiểm tra xem $request->period có tồn tại hay không
        if ($request->has('period')) {
            $numberOfDays = $request->period;
        } else {
            // Nếu không có period, sử dụng Created_at của products
            $numberOfDays = null;
        }
    
        $products = Product::all();
    
        $result = [];
    
        foreach ($products as $product) {
            // Lấy ngày tạo của sản phẩm
            $productStartDate = $product->Created_at;
    
            $soldProductsStatistics = DB::table('orders')
                ->join('transactions', 'orders.Transaction_ID', '=', 'transactions.Transaction_ID')
                ->where('orders.Product_ID', $product->Product_ID)
                ->where('transactions.Status', 9)
                ->whereDate('transactions.Created_at', '>=', $productStartDate)
                ->selectRaw('SUM(orders.Quantity) as total_sold, 
                              SUM(orders.Quantity * orders.Product_price) as total_revenue')
                ->first();
    
            // Tính số ngày từ Created_at của sản phẩm đến now
            $numberOfDays = $numberOfDays ?: now()->diffInDays($productStartDate);
    
            // Tính trung bình số lượng sản phẩm bán được mỗi ngày cho mỗi Product_ID
            $averageSoldPerDay = $numberOfDays ? ($soldProductsStatistics->total_sold / max($numberOfDays, 1)) : null;
    
            $result[] = [
                'productId' => $product->Product_ID,
                'name' => $product->Name,
                'totalSold' => $soldProductsStatistics->total_sold ?? $product->Sold,
                'avgSoldPerDay' => $averageSoldPerDay,
                'totalRevenue' => $soldProductsStatistics->total_revenue ?? 0,
            ];
        }
    
        return response()->json($result);
    }
    public function showProduct(Request $request, $id){
        if ($request->has('period')) {
            $numberOfDays = $request->period;
        } else {
            // Nếu không có period, sử dụng Created_at của products
            $numberOfDays = null;
        }
    
        $product = Product::where('Product_ID', $id)->first();
    
        $result = [];
            // Lấy ngày tạo của sản phẩm
            $productStartDate = $product->Created_at;
    
            $soldProductsStatistics = DB::table('orders')
                ->join('transactions', 'orders.Transaction_ID', '=', 'transactions.Transaction_ID')
                ->where('orders.Product_ID', $product->Product_ID)
                ->where('transactions.Status', 9)
                ->whereDate('transactions.Created_at', '>=', $productStartDate)
                ->selectRaw('SUM(orders.Quantity) as total_sold, 
                              SUM(orders.Quantity * orders.Product_price) as total_revenue')
                ->first();
    
            // Tính số ngày từ Created_at của sản phẩm đến now
            $numberOfDays = $numberOfDays ?: now()->diffInDays($productStartDate);
    
            // Tính trung bình số lượng sản phẩm bán được mỗi ngày cho mỗi Product_ID
            $averageSoldPerDay = $numberOfDays ? ($soldProductsStatistics->total_sold / max($numberOfDays, 1)) : null;
    
            $result[] = [
                'productId' => $product->Product_ID,
                'name' => $product->Name,
                'totalSold' => $soldProductsStatistics->total_sold ?? $product->Sold,
                'avgSoldPerDay' => $averageSoldPerDay,
                'totalRevenue' => $soldProductsStatistics->total_revenue ?? 0,
            ];
    
        return response()->json($result);
}
}