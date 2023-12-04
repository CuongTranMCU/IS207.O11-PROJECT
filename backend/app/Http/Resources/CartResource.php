<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'productId' => $this->Product_ID,
            'productName'=>$this->Product_name,
            'productPrice'=>$this->Product_price,
            'quantity'=>$this->Quantity,
            'userId'=>$this->User_ID,
            'status'=>$this->Status,
            'imgPath'=>$this->Img_path,
            'createdAt'=>$this->created_at,
            'updatedAt'=>$this->updated_at
        ];
    }
}
