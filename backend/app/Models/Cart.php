<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['Quantity', 'Product_name', 'Product_price', 'Product_ID', 'User_ID'];
    use HasFactory;
    public function product(){
        return $this->belongsTo(Product::class, 'Product_ID', 'Product_ID');
    }
    public function user(){
        return $this->belongsTo(User::class, 'User_ID', 'User_ID');
    }
}
