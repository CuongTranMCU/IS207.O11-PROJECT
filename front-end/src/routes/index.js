import LayoutDefaultHome from "../layout/LayoutDefaultHome";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

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
        }
    ]
},
{

}
];