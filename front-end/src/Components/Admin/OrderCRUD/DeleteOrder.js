import Swal from 'sweetalert2';
import { deleteOrder} from '../../../services/adminService';
function DeleteOrder(props)
{
    const {item,reload}=props;
    const handleDelete= async ()=>
    {
        console.log(item.id);
    const result = await deleteOrder(item.id);
    console.log(result);
    if(result)
    {
        Swal.fire(
            'Deleted!',
            'Đơn hàng đã được xóa',
            'success'
          )
        reload();
    }
    }
    const handleConfirm=()=>
    {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa',
            text:  `Đơn hàng người dùng chuẩn bị xóa là: ${item.productName}`,
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
        <button onClick={handleConfirm} className= "product__delete">Delete</button>

        </>
    )
}
export default DeleteOrder;