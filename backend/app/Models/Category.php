<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = ['Name', 'Slug'];
    protected $primaryKey = 'Category_ID';
    use HasFactory;
    public function products()
    {
        return $this->hasMany(Product::class, 'Category_ID', 'Category_ID');
    }
}
