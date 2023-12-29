import "./styles.css"
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { deleteCart, getListCartByUserId, updateCart } from "../../services/cartService";
import { createTransaction } from "../../services/paymentService";
function ListCart() {
    const [cart, setCart] = useState([]);
    // const navigate = useNavigate();
    const fetchApi = async () => {
        const userId = parseInt(getCookie("userId"));
        const data = await getListCartByUserId(userId);
        setCart(data.data);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const total = cart.reduce((total, it) => {
        if (it.status === 1) {
            return total + it.productPrice * it.quantity;
        }
        return total;
    }, 0);

    const handleDown = async (id, quantity) => {

        if (quantity > 1) {
            const updatedQuantity = quantity - 1;
            const updatedCart =
                [
                    {
                        cartId: id,
                        quantity: updatedQuantity,
                    }
                ]
            const data = await updateCart(updatedCart);
            console.log(data);
            fetchApi();

        }
    }
    const handleUp = async (id, quantity) => {
        const updatedQuantity = quantity + 1;
        const updatedCart =
            [
                {
                    cartId: id,
                    quantity: updatedQuantity,
                }
            ]

        console.log(updatedCart);
        //
        const data = await updateCart(updatedCart);
        console.log(data);
        fetchApi();
    }
    const handleDel = async (id) => {
        await deleteCart(id);
        fetchApi();
    }
    const handleSelect = async (id) => {
        const updatedCart =
            [
                {
                    cartId: id,
                    status: 1
                }
            ]
        await updateCart(updatedCart);
        fetchApi();
    }
    const handleUndo = async (id) => {
        const updatedCart =
            [
                {
                    cartId: id,
                    status: 2
                }
            ]
        console.log(updatedCart);
        const data = await updateCart(updatedCart);
        console.log(data);
        fetchApi();
    }
    const handleSubmit = async (e, total) => {
        e.preventDefault();
        let method = e.target.elements.method.value;
        let name = e.target.elements.name.value;
        let phone = e.target.elements.phone.value;
        let address = e.target.elements.address.value;
        if (total === 0) {
            alert("Vui lòng chọn sản phẩm để thanh toán");
        }

        else {
            const transaction = {
                userId: getCookie("userId"),
                totalMoney: total,
                paymentMethod: parseInt(method),
                name: name,
                phone: phone,
                address: address,
                status: 0
            }
           // console.log(transaction);
            const data = await createTransaction(transaction);
            // console.log(data);
            // console.log(data.transactionId);
            window.location.href = `confirm-order?transactionId=${data.transactionId}`;

        }
    }
    return (
        <>
            <div className="container">
                <h2>Giỏ hàng</h2>
                {
                    cart.length > 0 ?
                        (
                            <>
                                <div className="cart">
                                    <div className="cart__list">
                                        {
                                            cart.map(it => {

                                                return (
                                                    <div className={it.status == 1 ? "cart__item--select" : "cart__item"} key={it.productId}>
                                                        <div className="cart__image">
                                                            <img src={it.imgPath} alt={it.productName}></img>
                                                        </div>
                                                        <div className="cart__content">
                                                            <div className="cart__title">{it.productName}</div>
                                                            <div className="cart__new-price">{it.productPrice.toLocaleString()}đ</div>
                                                        </div>
                                                        <div className="cart__adjust">
                                                            <div className="cart__updown">
                                                                <button className="product__page__divider" onClick={() => handleDown(it.id, it.quantity)}>-</button>
                                                                <span>{it.quantity}</span>
                                                                <button className="product__page__divider" onClick={() => handleUp(it.id, it.quantity)} >+</button>
                                                            </div>
                                                            <button className="cart__delete btn btn-danger" onClick={() => handleDel(it.id)}>Delete</button>
                                                            {
                                                                it.status == 2 ? <>
                                                                    <button className="btn btn-primary" onClick={() => handleSelect(it.id)}>Select</button>
                                                                </> : <>
                                                                    <button className="btn btn-primary" onClick={() => handleUndo(it.id)}>Undo</button>
                                                                </>
                                                            }

                                                        </div>
                                                    </div>
                                                );

                                            })

                                        }
                                        <div className="cart__total">Tổng tiền: {total.toLocaleString()}đ</div>
                                        <form onSubmit={(e) => handleSubmit(e, total)}>
                                            <label>
                                                <b>Họ tên người nhận hàng *:</b><br></br>
                                                <input type="text" name="name" required></input>
                                            </label><br></br>
                                            <label>
                                                <b>Địa chỉ *:</b><br></br>
                                                <input type="text" name="address" required></input>

                                            </label><br></br>
                                            <label>
                                                <b>Số điện thoại *:</b><br></br>
                                                <input type="text" name="phone" required></input>

                                            </label><br></br>

                                            <div className="cart__payment">
                                                <label>
                                                    <input type="radio" name="method" value={0} checked ></input>
                                                    Thanh toán khi nhận hàng
                                                </label><br></br>
                                                <label>
                                                    <input type="radio" name="method" value={1}></input>
                                                    Thanh toán bằng MOMO
                                                </label>
                                            </div>

                                            <br></br>
                                            <button className="btn btn-success">Thanh Toán</button>
                                        </form>
                                    </div>
                                </div>
                            </>) :
                        (
                            <div className="cart__empty">Hiện không có sản phẩm nào trong giỏ hàng</div>
                        )
                }

            </div>

        </>
    )
}
export default ListCart;