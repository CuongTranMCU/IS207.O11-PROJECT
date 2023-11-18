import DashBoard from "../Components/Admin/DashBoard";
import LoginAdmin from "../Components/Admin/LoginAdmin";
import OrderCRUD from "../Components/Admin/OrderCRUD";
import ProductCRUD from "../Components/Admin/ProductCRUD";
import UserCRUD from "../Components/Admin/UserCRUD";
import CategoryProduct from "../Components/CategoryProduct";
import ProductDetail from "../Components/ProductDetail";
import LayoutDefaultAdmin from "../layout/LayoutDefaultAdmin";
import LayoutDefaultHome from "../layout/LayoutDefaultHome";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/Register";

export const routes = [
{
    path : "/",
    element : <LayoutDefaultHome></LayoutDefaultHome>,
    children: [
        {
            index: true,
            element: <HomePage></HomePage>
        },
        {
            path : "cart",
            element : <CartPage></CartPage>
        },
        {
            path:"login",
            element: <LoginPage></LoginPage>
        },
        {
            path: "sign-up",
            element : <RegisterPage></RegisterPage>
        },
        {
            path:"logout",
            element:<LogoutPage></LogoutPage>
        },
        {
            path: "products",
            element:<ProductPage></ProductPage>
        },
        {
            path:"product/:slug",
            element: <ProductDetail></ProductDetail>
        },
        {
            path:"category/:slug",
            element:<CategoryProduct></CategoryProduct>
        }
    ]
},
{
    path:"/admin",
    element:<LayoutDefaultAdmin></LayoutDefaultAdmin>,
    children:[
        {
            index:true,
            element:<DashBoard></DashBoard>
        },
        {
            path:"user",
            element:<UserCRUD></UserCRUD>
        },
        {
            path:"product",
            element:<ProductCRUD></ProductCRUD>
        },
        {
            path:"order",
            element:<OrderCRUD></OrderCRUD>
        }
    ]
},
{
    path:"/admin/login",
    element:<LoginAdmin></LoginAdmin>

}
];