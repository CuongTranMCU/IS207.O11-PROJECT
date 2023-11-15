<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
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
            'productId'=>['sometimes','required'],
            'productName'=>['sometimes','required'],
            'productPrice'=>['sometimes','required'],
            'quantity'=>['sometimes','required'],
            'transactionId'=>['sometimes','required'],
        ];
    }
    public function prepareForValidation(){
        if($this->productId) $this->merge(['Product_ID' => $this->productId]);
        if($this->productName) $this->merge(['Product_name' => $this->productName]);
        if($this->productPrice) $this->merge(['Product_price' => $this->productPrice]); 
        if($this->quantity) $this->merge(['Quantity' => $this->quantity]);
        if($this->transactionId) $this->merge(['Transaction_ID' => $this->transactionId]);
    }
}
