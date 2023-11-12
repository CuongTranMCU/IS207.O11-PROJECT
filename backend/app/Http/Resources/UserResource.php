<?php

namespace App\Http\Resources;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'userId'=>$this->User_ID,
            'email'=>$this->Email,
            'name'=>$this->Name,
            'address'=>$this->Address,
            'phone'=>$this->Phone,
            'transactions'=>TransactionResource::collection($this->whenLoaded('transactions')),
            'createdAt'=>$this->Created_at,
            'updatedAt'=>$this->Updated_at
        ];
    }
}
