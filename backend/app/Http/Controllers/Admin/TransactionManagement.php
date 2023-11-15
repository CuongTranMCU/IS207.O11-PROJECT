<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\TransactionResource;
use App\Http\Resources\TransactionCollection;
use Illuminate\Support\Facades\Response;
use App\Services\TransactionQuery;

class TransactionManagement extends Controller
{
    public function index(Request $request){
        $filter = new TransactionQuery();
        $query = $filter->transform($request);
        $query = Transaction::where($query);
        $includeOrders = request()->query('includeOrders');
        if ($includeOrders) {
            $query->with('orders');
        }
        $transactions = $query->get();
        return new TransactionCollection($transactions);
    }

    public function show($id){
        $includeOrders = request()->query('includeOrders');
        $query = Transaction::query();
        $query = $query->find($id);
        $transactions = $query->get();
        if($transactions){
            if ($includeOrders) {
                return new TransactionCollection($transactions->loadMissing('orders'));
            }
            return new TransactionCollection($transactions);
        }
        return response()->json(['message'=>'Not found'], 404);
    }

    public function update($id){
        
    }

    public function TransactionInPTime(Request $request){
        $request->validate([
            'period'=>'required'
        ]);
         $pTime = $request->period;
         $sTime = Carbon::now()->subDays($pTime)->startOfDay();
         $cTime = Carbon::now()->endOfDay();
 
         $transactions = Transaction::whereBetween('created_at', [$sTime, $cTime])->get();
         $includeOrders = request()->query('includeOrders');
         if($includeOrders)
            return new TransactionCollection($transactions->loadMissing('orders'));
         return new TransactionCollection($transactions);
    }
}
