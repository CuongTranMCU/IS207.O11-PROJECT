import LayoutDefaultHome from "../layout/LayoutDefaultHome";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import KnowledgePage from "../pages/KnowledgePage";
import GuidePage from "../pages/GuidePage";
import FengshuiPage from "../pages/FengshuiPage";
import WholesalePage from "../pages/WholesalePage";
import RecruitmentPage from "../pages/RecruitmentPage";
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
            path : "Knowledge",
            element: <KnowledgePage></KnowledgePage>
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
        }
    ]
},
{

}
];