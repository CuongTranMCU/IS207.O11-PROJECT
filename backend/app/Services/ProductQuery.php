<?php
namespace App\Services;

use Illuminate\Http\Request;

class ProductQuery{
    protected $safeParms = [
        'price'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'name'=>['eq'],
        'quantity'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'sold'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'view'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'discount'=>['eq', 'lt', 'gt', 'lte', 'gte'],
        'categoryId'=>['eq'],
        'createdAt'=>['eq', 'lt', 'gt'],
        'slug'=>['eq'],
        'content'=>['eq'],
    ];
    protected $columnMap = [
        'price'=>'Price',
        'quantity'=>'Quantity',
        'sold'=>'Sold',
        'view'=>'View',
        'discount'=>'Discount',
        'categoryId'=>'Category_ID',
        'name'=>'Name',
        'createdAt'=>'Created_at',
        'slug'=>'Slug',
        'content'=>'Content',
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
          // Handle sorting separately
        /*  $orderBy = $request->query('orderBy');
          if (in_array($orderBy, ['asc', 'desc'])) {
              $result['orderBy'] = $orderBy;
          }*/
  
          return $result;
      }
 }
