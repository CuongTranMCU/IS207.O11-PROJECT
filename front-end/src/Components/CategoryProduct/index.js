import { useEffect, useState } from "react";
import Item from "../ListProduct/Item"
import "../ListProduct/styles.css"
import { Link, useParams } from "react-router-dom";
import { getListCategoryProduct } from "../../services/productServices";
import { getListCategory } from "../../services/categoryServices";
function CategoryProduct(){
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
   const {slug} = useParams();
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
                }
            }
        const data = await getListCategoryProduct(categoryId);
      
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
    return(
        <>
      
        <div className="container">
            <h2>Danh sách sản phẩm</h2>
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
export default CategoryProduct;