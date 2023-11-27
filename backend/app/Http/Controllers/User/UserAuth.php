<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;



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
        $token = Str::random(length:64);
        DB::table(table:'email_verify_tokens')->insert([
            'email'=>$request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
        Mail::send('verify-email', ['token' => $token, 'email' => $request->email], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Verify Email');
        });
        //return redirect()->route('user.home');
        return response()->json(['message' => 'Please verify email']);
    }
    public function completeRegister(Request $request){
        $email = $request->email;
        $token = $request->token;
        $verifyEmail = DB::table(table:'email_verify_tokens')
        ->where([
            'email'=> $email,
            'token' => $token
        ])->first();
        if($verifyEmail){
            $user = User::where('Email', $email)->first();
            $user->email_verified_at = now();
            $user->save();
            DB::table(table:'email_verify_tokens')->where(['email'=>$email])->delete();
            //return response()->json(['message' => 'Verify email success']);
            return redirect('https://example.com'); // page muốn hiện sau khi user click vào link verify email.
        }
        else return response()->json(['message' => 'Not found'], 404);
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
                if($user->email_verified_at){
                auth()->login($user);
                $token = $user->createToken('userToken', ['user'])->plainTextToken;
                $id = $user->User_ID;
                return response()->json(['token' => $token, 'userId' => $id, 'message' => 'Login Success'], 200);
                }
                else return response()->json(['message' => 'Please verify email'], 401);
            }
        }
        return response()->json(['message' => 'Not found'], 404);
    }
    public function postLogout(){
        $user = Auth::guard()->user();
        if ($user) {
            $user->tokens()->delete();
            Auth::guard()->logout();
            return response()->json(['message' => 'Logout Success'], 200);
           // return redirect()->route('user.login');
        }
        return response()->json(['message' => 'Logout Fail'], 200);
    }
}
