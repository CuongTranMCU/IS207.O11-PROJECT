import { useState } from "react";
import Modal from 'react-modal';
import { editOrder } from "../../../services/adminService";
import { updateStatusTransaction } from "../../../services/paymentService";
import '../UserCRUD/style.css';
function EditOrder(props)
{
    const {item,reload,status}=props;
    const [showModal,setShowModal]=useState(false);
    const handleShowModal =()=>
    {
        setShowModal(true);
    }
   
    const closeModal=()=>
    {
        setShowModal(false);
    }
   
 
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
        
        let order={
            productName: e.target.elements.productName.value,
            productPrice:  e.target.elements.productPrice.value,
            quantity:  e.target.elements.quantity.value
        }
        let trans = 
        {
            status: e.target.elements.status.value
        }
        console.log(trans);
       console.log(order);
         try {
            const result = await editOrder(order,item.id);
            const updatetrans = await updateStatusTransaction(trans,item.transactionId);
            console.log(updatetrans);
             console.log(result);
            if(result.message === "Success" && updatetrans.message === "Success") 
            {
                alert("Cập nhật đơn hàng thành công");
                closeModal();
                reload();
            }
        } catch (error) {
            alert("Chỉnh sửa sản phẩm thất thất bại");
            closeModal();
        }      
    }
    return(
        <>
        <button onClick={handleShowModal} className="btn btn-primary product__edit">Edit</button>
        <Modal
        isOpen={showModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}   >
        <table>
                <tbody >
                <tr>
                    <td>Tên đơn hàng:</td>
                    <td>
                        <input name="productName" type="text" defaultValue={item.productName} required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Số lượng:
                    </td>
                    <td>
                    <input name="quantity" type="text" defaultValue={item.quantity} required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Giá:
                    </td>
                    <td>
                        <input name="productPrice" type="text" defaultValue={item.productPrice} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Trạng thái: </td>
                    <td>
                    <select name="status" defaultValue={status}> 
                         <option value='1'>Đang giao hàng</option>
                         <option value='2'>Đã nhận được hàng</option>
                         <option value='3'>Hủy đơn hàng</option>
                        </select>
                    </td>
                </tr>
               
                <tr className="td-btn">
                    <td>
                    <button className="btn btn-danger button__close" onClick={closeModal}>Close</button>
                    </td>
                    <td>
                     <button className="btn btn-success button__submit"  type='submit'>Update</button>

                    </td>
                </tr>
                </tbody>
            </table>
            
            
        </form>
        
      </Modal>
        </>
    )
}
export default EditOrder;
