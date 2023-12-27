import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { editProduct } from "../../../services/adminService";
import { getListCategory } from "../../../services/categoryServices";
function EditProduct(props)
{
    const {item,reload}=props;
    const [showModal,setShowModal]=useState(false);
    const handleShowModal =()=>
    {
        setShowModal(true);
    }
   
    const closeModal=()=>
    {
        setShowModal(false);
    }
    const [category,setCategory]=useState([]);

    const fetchApi= async ()=>
    {
        const result=await getListCategory();
        if(result)
        {
            setCategory(result.data);
        }
    }
    useEffect(()=>
    {
        fetchApi();
    })
    // const Category = category.find((cat)=> cat.id === item.categoryId);
    // const categoryName = Category.name;
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width:'30%',
        },
      };
    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        
        let product={
            name: e.target.elements.name.value,
            slug :e.target.elements.slug.value,
            price:  e.target.elements.price.value,
            categoryId:e.target.elements.categoryId.value,
            discount:e.target.elements.discount.value,
            imgPath: e.target.elements.imgPath.value,
            contents:  e.target.elements.contents.value,
            quantity:  e.target.elements.quantity.value 
           
        }   
       console.log(product);
         try {
            const result = await editProduct(product,item.id);
             console.log(result);
            if(result.message === "Success")
            {
                alert("Cập nhật sản phẩm thành công");
                closeModal();
                reload();
            }
        } catch (error) {
            alert("Cập nhật sản phẩm thất thất bại");
            closeModal();
        }      
    }
    return(
        <>
        <button onClick={handleShowModal} className="product__edit">Edit</button>
        <Modal
        isOpen={showModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}   >
        <table>
                <tbody >
                <tr>
                    <td>Tên sản phẩm:</td>
                    <td>
                        <input name="name" type="text" defaultValue={item.name} required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Slug:
                    </td>
                    <td>
                    <input name="slug" type="text" defaultValue={item.slug} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Danh mục: </td>
                    <td>
                 
                    <select name="categoryId" defaultValue={item.categoryId}> 
                        {
                            category.map((item,index) =>(
                                <option value={item.id} key={index}>{item.name}</option>
                            ))
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Giá:</td>
                    <td>
                        <input name="price" type="text" defaultValue={item.price} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Giảm giá:</td>
                    <td>
                        <input name="discount" type="number" min={0} max={100} defaultValue={item.discount} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Số lượng:</td>
                    <td>
                        <input name="quantity" type="number" min={0} max={1000} defaultValue={item.quantity} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Đường dẫn ảnh:</td>
                    <td>
                        <input name="imgPath" type="text" defaultValue={item.imgPath} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Mô tả sản phẩm</td>
                    <td>
                       <textarea name="contents" rows={3} cols={30} defaultValue={item.content}></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className="button__close" onClick={closeModal}>Close</button>
                    </td>
                    <td>
                     <button className="button__submit"  type='submit'>Update</button>

                    </td>
                </tr>
                </tbody>
            </table>
            
            
        </form>
        
      </Modal>
        </>
    )
}
export default EditProduct;
