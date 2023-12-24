<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateCategoryRequest extends FormRequest
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
        if($method == 'PUT')
        {
            return [
                'name' => ['required'],
                'slug' =>['required']
                ];  
        } else if($method == 'PATCH'){
            return [
                'name' => ['sometimes'],
                'slug' =>['sometimes']
                ];
        }
    }
    public function prepareForValidation(){
        if($this->name)
            $this->merge([
                'Name' => $this->name
            ]);
        if($this->slug)
            $this->merge([
            'Slug' => $this->slug
        ]);
    }
}
