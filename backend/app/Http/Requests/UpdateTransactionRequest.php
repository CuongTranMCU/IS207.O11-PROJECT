<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTransactionRequest extends FormRequest
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
        $method = $this->method();
        if($method == 'PATCH')
        return [
                'userId'=>['sometimes', 'required'],
                'name'=>['sometimes', 'required'],
                'Phone'=>['sometimes', 'required'],
                'address'=>['sometimes', 'required'],
                'status'=>['sometimes', 'required'],
                'totalMoney'=>['sometimes', 'required'],
                'paymentMethod'=>['sometimes', 'required'],
                'note'=>['sometimes', 'required']
        ];
    }
    public function prepareForValidation(){
        if($this->userId) $this->merge(['User_ID' => $this->userId]);
        if($this->name) $this->merge(['Name' => $this->name]);
        if($this->phone) $this->merge(['Phone' => $this->phone]); 
        if($this->address) $this->merge(['Address' => $this->address]);
        if($this->status) $this->merge(['Status' => $this->status]);
        if($this->totalMoney) $this->merge(['Total_money' => $this->totalMoney]);
        if($this->paymentMethod) $this->merge(['Payment_method' => $this->paymentMethod]);
        if($this->note) $this->merge(['Note' => $this->note]);
    }
}
