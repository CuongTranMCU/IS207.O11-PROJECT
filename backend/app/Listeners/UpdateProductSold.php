<?php


namespace App\Listeners;

use App\Events\TransactionStatusUpdated;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\Product;

class UpdateProductSold implements ShouldQueue
{
    public function handle(TransactionStatusUpdated $event)
    {
        $transaction = $event->transaction;

        if ($transaction->Status == 9) {
            // Lặp qua tất cả các đơn đặt hàng của giao dịch
            foreach ($transaction->orders as $order) {
                // Cập nhật cột Sold trong bảng products
                $productId = $order->Product_ID;
                $product = Product::where('Product_ID', $productId)->first();

                if ($product) {
                    $product->Sold += $order->Quantity;
                    $product->save();
                }
            }
        }
    }
}