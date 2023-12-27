import { useEffect, useState } from "react";
import Item from "../ListProduct/Item"
import "../ListProduct/styles.css"
import "../ListProduct/styles.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import { getListCategoryProduct } from "../../services/productServices";
import { getListCategory } from "../../services/categoryServices";
function CategoryProduct(){
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
   const {slug} = useParams();
   const navigate = useNavigate();

   var categoryId;
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {             
            const listCategory = await getListCategory();
              console.log(listCategory);
            for (let i = 0 ; i< listCategory.data.length;i++)
            {
                 if(slug === listCategory.data[i].slug)
                {
                    categoryId = listCategory.data[i].id;
                    console.log(categoryId);
                }
            }
        const data = await getListCategoryProduct(categoryId);
      console.log(data.data);
        setProduct(data.data);
        }
        fetchApi();
    },[slug]);
    const handleDown =()=>
    {
      if(page>=2)
       setPage(page -1);

    }
    const handleUp =()=>
    {
      if(page <=0)
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
                      <Link to = {`/product/${item.slug}`} state = {{page}} className="product__link" key={item.id}>
                        <Item key = {item.id} item = {item}></Item>
                      </Link>
                    ))
                }
            </div>
            <div className="product__page">
              <button className="product__page__divider" onClick={handleDown}>-
              </button>
              <span>{page}</span>
              <button className="product__page__divider" onClick={handleUp}>+
              </button>

            </div>
        </div>
        </>
    )

}
export default CategoryProduct;