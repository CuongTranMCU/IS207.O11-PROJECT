<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
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
            'email' => 'sometimes|unique:users,email',
            'password' => 'sometimes',
            'address' => 'sometimes',
            'phone' => 'sometimes',
            'name' => 'sometimes'
        ];
    }
    public function prepareForValidation()
    {
        if ($this->email) $this->merge(['Email' => $this->email]);
        if ($this->password) $this->merge(['Password' => Hash::make($this->password)]);
        if ($this->address) $this->merge(['Address' => $this->address]);
        if ($this->phone) $this->merge(['Phone' => $this->phone]);
        if ($this->name) $this->merge(['Name' => $this->name]);
    }
}
