<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class UserAuth extends Controller
{
    public function index(){
        return view('welcomeuser');
    }
    public function getLogin(){
        return view('loginuser');
    }

    public function getRegister(){
        return view('Register');
    }

    public function postRegister(Request $request){
        $request->validate([
            'email' => 'required|unique:users,email',
            'password' => ['required'],
        ]);
        
        $user = new User;
        $user->Email = $request->email;
        $user->Password = Hash::make($request->password);
        $user->save();

        //auth()->login($user);
        

        //return redirect()->route('user.home');
        return response()->json(['message' => 'Registate Success']);
    }

    public function postLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

      //  $email = DB::raw("'$credentials[email]'");
        $email = $credentials['email'];
        $password  = $request->password;
    
        $user = User::where('Email', $email)->first();

        if($user){
            if (Hash::check($password, $user->Password)){
                auth()->login($user);
                $token = $user->createToken('userToken', ['user'])->plainTextToken;
                $id = $user->User_ID;
                return response()->json(['token' => $token, 'userId' => $id, 'message' => 'Login Success'], 200);
                //return redirect()->route('user.home');
            }
        }
        return response()->json(['message' => 'Not found']);
    }
    public function postLogout(){
        $user = Auth::guard()->user();
        if ($user) {
            $user->tokens()->delete();
            Auth::guard()->logout();
            return response()->json(['message' => 'Logout Success'], 200);
           // return redirect()->route('user.login');
        }
        abort(Response::HTTP_FORBIDDEN);
    }
}
