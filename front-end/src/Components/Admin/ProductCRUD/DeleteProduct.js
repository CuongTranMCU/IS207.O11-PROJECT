import Swal from 'sweetalert2';
import { deleteProduct} from '../../../services/adminService';
import "./style.css";
function DeleteProduct(props)
{
    const {item,reload}=props;
    const handleDelete= async ()=>
    {
      // fetch : là phương thức GET: chỉ lấy ra để đọc nên phải thêm tham số method
    const result = await deleteProduct(item.id);
    console.log(result);
    if(result)
    {
        Swal.fire(
            'Deleted!',
            'Sản phẩm đã được xóa',
            'success'
          )
        reload();
    }
    }
    const handleConfirm=()=>
    {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa',
            text:  `Sản phẩm người dùng chuẩn bị xóa là: ${item.name}`,
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
          <button onClick={handleConfirm} className= "btn btn-danger product__delete">Delete</button>

        </>
    )
}
export default DeleteProduct;