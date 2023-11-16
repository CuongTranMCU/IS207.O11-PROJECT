import { getProductName } from "../../../services/productServices";
import { useEffect, useState } from "react";
import HomePost from "./Props/HomePost";
function OfficePlant()
{
    const [product,setProduct] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const response = await getProductName ("Cây");
            const products = response.data.slice(0, 6);
            setProduct(products.data);
        }
        fetchApi();
    });
    {product.map(post =>(
        <HomePost
            key={post.id}
            Post={post}
        />
        ))}       
}
export default OfficePlant;