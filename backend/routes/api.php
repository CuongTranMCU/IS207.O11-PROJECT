<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
/*Route::group(['namespace'=>'App\Http\Controllers\Api', 'middleware'=>'auth:sanctum'], function(){
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('products', ProductController::class);
});*/
Route::get('categories', [App\Http\Controllers\Api\CategoryController::class, 'index']);  
Route::get('categories/{id}', [App\Http\Controllers\Api\CategoryController::class, 'show']); 
Route::get('products', [App\Http\Controllers\Api\ProductController::class, 'index']);  
Route::get('products/{id}', [App\Http\Controllers\Api\ProductController::class, 'show']); 


Route::post('categories', [App\Http\Controllers\Api\CategoryController::class, 'store'])->middleware(['auth:sanctum' , 'ability:admin']);           
Route::delete('categories/{id}', [App\Http\Controllers\Api\CategoryController::class, 'destroy'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::patch('categories/{id}', [App\Http\Controllers\Api\CategoryController::class, 'update'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::put('categories/{id}', [App\Http\Controllers\Api\CategoryController::class, 'update'])->middleware(['auth:sanctum' , 'ability:admin']);


Route::post('products', [App\Http\Controllers\Api\ProductController::class, 'store'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::delete('products/{id}', [App\Http\Controllers\Api\ProductController::class, 'destroy'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::patch('products/{id}', [App\Http\Controllers\Api\ProductController::class, 'update'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::put('products/{id}', [App\Http\Controllers\Api\ProductController::class, 'update'])->middleware(['auth:sanctum' , 'ability:admin']);
//route cho user




Route::get('user/{userId}',[App\Http\Controllers\User\UserController::class, 'information'])->middleware('auth:sanctum', 'ability:user');
Route::patch('user/{userId}',[App\Http\Controllers\User\UserController::class, 'update'])->middleware('auth:sanctum', 'ability:user');

Route::get('cart', [App\Http\Controllers\Api\CartController::class, 'index'])->middleware('auth:sanctum', 'ability:user');
Route::post('cart', [App\Http\Controllers\Api\CartController::class, 'store'])->middleware('auth:sanctum', 'ability:user');
Route::patch('cart', [App\Http\Controllers\Api\CartController::class, 'update'])->middleware('auth:sanctum', 'ability:user');
Route::delete('cart/destroy/{id}', [App\Http\Controllers\Api\CartController::class, 'destroy'])->middleware('auth:sanctum', 'ability:user');
Route::delete('cart/bulkdestroy', [App\Http\Controllers\Api\CartController::class, 'bulkDestroy'])->middleware('auth:sanctum', 'ability:user');

//làm filter cho transaction
Route::patch('transactions/{transactionId}', [App\Http\Controllers\Api\TransactionController::class, 'update'])->middleware('auth:sanctum', 'ability:user');   //cập nhập status của transaction
Route::get('transactions/{transactionId}', [App\Http\Controllers\Api\TransactionController::class, 'show'])->middleware('auth:sanctum', 'ability:user');    //xem 1 transaction của user
Route::get('user/{userId}/transactions', [App\Http\Controllers\Api\TransactionController::class, 'index'])->middleware('auth:sanctum', 'ability:user');                    //xem tất cả transaction của user
Route::post('transactions',[App\Http\Controllers\Api\TransactionController::class, 'create'])->middleware('auth:sanctum', 'ability:user');   // Tạo transaction rỗng
Route::delete('transactions/{id}', [App\Http\Controllers\Api\TransactionController::class, 'destroy'])->middleware('auth:sanctum', 'ability:user');   // Tạo transaction rỗng)

Route::get('orders', [App\Http\Controllers\Api\OrderController::class, 'index'])->middleware('auth:sanctum', 'ability:admin');   // Tạo transaction rỗng)
Route::get('orders/{id}', [App\Http\Controllers\Api\OrderController::class, 'show'])->middleware('auth:sanctum', 'ability:user');   // Tạo transaction rỗng)
Route::post('orders/bulk', [App\Http\Controllers\Api\OrderController::class, 'bulkStore'])->middleware('auth:sanctum', 'ability:user');   // Tạo transaction rỗng))
Route::patch('orders/{id}', [App\Http\Controllers\Api\OrderController::class, 'update'])->middleware('auth:sanctum', 'ability:user'); 
Route::delete('orders/{id}', [App\Http\Controllers\Api\OrderController::class, 'destroy'])->middleware('auth:sanctum', 'ability:user');

//Payment method
Route::post('payment_momo', [App\Http\Controllers\Api\PaymentController::class, 'payment_momo']);
Route::post('payment_cod', [App\Http\Controllers\Api\PaymentController::class, 'payment_cod']);

//Route::get('home', [App\Http\Controllers\Admin\AdminAuth::class, 'index'])->name('admin.home')->middleware(['auth:sanctum' , 'ability:admin']);


Route::get('transactions', [App\Http\Controllers\Admin\TransactionManagement::class, 'index'])->middleware(['auth:sanctum' , 'ability:admin']);
//Route::get('transactions/{id}', [App\Http\Controllers\Admin\TransactionManagement::class, 'show'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::post('transactions/period', [App\Http\Controllers\Admin\TransactionManagement::class, 'TransactionInPTime'])->middleware(['auth:sanctum' , 'ability:admin']);
//Route::patch('transactions/{id}', [App\Http\Controllers\Admin\TransactionManagement::class, 'update'])->middleware(['auth:sanctum' , 'ability:admin']);


Route::get('statistics/products', [App\Http\Controllers\Admin\ba::class, 'calculateSoldProducts']);//->middleware(['auth:sanctum' , 'ability:admin']);
//Route::get('statistics/products', [App\Http\Controllers\Admin\ba::class, 'calculateAverageSoldPerDayForProducts']);//->middleware(['auth:sanctum' , 'ability:admin']);
Route::get('statistics/products/{id}', [App\Http\Controllers\Admin\ba::class, 'showProduct'])->middleware(['auth:sanctum' , 'ability:admin']);

Route::get('admin/allUsers', [App\Http\Controllers\Admin\UserManagement::class, 'index'])->name('ad_user.home')->middleware(['auth:sanctum' , 'ability:admin']);
// Route::get('admin/users/{id}', [App\Http\Controllers\Admin\UserManagement::class, 'show'])->name('ad_user.show')->middleware(['auth:sanctum' , 'ability:admin']);
Route::post('createUser', [App\Http\Controllers\Admin\UserManagement::class, 'add'])->middleware(['auth:sanctum' , 'ability:admin']);
Route::delete('users/{id}', [App\Http\Controllers\Admin\UserManagement::class, 'destroy'])->middleware(['auth:sanctum' , 'ability:admin']);

Route::get('userOnline', 'App\Http\Controllers\Admin\UserManagement@userOnline')
    ->middleware(['auth:sanctum', 'ability:admin']); // Chỉ cho phép người dùng có ability 'admin'
