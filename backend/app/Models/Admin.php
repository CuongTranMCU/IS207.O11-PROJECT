<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Admin extends Authenticatable
{

    use Notifiable, HasApiTokens;

    protected $table = 'admins';
    protected $guard = 'admin';

    protected $fillable = [
        'Name', 'Email', 'Password', 'Phone', 'Address',
    ];
    protected $hidden = 'Password';

    protected $primaryKey = 'Admin_ID';



}
