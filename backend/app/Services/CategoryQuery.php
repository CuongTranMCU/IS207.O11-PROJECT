<?php
namespace App\Services;

use Illuminate\Http\Request;

class CategoryQuery{
    protected $safeParms = [
        'slug'=>['eq'],
        'name'=>['eq'],
        'createdAt'=>['eq', 'lt', 'gt']
    ];
    protected $columnMap = [
        'slug'=>'Slug',
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