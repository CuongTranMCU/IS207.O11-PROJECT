<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['Name', 'Price', 'Img_path', 'Content', 'Quantity', 'Sold', 'View', 'Discount', 'Category_ID', 'Slug'];
    protected $primaryKey = 'Product_ID';
    use HasFactory;
    public function orderes(){
        return $this->hasMany(Order::class, 'Product_ID', 'Product_ID');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'Category_ID', 'Category_ID');
    }
}
