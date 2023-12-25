import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { createNewProduct } from "../../../services/adminService";
import { getListCategory } from "../../../services/categoryServices";
function NewProduct(props)
{
    const {reload}=props;
    const [showModal,setShowModal]=useState(false);
    const [category,setCategory]=useState([]);

    const fetchApi= async ()=>
    {
        const result=await getListCategory();
        if(result)
        {
            setCategory(result.data);
        }
    }
    const handleShowModal =()=>
    {
        setShowModal(true);
    }
    const closeModal=()=>
    {
        setShowModal(false);
    }
    useEffect(()=>
    {
       
        fetchApi();

    },[]);
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
      //  console.log(product);
         // fetch : là phương thức GET: chỉ lấy ra để đọc nên phải thêm tham số method
         try {
            const result = await createNewProduct(product);
            console.log(result);
            if(result)
            {
                alert("Tạo sản phẩm mới thành công");
                closeModal();
                reload();
            }
        } catch (error) {
            alert("Tạo sản phẩm mới thất bại");
            console.log(error);
            closeModal();
        }
      

    }
    return(
        <>
        <button onClick={handleShowModal} className="user__add">Thêm mới sản phẩm</button>
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
                        <input name="name" type="text" required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Slug:
                    </td>
                    <td>
                    <input name="slug" type="text" required></input>
                    </td>
                </tr>
                <tr>
                    <td>Danh mục: </td>
                    <td>
                    <select name="categoryId"> 
                        {
                            category.map((item,index) =>(
                                <option value={item.id} key={index}>{item.name}</option>
                            ))
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td>
                        <input name="price" type="text" required></input>
                    </td>
                </tr>
                <tr>
                    <td>Giảm giá:</td>
                    <td>
                        <input name="discount" type="number" min={0} max={100} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Số lượng</td>
                    <td>
                        <input name="quantity" type="number" min={0} max={1000} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Đường dẫn ảnh:</td>
                    <td>
                        <input name="imgPath" type="text" required></input>
                    </td>
                </tr>
                <tr>
                    <td>Mô tả sản phẩm</td>
                    <td>
                       <textarea name="contents" rows={3} cols={30} required></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className="button__close" onClick={closeModal}>Close</button>
                    </td>
                    <td>
                     <button className="button__submit"  type='submit'>Create</button>

                    </td>
                </tr>
                </tbody>
            </table>
            
        </form>
        
      </Modal>
        </>
    )
}
export default NewProduct;