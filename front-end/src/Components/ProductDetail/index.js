import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getListProductPage } from "../../services/productServices";
import "./styles.css"
function ProductDetail(){
    const {slug} = useParams();
    const location= useLocation();
    const page = location.state.page;
    const [productDetail,setProductDetail]= useState([]);
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

                }
            }
        }
        fetchProductDetail();
      
    },[slug]);
    console.log(productDetail); 
    return(
        <>
        <div className="container">
           <div className="detail">
            <div className="detail__image">
                <img src={productDetail.imgPath} alt = {productDetail.name} ></img>
            </div>
            <div className="detail__content">
                <div className="detail__title">{productDetail.name}</div>
                <div className="detail__price">{productDetail.price} đ</div>
                <div className="detail__cart">
                    <div className="detail__quantity">
                        <button className="detail__button--down">-</button>
                        <span>1</span>
                        <button className="detail__button--up">+</button>
                        
                    </div>
                    <div className="detail__addCart">Thêm vào giỏ hàng</div>
                </div>
            </div>

           </div>
        </div>
        </>
    )
}
export default ProductDetail;