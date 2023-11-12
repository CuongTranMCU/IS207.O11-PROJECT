<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $fillable = ['Quantity'];
    protected $primaryKey = 'Order_ID';
    use HasFactory;
    public function product(){
        return $this->belongsTo(Product::class, 'Product_ID', 'Product_ID');
    }
    public function transaction(){
        return $this->belongsTo(Transaction::class, 'Transaction_ID', 'Transaction_ID');
    }
}
