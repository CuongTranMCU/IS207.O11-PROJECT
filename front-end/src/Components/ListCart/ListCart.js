import { useSelector } from "react-redux";
import "./styles.css"
function ListCart()
{
    const cart = useSelector(state =>state.cartReducer);
    const total = cart.reduce((total,it ) =>
    {
        const discount=parseInt(it.item.discountPercentage).toFixed(0);
        const newPrice = (it.item.price*(100-discount)/100).toFixed(0);
        return total + newPrice*it.quantity;
    },0)
    return(
        <>
        <div className="container">
            <h2>Cart</h2>
            {
                cart.length >0 ?
                ( 
                    <>
                <div className="cart">
                    <div className="cart__list">
                        {
                            cart.map(it=>
                            {
                                const discount=parseInt(it.item.discountPercentage).toFixed(0);
                                 const newPrice = (it.item.price*(100-discount)/100).toFixed(0);
                                 return (
                                    <div className="cart__item" key={it.id}>
                                       <div className="cart__image">
                                           <img src={it.item.thumbnail} alt={it.item.title}></img>
                                       </div>
                                       <div className="cart__content">
                                           <div className="cart__title">{it.item.title}</div>
                                           <div className="cart__new-price">{newPrice}$</div>
                                           <div className="cart__old-price">{it.item.price}$</div>
                                       </div>
                                       <div className="cart__adjust">
                                           <div className="cart__updown">
                                               <button>-</button>
                                               <span>{it.quantity}</span>
                                               <button>+</button>
                                           </div>
                                           <button >Delete</button>
                                       </div>
                                   </div>
                               );

                            })

                        }
                        <div className="cart__total">Total: {total}</div>
                    </div>
                </div>
                </>):
                (
                    <div>Hiện không có sản phẩm nào trong giỏ hàng</div>
                )
            }
           
        </div>

        </>
    )
}
export default ListCart;