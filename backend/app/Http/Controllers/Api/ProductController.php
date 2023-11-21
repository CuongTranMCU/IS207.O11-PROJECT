<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeleteProductRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Services\ProductQuery;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index(Request $request)
     {
         $filter = new ProductQuery();
         $query = $filter->transform($request);
         $orderBy = $request->query('orderBy');
         $categoryId = $request->query('categoryId');
         $search = $request->query('search');
     
         // Call the parseOrderBy method to get the column and direction
         list($orderByColumn, $orderByDirection) = $this->parseOrderBy($orderBy);
     
         // Use the orderBy method to apply sorting
         $products = Product::where($query);
     
         if ($categoryId !== null) {
             $products->where('Category_ID', $request->categoryId);
         }
     
         if ($search !== null) {
             $products->where(function ($query) use ($search) {
                 $query->where('Name', 'like', "%$search%")
                     ->orWhere('Slug', 'like', "%$search%");
             });
         }
     
         $products = $products->orderBy($orderByColumn, $orderByDirection)->paginate(20);
     
         return new ProductCollection($products);
     }
     
    
    private function parseOrderBy($orderBy)
    {
        // Check if the orderBy value includes '-desc' for descending order
        $isDescending = Str::endsWith($orderBy, '-desc');
    
        // Extract the column name without the '-desc' suffix
        $column = $isDescending ? substr($orderBy, 0, -strlen('-desc')) : $orderBy;
    
        // Map user-friendly column names to actual database column names
        $columnMapping = [
            'price' => 'Price',
            'view' => 'View',
            'sold'=>'Sold',
            'createdAt'=>'Created_at',
            'discount'=>'Discount',
            // Add more columns as needed
        ];
    
        // Validate and sanitize values
        $column = $columnMapping[$column] ?? 'Product_ID';
        $direction = $isDescending ? 'desc' : 'asc';
    
        return [$column, $direction];
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
    public function store(StoreProductRequest $request)
    {
            return new ProductResource(Product::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = product::where('Product_ID', $id)->first();

        if($product){
            $product->View++;
            $product->save();
            return new ProductResource($product); 
        }
        else return response()->json(['message' => 'Not found'],404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $Product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $product = product::where('Product_ID', $id)->first();
        if($product){
            $product->update($request->all());
            return response()->json(['message'=>'Success']);
        }
        else return response()->json(['message' => 'Not found'],404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteProductRequest $request, $id)
    { 
        $product = product::where('Product_ID', $id)->first();
        if($product){
            $product->delete($product);
            return response()->json(['message'=>'Success']);
        }
        else return response()->json(['message' => 'Not found'],404);
    }
}
