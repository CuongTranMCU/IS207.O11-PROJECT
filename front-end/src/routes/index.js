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
import FengshuiPage from "../pages/FengshuiPage";
import KnowledgePage from "../pages/KnowledgePage";
import RecruitmentPage from "../pages/RecruitmentPage";
import WholesalePage from "../pages/WholesalePage";
import GuidePage from "../pages/GuidePage";
import AddressPage from "../pages/AddressPage";
import SearchProduct from "../Components/SearchProduct";
import FilterProduct from "../Components/FilterProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
import ConfirmOrder from "../Components/ConfirmOrder";
import Checkout from "../Components/Admin/CheckOut";
import MyOrder from "../Components/MyOrder";
import ForgetPassword from "../Components/ForgetPassword";
import ResetPassword from "../Components/ResetPassword";
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
            path:"forget-password",
            element:<ForgetPassword></ForgetPassword>
        },
        {
            path:"reset-password",
            element:<ResetPassword></ResetPassword>

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
            element:<ListProduct></ListProduct>
        },
        {
            path:"product/:slug",
            element: <ProductDetail></ProductDetail>
        },
        {
            path:"category/:slug",
            element:<CategoryProduct></CategoryProduct>
        },
        {
            path : "Knowledge",
            element: <KnowledgePage></KnowledgePage>
        },
        {
            path:"products/search?",
            element:<SearchProduct></SearchProduct>
        },
        {
            path:"checkout",
            element:<Checkout></Checkout>
        },
        {
            path:"my-order",
            element:<MyOrder>   </MyOrder>
        },
        {
            path:"confirm-order?",
            element:<ConfirmOrder></ConfirmOrder>
        },
        {
            path:"products/filter?",
            element:<FilterProduct></FilterProduct>
        },
        {
            path : "Guide",
            element: <GuidePage></GuidePage>
        },
        {
            path: "Fengshui",
            element: <FengshuiPage></FengshuiPage>
        },
        {
            path: "Wholesale",
            element: <WholesalePage></WholesalePage>
        },
        {
            path: "Recruitment",
            element: <RecruitmentPage></RecruitmentPage>
        },
        {
            path: "Address",
            element: <AddressPage></AddressPage>
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