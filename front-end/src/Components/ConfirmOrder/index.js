import { useLocation } from "react-router-dom";
import { queryStringToObject } from "../QueryURL";
import { useEffect, useMemo, useState } from "react";
import { getSelectedItems, getTransaction } from "../../services/paymentService";
import { getCookie } from "../../helpers/cookie";

function ConfirmOrder(){

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const transactionId = params.get('transactionId');
    const [selectedItems,setSelectedItems] = useState([]);
    const [transaction,setTransaction]= useState([]);
    useEffect(()=>
    {
        
        const fetchApi = async ()=>
        {
            // console.log(transactionId);
            const transaction = await getTransaction(transactionId);
            console.log(transaction.data);
            setTransaction(transaction.data);
            const userId = getCookie("userId");
            const data = await getSelectedItems(userId,1);
            setSelectedItems(data.data);
            console.log(data);
        }
        fetchApi();
        // console.log(transaction);
    },[])
    return(
        <>
        <div className="container">
        <h2> XÁC NHẬN ĐƠN HÀNG</h2>

        <div>Tên người nhận:</div>
        <div>Địa chỉ: {transaction && transaction.length > 0 ? transaction[0].address : 'N/A'}</div>
        <div>Số điện thoại:     {transaction && transaction.length > 0 ? transaction[0].phone : 'N/A'}</div>

        </div>
     
        
        </>
    )
}
export default ConfirmOrder;
