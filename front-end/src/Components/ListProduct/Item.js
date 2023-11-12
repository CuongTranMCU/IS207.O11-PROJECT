// import { useDispatch } from "react-redux";
// import { addtoCart } from "../../actions/cart";

function Item(props)
{
    const {item} = props; // 
    // const discount = parseInt(item.discountPercentage).toFixed();
    // const newPrice = (parseInt(item.price)*(100 - discount)/100).toFixed();
    // const dispatch = useDispatch();
    // const handleAdd =()=>
    // {
    //     dispatch(addtoCart(item.id,item));

    // }
    return(
        <>
         <div className="product__item" key={item.id}>
                    <div className="product__image">
                        <img src={item.imgPath} alt={item.name}></img>
                    </div>
                    <div className="product__content">
                        <div className="product__title">{item.name}</div>
                        <div className="product__new-price">{item.price}đ</div>
                        {/* <div className="product__old-price">{item.price}$</div> */}
                        {/* <div className="product__discount">{discount}%</div> */}
                        {/* <button onClick={handleAdd} >Thêm vào giỏ hàng</button> */}
                    </div>
                </div>
        </>
    )

}
export default Item;