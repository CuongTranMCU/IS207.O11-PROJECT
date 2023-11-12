<?php
namespace App\Services;

use Illuminate\Http\Request;

class UserQuery{
    protected $safeParms = [
        'email'=>['eq'],
        'address'=>['eq'],
        'phone'=>['eq'],
        'name'=>['eq'],
        'createdAt'=>['eq', 'lt', 'gt']
    ];
    protected $columnMap = [
        'email'=>'Email',
        'address'=>'Address',
        'phone'=>'Phone',
        'name'=>'Name',
        'createdAt'=>'Created_at'
    ];
    protected $operatorMap = [
        'eq'=>'=',
        'lt'=>'<',
        'gt'=>'>'
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