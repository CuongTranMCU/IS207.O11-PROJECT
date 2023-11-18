<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BulkStoreOrderRequest extends FormRequest
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
            '*.productId'=>['required'],
            '*.productName'=>['required'],
            '*.productPrice'=>['required'],
            '*.quantity'=>['required'],
            '*.transactionId'=>['required'],
        ];
    }
    public function prepareForValidation(){
        $data = [];
        foreach($this->toArray() as $obj){
            $obj['Product_ID'] = $obj['productId'] ?? null;
            $obj['Product_name'] = $obj['productName'] ?? null;
            $obj['Product_price'] = $obj['productPrice'] ?? null;
            $obj['Quantity'] = $obj['quantity'] ?? null;
            $obj['Transaction_ID'] = $obj['transactionId'] ?? null;
            $data[] = $obj;
        }
        $this->merge($data);
    }
}
