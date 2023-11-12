import { useEffect, useState } from "react";
import { getListProduct } from "../../services/productServices";
import Item from "./Item";
import banner from "../../Components/images/Banner-Web7.png";
import "./styles.css"
import { Link } from "react-router-dom";
function ListProduct()
{
    const [product,setProduct] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getListProduct();
            setProduct(data.data);
        }
        fetchApi();

    },[]);  

    return(
        <>
         <div className="header__view">
        <div className="container">
          <div className="header__wrap">
            <div className="header__list"></div>
            <div className="header__image">
              <img src={banner} alt="image" />
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <h2>Danh mục sản phẩm</h2>
            <div className="product__list">
                {
                    product.map(item =>(
                      <Link to = {`/product/${item.slug}`} className="product__link" key={item.id}>
                        <Item key = {item.id} item = {item}></Item>
                      </Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default ListProduct;