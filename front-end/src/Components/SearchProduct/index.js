import { useEffect, useState } from "react";
import Item from "../ListProduct/Item";
import "../ListProduct/styles.css"
import { Link, useLocation, useParams } from "react-router-dom";
import { getSearchProduct } from "../../services/productServices";
import { queryStringToObject } from "../QueryURL";
import { useMemo } from "react";
function SearchProduct()
{
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);
    const { search } = useLocation();
    // console.log(search);
    // const [q,setq]= useState("");
    const queryParams = useMemo(() => queryStringToObject(search, { q: ""}), [search]);
    // setq(queryParams.q);

    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getSearchProduct(queryParams.q,page);
            console.log(data.data);
            setProduct(data.data);
            console.log(data.meta.total);
            setTotal(data.meta.total/20);
            // console.log(total);
        }
        fetchApi();
    },[page,queryParams.q]);
    const handleDown =()=>
    {
      if(page>=2)
       setPage(page -1);

    }
    const handleUp =()=>
    {
      if(page < total)
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
                        <Item
                        key={item .id}
                        item={item }
                    />
                      </Link>
                    ))
                }
            </div>
            
            <div className="product__page">
              <button className="product__page__divider" onClick={handleDown}>-</button>
              <span>{page}</span>
              <button className="product__page__divider" onClick={handleUp}>+</button>

            </div>
        </div>
        </>
    )
}
export default SearchProduct;