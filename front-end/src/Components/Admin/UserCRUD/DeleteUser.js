import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';
import { deleteUser } from '../../../services/adminService';
function DeleteUser(props)
{
    const {item,reload}=props;
    const handleDelete= async ()=>
    {
      // fetch : là phương thức GET: chỉ lấy ra để đọc nên phải thêm tham số method
    const result = await deleteUser(item.userId);
    if(result)
    {
        Swal.fire(
            'Deleted!',
            'Người dùng đã được xóa',
            'success'
          )
        reload();
    }
    }
    const handleConfirm=()=>
    {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa',
            text:  `ID người dùng chuẩn bị xóa là: ${item.email}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vẫn xóa!'
          }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
            }
          })
    }
    return(
        <>
        <button onClick={handleConfirm} className= "user__delete">Delete</button>

        </>
    )
}
export default DeleteUser;