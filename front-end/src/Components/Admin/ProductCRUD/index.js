import { useEffect, useState } from "react";
import { getListCategory, getListNewProductPage } from "../../../services/productServices";
import "../UserCRUD/style.css"
import NewProduct from "./NewProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import { getListProduct } from "../../../services/adminService";
function ProductCRUD(){
    const [product,setProduct]= useState([]);
    const [category,setCategory]= useState([]);
    // const [total,setTotal] = useState(0);
    const [page,setPage]= useState(1);
    const fetchApi = async ()=>
    {
        const product = await getListNewProductPage(page);
        setProduct(product.data);  
        const category = await getListCategory();
        setCategory(category.data);
     }
    useEffect(()=>
    {
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
    const handleReload =()=>
    {
        fetchApi();
    }
    return(
        <>
        <div className="productTable">
        <h2 >Danh sách sản phẩm</h2>
        <NewProduct reload={handleReload}></NewProduct>
        <table>
            <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Giảm giá</th>
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
                    <td>{item.discount}%</td>
                    <td>{item.createdAt}</td>
                    <td>
                        <EditProduct item ={item} reload ={handleReload}></EditProduct>
                        <DeleteProduct item ={item} reload ={handleReload}></DeleteProduct>
                    </td>

                </tr>
                );
                })
        }
            </table>
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
export default ProductCRUD;