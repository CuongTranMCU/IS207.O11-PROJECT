<?php
namespace App\Services;

use Illuminate\Http\Request;

class TransactionQuery{
    protected $safeParms = [
        'status'=>['eq'],
        'address'=>['eq'],
        'phone'=>['eq'],
        'name'=>['eq'],
        'createdAt'=>['eq', 'lt', 'gt'],
        'updated_at'=>['eq', 'lt', 'lte', 'gte', 'gt'],
        'totalMoney'=>['eq', 'lt', 'lte', 'gte', 'gt'],
        'paymentMethod'=>['eq'],
        'note'=>['eq']
    ];
    protected $columnMap = [
        'status'=>'Status',
        'address'=>'Address',
        'phone'=>'Phone',
        'name'=>'Name',
        'createdAt'=>'Created_at',
        'totalMoney'=>'Total_money',
        'paymentMethod'=>'Payment_method',
        'note'=>'Note',
    ];
    protected $operatorMap = [
        'eq'=>'=',
        'lt'=>'<',
        'gt'=>'>',
        'lte'=>'<=',
        'gte'=>'>=',
    ];
    public function transform(Request $request){
        $result = [];
        foreach($this->safeParms as $parm=>$operators){
            $query = $request->query($parm);
            if(!isset($query)) continue;
            $column = $this->columnMap[$parm] ?? $parm;
            foreach($operators as $operator){
                if(isset($query[$operator]))
                    $result[] = [$column, $this->operatorMap[$operator], $query[$operator]];
            }
        }
        return $result;
    }
}