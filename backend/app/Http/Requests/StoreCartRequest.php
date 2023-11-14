<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'productId'=>['required'],
            'productName'=>['required'],
            'productPrice'=>['required'],
            'quantity'=>['required'],
            'userId'=>['required'],
            'status'=>['required']
        ];
    }
    public function prepareForValidation(){
        $this->merge([
            'Product_ID'=>$this->productId,
            'Product_name'=>$this->productName,
            'Product_price'=>$this->productPrice,
            'Quantity'=>$this->quantity,
            'User_ID'=>$this->userId,
            'Status'=>$this->status
        ]);
    }
}
