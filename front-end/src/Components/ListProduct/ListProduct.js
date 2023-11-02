import { useEffect, useState } from "react";
import { getListProduct } from "../../services/productServices";
import Item from "./Item";
import "./styles.css"
function ListProduct()
{
    const [product,setProduct] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getListProduct();
            setProduct(data);
        }
        fetchApi();

    },[]);

    return(
        <>
        <div className="container">
            <h2>Danh mục sản phẩm</h2>
            <div className="product__list">
                {
                    product.map(item =>(
                        <Item key = {item.id} item = {item}></Item>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default ListProduct;