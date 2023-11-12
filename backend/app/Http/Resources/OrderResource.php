<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->Order_ID,
            'productId' => $this->Product_ID,
            'productName'=>$this->Product_name,
            'productPrice'=>$this->Product_price,
            'quantity'=>$this->Quantity,
            'createdAt'=>$this->Created_at,
            'updatedAt'=>$this->Updated_at
        ];
    }
    
}
