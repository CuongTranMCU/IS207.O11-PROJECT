<?php
namespace App\Services;

use Illuminate\Http\Request;

class CartQuery{
    protected $safeParms = [
        'productId'=>['eq'],
        'productName'=>['eq'],
        'productPrice'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'quantity'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'status'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'createdAt'=>['eq', 'lt', 'gt', 'lte', 'gte']
    ];
    protected $columnMap = [
        'productId'=>'Product_ID',
        'productName'=>'Product_name',
        'productPrice'=>'Product_price',
        'quantity'=>'Quantity',
        'createdAt'=>'Created_at'
    ];
    protected $operatorMap = [
        'eq'=>'=',
        'lt'=>'<',
        'gt'=>'>',
        'lte'=>'<=',
        'gte'=>'>='
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