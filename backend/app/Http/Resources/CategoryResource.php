<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
            'id'=>$this->Category_ID,
            'name'=>$this->Name,
            'slug'=>$this->Slug,
            'createdAt'=>$this->Created_at,
            'updatedAt'=>$this->Updated_at,
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
