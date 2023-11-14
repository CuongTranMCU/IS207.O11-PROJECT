<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCartRequest extends FormRequest
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
            'productId'=>['sometimes', 'required'],
            'productName'=>['sometimes', 'required'],
            'productPrice'=>['sometimes', 'required'],
            'quantity'=>['sometimes', 'required'],
            'userId'=>['sometimes', 'required'],
            'status'=>['sometimes', 'required']
        ];
    }
    public function prepareForValidation(){
        if($this->productId) $this->merge(['Product_ID' => $this->productId]);
        if($this->productName) $this->merge(['Product_name' => $this->productName]);
        if($this->productPrice) $this->merge(['Product_price' => $this->productPrice]); 
        if($this->quantity) $this->merge(['Quantity' => $this->quantity]);
        if($this->userId) $this->merge(['User_ID' => $this->userId]);
        if($this->status) $this->merge(['Status' => $this->status]);
    }
}
