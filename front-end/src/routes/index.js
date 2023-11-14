import CategoryProduct from "../Components/CategoryProduct";
import ProductDetail from "../Components/ProductDetail";
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

}
];