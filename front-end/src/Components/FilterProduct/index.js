import { useEffect, useState } from "react";
import Item from "../ListProduct/Item";
import "../ListProduct/styles.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { queryStringToObject } from "../QueryURL";
import { useMemo } from "react";
import { getFilterProduct } from "../../services/productServices";
function FilterProduct()
{
  const navigate = useNavigate();
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);
    const { search } = useLocation();
    // const [selected,setSelected]= useState("");
    // console.log(search);

    const queryParams = useMemo(() => queryStringToObject(search, { q: ""}), [search]);
    console.log(queryParams.q);
    const handleChange =(e)=>
    {
      // setSelected(e.target.value);
      setPage(1);
      navigate(`/products/filter?q=${e.target.value}`);
    
    }
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
          if(queryParams.q === "price[lte]500000" )
          {
            const filter = "price[lte]=500000";
            const data = await getFilterProduct("",filter,page);
            // console.log(data.data);
            setProduct(data.data);
            setTotal(data.meta.total/20);
          }
          else if(queryParams.q === "price500000-1000000")
          {
            const filter = "price[gte]=500000&price[lte]=1000000";
            const data = await getFilterProduct("",filter,page);
            // console.log(data.data);
            setProduct(data.data);
            setTotal(data.meta.total/20);
          }
          else if(queryParams.q === "price[gt]1000000")
          {
            const filter = "price[gt]=1000000";
            const data = await getFilterProduct("",filter,page);
            // console.log(data.data);
            setProduct(data.data);
            setTotal(data.meta.total/20);
          }
          else
          {
            const data = await getFilterProduct(queryParams.q,"price=''",page);
            // console.log(data.data);
            setProduct(data.data);
            setTotal(data.meta.total/20);

          }
       
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
      if(page <= total)
      setPage(page+1);
    }
    return(
        <>
      
        <div className="container">
            <h2>Danh sách sản phẩm</h2>
            <div className="product__filter">
              <select   onChange={handleChange}>
                <option value ="">Chọn sản phẩm</option>
                <option value="createdAt-desc">Mới nhất</option>
                <option value="discount-desc">Giảm giá nhiều</option>
                <option value="price">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao xuống thấp</option>
                <option value="price[lte]500000">Giá: Dưới 500.000đ</option>
                <option value="price500000-1000000">Giá: Từ 500.000đ - 1.000.000đ</option>
                <option value="price[gt]1000000">Giá: Trên 1.000.000đ</option>
              </select>

            </div>
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
export default FilterProduct;