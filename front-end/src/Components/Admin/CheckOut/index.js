import "./styles.css"
const handleClick = ()=>
{
    window.location.href = "my-order";
}
function Checkout()
{
    return(
        <>
        <div className="container">
            <div className="checkout">
                <h2>ĐẶT MUA ĐƠN HÀNG THÀNH CÔNG</h2>
                <button onClick={handleClick} className="btn btn-primary button__order">Xem đơn hàng của tôi</button>
            </div>
      
        </div>
        </>
    )
}
export default Checkout;