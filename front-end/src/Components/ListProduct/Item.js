// import { useDispatch } from "react-redux";
// import { addtoCart } from "../../actions/cart";

function Item(props)
{
    const {item} = props; // 
    // const discount = parseInt(item.discount).toFixed();
    // const newPrice = (parseInt(item.price)*(100 - discount)/100).toFixed();    
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
                    </div>
                </div>
        </>
    )

}
export default Item;