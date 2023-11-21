import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { createNewUser } from "../../../services/adminService";
function NewUser(props)
{
    const {reload}=props;
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
        let user={
            email: e.target.elements.email.value,
            password:e.target.elements.password.value,
        }   
        // console.log(user);
         // fetch : là phương thức GET: chỉ lấy ra để đọc nên phải thêm tham số method
         try {
            const result = await createNewUser(user);
             console.log(result);

            if(result.message === "Create Success")
            {
                closeModal();
                reload();
            }
        } catch (error) {
            alert("Đăng kí người dùng thất bại");
        }
        // console.log(result);
      

    }
    return(
        <>
        <button onClick={handleShowModal} className="user__add">Thêm người dùng mới</button>
        <Modal
        isOpen={showModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}   >
            <table>
                <tbody >
                {/* <tr>
                    <td>Tên người dùng:</td>
                    <td>
                        <input name="name" type="text"></input>
                    </td>
                </tr> */}
                <tr>
                    <td>Email:</td>
                    <td>
                    <input name="email" type="email" required></input>
                    </td>
                </tr>
                <tr>
                    <td>Mật khẩu:</td>
                    <td>
                        <input name="password" type="password" required></input>
                    </td>
                </tr>
                {/* <tr>
                    <td>Địa chỉ:</td>
                    <td>
                        <input name="address" type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>Số điện thoại</td>
                    <td>
                        <input name="phone" type="text"></input>
                    </td>
                </tr> */}
               
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
export default NewUser;