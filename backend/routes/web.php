<?php


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



   
    //Login admin.
Route::get('admin/login', [App\Http\Controllers\Admin\AdminAuth::class, 'getLogin'])->name('admin.preparelogin');
Route::post('admin/login', [App\Http\Controllers\Admin\AdminAuth::class, 'postLogin'])->name('admin.login');
Route::get('admin/logout', [App\Http\Controllers\Admin\AdminAuth::class, 'postLogout'])->name('admin.logout');

//route cho user

Route::get('',[App\Http\Controllers\User\UserAuth::class, 'index'])->name('user.home')->middleware('auth:sanctum', 'ability:user');
Route::get('register', [App\Http\Controllers\User\UserAuth::class, 'getRegister'])->name('user.prepareregister');
Route::post('register', [App\Http\Controllers\User\UserAuth::class, 'postRegister'])->name('user.register');
Route::get('login', [App\Http\Controllers\User\UserAuth::class, 'getLogin'])->name('user.preparelogin');
Route::post('login', [App\Http\Controllers\User\UserAuth::class, 'postLogin'])->name('user.login');
Route::get('logout', [App\Http\Controllers\User\UserAuth::class, 'postLogout'])->name('user.logout');
