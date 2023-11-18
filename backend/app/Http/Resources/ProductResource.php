<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->Product_ID,
            'name'=>$this->Name,
            'price'=>$this->Price,
            'imgPath'=>$this->Img_path,
            'content'=>$this->Content,
            'quantity'=>$this->Quantity,
            'sold'=>$this->Sold,
            'view'=>$this->View,
            'slug'=>$this->Slug,
            'discount'=>$this->Discount,
            'categoryId'=>$this->Category_ID,
            'createdAt'=>$this->Created_at,
            'updatedAt'=>$this->Updated_at
        ];
    }
}
