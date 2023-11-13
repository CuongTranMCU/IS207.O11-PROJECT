import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css"

import { Link, useNavigate } from "react-router-dom";
import { getListProductPage } from "../../services/productServices";
import Item from "../ListProduct/Item";
function ListProductPage()
{
    const {Page} = useParams;const [product,setProduct] = useState([]);
    const [page,setPage] = useState(Page);
    const navigate = useNavigate();
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getListProductPage(page);
            setProduct(data.data);
        }
        fetchApi();
        // navigate(`/page/${page}`);
    },[page]);  
    const handleDown =()=>
    {
      if(page>=2)
       setPage(page -1);
    navigate(`/page/${page}`);

    }
    const handleUp =()=>
    {
      if(page <=4)
      setPage(page+1);
    }
    return(
        <>
      
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
export default ListProductPage;