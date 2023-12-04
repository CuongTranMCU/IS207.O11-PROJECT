import { useEffect, useState } from "react";
import Item from "./Item";
import "./styles.css"
import { Link, useNavigate } from "react-router-dom";
import { getListProductPage } from "../../services/productServices";
function ListProduct()
{
  const navigate = useNavigate();
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const data = await getListProductPage(page);
            setProduct(data.data);
            console.log(data.data);
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
    const handleChange =(e)=>
    {
      console.log(e.target.value);
      navigate(`/products/filter?q=${e.target.value}`)
      
    }
    return(
        <>
      
        <div className="container">
            <h2>Danh sách sản phẩm</h2>
            <div className="product__filter">
              <select value=""  onChange={handleChange}>
                <option value="">Chọn sản phẩm</option>
                  <option value="discount-desc">Giảm giá nhiều</option>
                <option value="createdAt-desc">Mới nhất</option>
                <option value="price">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao xuống thấp</option>
                <option value="price[lte]=500000">Giá: Dưới 500.000đ</option>
                <option value="price[gte]=500000&price[lte]">Giá: Từ 500.000đ - 1.000.000đ</option>
                <option value="price[gt]=1000000">Giá: Trên 1000.000đ</option>
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
export default ListProduct;