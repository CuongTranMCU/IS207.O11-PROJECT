<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        $user = $this->user(); 
        return $user != null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required'],
            'price'=>['required'],
            'imgPath'=>['required'],
            'contents'=>['required'],
            'slug'=>['required'],
            'quantity'=>['required'],
            'sold'=>['sometimes', 'required'],
            'view'=>['sometimes', 'required'],
            'discount'=>['required'],
            'categoryId'=>['required']
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'Name'=>$this->name,
            'Price'=>$this->price,
            'Img_path'=>$this->imgPath,
            'Content'=>$this->contents,
            'Slug'=>$this->slug,
            'Quantity'=>$this->quantity,
            'Discount'=>$this->discount,
            'Category_ID'=>$this->categoryId
        ]);
        if($this->sold){
            $this->merge([
                'Sold'=>$this->sold
            ]);
        }
        if($this->view){
            $this->merge([
                'View'=>$this->view
            ]);
        }
    }
}
