<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

class ForgetPasswordController extends Controller
{
    public function forgetPasswordPost(Request $request){
        $request->validate([
            'email' => 'required|email',
        ]);
        $email = DB::raw("'$request->email'");
        $token = Str::random(length:64);
        DB::table(table: 'password_reset_tokens')->insert([
            'email'=>$request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

        Mail::send('forget-password', ['token' => $token, 'email' => $request->email], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Reset Password');
        });

        return response()->json(['message'=>'Success']);
    }

    public function getResetPassword(){

    }
    public function postResetPassword(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $email = DB::raw("'$credentials[email]'");
        $password  = $request->password;
        $token = $request->token;

        $updatePassword = DB::table(table:'password_reset_tokens')
            ->where([
                'email' => $email,
                'token' => $token
            ])->first();

        if(!$updatePassword){
            return response()->json(['message'=>'Invalid']);
        }

        $user = User::where('Email', $email)->first();
        $user->update(['Password' => Hash::make($password)]);

        DB::table(table:'password_reset_tokens')->where(['email'=>$email])->delete();

        return response()->json(['message'=>'Change password success']);
    }
}
