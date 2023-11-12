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

Route::get('/', function () {
    return view('welcome');
});

//route cho user và admin, trang chủ


    //Route::get('home', [App\Http\Controllers\Api\HomeController::class, 'index']);
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

Route::get('',[App\Http\Controllers\User\UserAuth::class, 'index'])->name('user.home')->middleware('auth:sanctum', 'ability:user');
Route::get('register', [App\Http\Controllers\User\UserAuth::class, 'getRegister'])->name('user.prepareregister');
Route::post('register', [App\Http\Controllers\User\UserAuth::class, 'postRegister'])->name('user.register');
Route::get('login', [App\Http\Controllers\User\UserAuth::class, 'getLogin'])->name('user.preparelogin');
Route::post('login', [App\Http\Controllers\User\UserAuth::class, 'postLogin'])->name('user.login');
Route::get('logout', [App\Http\Controllers\User\UserAuth::class, 'postLogout'])->name('user.logout');


Route::get('user/{userId}',[App\Http\Controllers\User\UserController::class, 'information'])->middleware('auth:sanctum', 'ability:user');
Route::patch('user/{userId}',[App\Http\Controllers\User\UserController::class, 'update'])->middleware('auth:sanctum', 'ability:user');

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

//reset password
//Route::post('/forget-password', [App\Http\Controllers\Api\ForgetPasswordController::class, 'forgetPasswordPost']);  //Đồng thời gủi mail cho users gồm token và email.  
//Route::get('/forget-password/{token}',  [App\Http\Controllers\Api\ForgetPasswordController::class, 'getResetPassword'])->name('reset.password');
//Route::post('/foreget-password/{token}', [App\Http\Controllers\Api\ForgetPasswordController::class, 'postResetPassword']);  //FE post new password được nhập vào và email, token có trên url.



//route cho admin


//Route::get('home', [App\Http\Controllers\Admin\AdminAuth::class, 'index'])->name('admin.home')->middleware(['auth:sanctum' , 'ability:admin']);
Route::get('admin/login', [App\Http\Controllers\Admin\AdminAuth::class, 'getLogin'])->name('admin.preparelogin');
Route::post('admin/login', [App\Http\Controllers\Admin\AdminAuth::class, 'postLogin'])->name('admin.login');
Route::get('admin/logout', [App\Http\Controllers\Admin\AdminAuth::class, 'postLogout'])->name('admin.logout');


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
Route::get('userOnline', [App\Http\Controllers\Admin\UserManagement::class, 'userOnline'])->middleware(['auth:sanctum' , 'ability:admin']);

   
    

