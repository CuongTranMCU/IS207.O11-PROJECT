import { useEffect, useState } from "react";
import { getListProduct } from "../../../services/adminService";
import { getListCategory, getListCategoryProduct, getListProductPage } from "../../../services/productServices";
import "../UserCRUD/style.css"
function ProductCRUD(){
    const [product,setProduct]= useState([]);
    const [category,setCategory]= useState([]);
    const [page,setPage]= useState(1);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const product = await getListProductPage(page);
            setProduct(product.data);  
            const category = await getListCategory();
            setCategory(category.data);
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
        <div className="productTable">
        <h2 >Danh sách sản phẩm</h2>
        <table>
            <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Ngày cập nhật</th>
            <th>Action</th>
            </tr>
        {
           product.map(item=>
            {
                const cate = category.find(cate => cate.id === item.categoryId);
                return(
                <tr className="product" key= {item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{cate?.name}</td>
                    <td>{item.price}</td>
                    <td>{item.createdAt}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>

                </tr>
                );
                })
        }
            </table>
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
export default ProductCRUD;