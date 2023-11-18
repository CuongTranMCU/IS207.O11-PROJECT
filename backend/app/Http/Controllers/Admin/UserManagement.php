<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Response;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\DB;
use App\Services\UserQuery;
use Illuminate\Support\Facades\Hash;

class UserManagement extends Controller
{
    public function index(Request $request){
        $filter = new UserQuery();
        $query = $filter->transform($request);
        if(count($query) == 0)
            return new UserCollection(User::all());
        else return new UserCollection(User::where($query)->get());
    }

    public function userOnline(){
        $online_ids = DB::table('personal_access_tokens')->pluck('tokenable_id')->toArray();
        $users = User::whereIn('User_ID', $online_ids)->get();
        if($users)
            return UserResource::collection($users);
        else return response()->json(['message'=>'No online user']);
    }

    public function add(Request $request){
        $request->validate([
            'email' => 'required|unique:users,email',
            'password' => ['required'],
        ]);

        $user = new User;
        $user->Email = $request->email;
        $user->Password = Hash::make($request->password);
        $user->save();

        return response()->json(['message'=>'Create Success']);
    }

    public function show($id){
        $user = User::find($id);
        return new UserResource($user);
    }


    public function update(){
        
    }

    public function destroy($id){
        $user = User::find($id);
        if($user) {
        $user->delete($user);
        return response()->json(['message'=>'Delete Success']);
        }
        else return response()->json(['message'=>'Not found'], 404);
    }
}
