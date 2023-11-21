import { useState } from "react";
import Modal from 'react-modal';
import {  editUser } from "../../../services/adminService";
function EditUser(props)
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
        let password = e.target.elements.password.value;
        if(password === item.password )
        {
            password = null;
        }
        let name = e.target.elements.name.value;
        if( e.target.elements.name.value === "" )
        {
            name = 'None';
        }
        let phone = e.target.elements.phone.value;
        if( e.target.elements.phone.value === "")
        {
            phone = 'None';
        }
        let address = e.target.elements.address.value;
        if( e.target.elements.address.value === "")
        {
            address = "None";
        }
        let user={
            password:password,
            name : name,
            address:address,
            phone :phone
           
        }   
        if(e.target.elements.email.value !== item.email)
        {
            user.email = e.target.elements.email.value;
        }

        console.log(user);
        //console.log(item.userId);
         try {
            const result = await editUser(user,item.userId);
             console.log(result);
            if(result.message)
            {
                closeModal();
                reload();
            }
        } catch (error) {
            alert("Chỉnh sửa người dùng thất bại");
            console.log(error);
            closeModal();
        }      
    }
    return(
        <>
        <button onClick={handleShowModal} className="user__edit">Edit</button>
        <Modal
        isOpen={showModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}   >
            <table>
                <tbody >
                <tr>
                    <td>Tên người dùng:</td>
                    <td>
                        <input name="name" type="text" defaultValue={item.name}></input>
                    </td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>
                    <input name="email" type="email" defaultValue={item.email}></input>
                    </td>
                </tr>
                <tr>
                    <td>Mật khẩu:</td>
                    <td>
                        <input name="password" type="password" defaultValue={item.password} required></input>
                    </td>
                </tr>
                <tr>
                    <td>Địa chỉ:</td>
                    <td>
                        <input name="address" type="text" defaultValue={item.address}></input>
                    </td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                    <td>
                        <input name="phone" type="text" defaultValue={item.phone}></input>
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
export default EditUser;
