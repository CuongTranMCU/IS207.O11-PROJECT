<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    public function information($userId){
        $includeTransactions = request()->query('includeTransactions');
        $user = User::find($userId);
        //ddd('a');
        if($user)
            if($includeTransactions)
                return new UserCollection($user->loadMissing('transactions'));
            else return new UserResource($user);
        return response()->json(['message'=>'Not found'], 404);
    }
    public function update(UpdateUserRequest $request, $userId){
        $user = User::find($userId);
        if($user){
            $user->update($request->all());
            return response()->json(['message'=>'Success']);
            //return response()->json(['message'=>$request->all()]);
        }
        else return response()->json(['message'=>'Not found'], 404);
    }

}
