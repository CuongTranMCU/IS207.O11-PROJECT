import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getListProductPage } from "../../services/productServices";
import "./styles.css"
import { getCookie } from "../../helpers/cookie";
import { createNewCart } from "../../services/cartService";
function ProductDetail(){
    const {slug} = useParams();
    const location= useLocation();
    const page = location.state.page;
    const [productDetail,setProductDetail]= useState([]);
    const[quantity,setQuantity] = useState(1);
    useEffect( ()=>
    {
        const fetchProductDetail = async()=>
        {
            const data= await getListProductPage(page);  
            for (let i=0;i<data.data.length;i++)
            {
                if(slug === data.data[i].slug)
                {
                    setProductDetail(data.data[i]);
                    break;
                }
            }
        }
        fetchProductDetail();
      
    },[slug]);
    console.log(productDetail); 
    const handleDown = ()=>
    {
        if(quantity >1)
        {
            setQuantity(quantity-1);
        }
    }
    const handleUp =()=>
    {
        setQuantity(quantity + 1);
    }
    
    var newPrice = productDetail.price * (100 - productDetail.discount)/100;
    var showPrice = (productDetail.discount > 0) ? "showPrice" : "";
    const handleAdd = async ()=>
    {
        const cart =
        {
            productId: productDetail.id,
            productName : productDetail.name,
            productPrice : newPrice,
            quantity : quantity,
            userId : parseInt(getCookie("userId")),
            status : 0

        }
        console.log(cart);
        const data=  await createNewCart(cart);
        console.log(data);

    }
    return(
        <>
        <div className="container">
           <div className="detail">
            <div className="detail__image">
                <img src={productDetail.imgPath} alt = {productDetail.name} ></img>
                <div className={`detail__discount ${showPrice}`}>{productDetail.discount}%</div>
            </div>
            <div className="detail__content">
                <div className="detail__title">{productDetail.name}</div>

                {/* // Check if 'price' exists before accessing it */}
                {productDetail.price && (<div className={`detail__old-price ${showPrice}`}>{productDetail.price.toLocaleString()} đ</div>)}
                {/* // Check if 'price' exists before accessing it */}
                {newPrice && (<div className="detail__new-price">{newPrice.toLocaleString()} đ</div>)}
                
                

                <div className="detail__description">{productDetail.content}</div>
                <div className="detail__cart">
                    
                    <div className="detail__quantity">
                        <button className="detail__button--down" onClick={handleDown}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="detail__button--up" onClick={handleUp}>+</button>
                        
                    </div>
                    
                    <div className="detail__addCart" onClick={handleAdd}>Thêm vào giỏ hàng</div>
                </div>
            </div>

           </div>
        </div>
        </>
    )
}
export default ProductDetail;