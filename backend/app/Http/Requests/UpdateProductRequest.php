<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
        $method = $this->method();
        if($method == 'PUT'){
            return [
                'name'=>['required'],
                'price'=>['required'],
                'imgPath'=>['required'],
                'content    s'=>['required'],
                'quantity'=>['required'],
                'sold'=>['sometimes', 'required'],
                'view'=>['sometimes', 'required'],
                'categoryId'=>['required']
            ];
        } else if($method == 'PATCH'){
        return [
            'name'=>['sometimes', 'required'],
            'price'=>['sometimes', 'required'],
            'imgPath'=>['sometimes', 'required'],
            'contents'=>['sometimes', 'required'],
            'quantity'=>['sometimes', 'required'],
            'sold'=>['sometimes', 'required'],
            'view'=>['sometimes', 'required'],
            'categoryId'=>['sometimes', 'required']
        ];
    }
}
    protected function prepareForValidation()
    {
        if($this->name)
        $this->merge([
            'Name' => $this->name,
        ]);
        if($this->price)
        $this->merge([
            'Price' => $this->price
        ]);
        if($this->imgPath)
        $this->merge([
            'Img_path' => $this->imgPath
        ]);
        if($this->imgPath)
        $this->merge([
            'Img_path' => $this->imgPath
        ]);
        if($this->contents)
        $this->merge([
            'Content' => $this->contents
        ]);
        if($this->quantity)
        $this->merge([
            'Quantity' => $this->quantity
        ]);
        if($this->sold)
        $this->merge([
            'Sold' => $this->sold
        ]);
        if($this->view)
        $this->merge([
            'View' => $this->view
        ]);
        if($this->categoryId)
        $this->merge([
            'Category_ID' => $this->categoryId
        ]);
    }
}
