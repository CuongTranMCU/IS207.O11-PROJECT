import { useEffect, useState } from "react";
import Item from "./Item";
import Product from "./Post";
import "./styles.css"
import { Link } from "react-router-dom";
import { getListProductPage } from "../../services/productServices";
function ListProduct()
{
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getListProductPage(page);
            setProduct(data.data);
        }
        fetchApi();
    },[page]);
    const handleDown =()=>
    {
      if(page>=2)
       setPage(page -1);

    }
    const handleUp =()=>
    {
      if(page <=4)
      setPage(page+1);
    }
    return(
        <>
      
        <div className="container">
            <h2>Danh sách sản phẩm</h2>
            <div className="product__list">
                {
                    product.map(item =>(
                      <Link to = {`/product/${item.slug}`} state = {{page}}  className="product__link" key={item .id}>
                        <Product
                        key={item .id}
                        Post={item }
                    />
                      </Link>
                    ))
                }
            </div>
            <div className="product__page">
              <button onClick={handleDown}>-
              </button>
              <span>{page}</span>
              <button onClick={handleUp}>+
              </button>

            </div>
        </div>
        </>
    )
}
export default ListProduct;