<?php

namespace App\Http\Controllers\Admin;
use App\Models\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminAuth extends Controller
{
    public function index(){
        return view('welcomead');
    }
    public function getLogin(){
        return view('loginad');
    }

    public function postLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $email = DB::raw("'$credentials[email]'");
        $password  = $request->input('password');
    
        $admin = Admin::where('Email', $email)->first();

        if($admin){
            if (Hash::check($password, $admin->Password)){
                Auth::guard('admin')->login($admin);
                $token = $admin->createToken('adminToken')->plainTextToken;
                //return response()->json(['message' => 'Login Success']);
                return response()->json(['token' => $token, 'message'=>'Admin login successfully'], 200);
                //return redirect()->route('admin.home');
                
            }
        }
        return response()->json(['message' => 'Not found'], 404);
    }

    public function postLogout(){
        $user = Auth::guard('admin')->user();
        if ($user) {
            $user->tokens()->delete();
            Auth::guard('admin')->logout();
            //return redirect()->route('admin.login');
            return response()->json(['message' => 'Logout Success']);
        }
        abort(Response::HTTP_FORBIDDEN);
    }
}
