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
            '*.cartId' => ['required'],
            '*.productId' => ['sometimes', 'required'],
            '*.productName' => ['sometimes', 'required'],
            '*.productPrice' => ['sometimes', 'required'],
            '*.quantity' => ['sometimes', 'required'],
            '*.userId' => ['sometimes', 'required'],
            '*.status' => ['sometimes', 'required']
        ];
    }
    public function prepareForValidation()
    {
        $data = $this->toArray();
    
        if (empty($data)) {
            return;
        }
    
        $formattedData = [];
        foreach ($data as $obj) {
            $formattedObj = [];

            $formattedObj['id'] = $obj['cartId'];
    
            // Kiểm tra xem các trường tồn tại trước khi chuyển đổi
            if ($this->has('productId')) {
                $formattedObj['Product_ID'] = $obj['productId'];
            }
    
            if ($this->has('productName')) {
                $formattedObj['Product_name'] = $obj['productName'];
            }
    
            if ($this->has('productPrice')) {
                $formattedObj['Product_price'] = $obj['productPrice'];
            }
    
            if ($this->has('quantity')) {
                $formattedObj['Quantity'] = $obj['quantity'];
            }
    
            if ($this->has('transactionId')) {
                $formattedObj['Transaction_ID'] = $obj['transactionId'];
            }
    
            if ($this->has('userId')) {
                $formattedObj['User_ID'] = $obj['userId'];
            }
    
            if ($this->has('status')) {
                $formattedObj['Status'] = $obj['status'];
            }
    
            $formattedData[] = $formattedObj;
        }
    
        $this->merge($formattedData);
    }
}
