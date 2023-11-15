import { useEffect, useState } from "react";
import { getListProduct } from "../../../services/adminService";

function ProductCRUD(){
    const [product,setProduct]= useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const product = await getListProduct();
            setProduct(product.data);  
         }
        fetchApi();
    },[]);
    return(
        <>
        {
           product.map(item=>
            (
                <div className="user" key= {item.id}>{item.name}</div>
                
            ))
        }

        </>
    )
}
export default ProductCRUD;