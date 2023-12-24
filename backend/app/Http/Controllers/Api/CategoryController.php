<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeleteCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Services\CategoryQuery;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CategoryQuery();
        $query = $filter->transform($request);
        $query = Category::where($query);
        $includeProducts = request()->query('includeProducts');
        if ($includeProducts) {
            $query->with('products');
        }
        $categories = $query->get();
        return new CategoryCollection($categories);
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
    public function store(StoreCategoryRequest $request)
    {
        return new CategoryResource(Category::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $category = Category::where('Category_id', $id)->first();
        $includeProducts = request()->query('includeProducts');
        if($category)
            if($includeProducts)
                return new CategoryResource($category->loadMissing('products')); 
            else return new CategoryResource($category); 
        else return response()->json(['message' => 'Not found'], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $id)
{
    $category = Category::where('Category_ID', $id)->first();

    if ($category) {
        $data = array_filter($request->all(), function ($value) {
            return $value !== null && $value !== '';
        });
        $category->update($data);
        return response()->json(['message' => 'Success']);
    } else {
        return response()->json(['message' => 'Not found'], 404);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteCategoryRequest $request, $id)
    {
        $category = Category::where('Category_ID', $id)->first();
        if($category)
            $category->delete($category);
        else return response()->json(['message' => 'Not found']);
    }
}
