import "./Address.css"
import Img1 from "../../Components/images/cach-cham-soc-sen-da.jpg";
import Img2 from "../../Components/images/cay-canh-lam-qua-mung-tho-.jpg";
import Img3 from "../../Components/images/tuoi-nuoc-cho-sen-da-dung-cach.jpg"
import Img4 from "../../Components/images/goi-y-cac-loai-cay-tang-sep.jpg"
import Img5 from "../../Components/images/su-dung-phan-bon-huu-co-cho-cay-trong-trong-nha.jpg"
import Img6 from "../../Components/images/thay-chau-cho-xuong-rong.jpg"
import { getListCategory } from "../../services/categoryServices"
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
function NewPost(props)
{
    return(        
        <div className="newpost">            
            <img 
                className="newpostimg" 
                alt="experience"
                src={props.pic}
            />
            <div className="newpostcontent">
            {props.newpostcontent}
            </div>
        </div>                
    );
}
function Address(){
    const [category,SetCategory] = useState([]);
    useEffect(  ()=>
        {
        const fetchApi = async ()=>
        {
            const data = await getListCategory();
            SetCategory(data.data);
        }
        fetchApi();
        },[])
    return (
        
        <>
        <div className="container">
            <div className="bodycontainer"> 
                <div className="address">
                    <iframe 
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311712352!2d106.80047917408876!3d10.870014157462458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1700360826149!5m2!1svi!2s" 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> 
                <div className="menucontainer">
                        <div className="menu">
                            <div className="menutitle">Danh mục sản phẩm</div>
                            <hr/>
                            {
                        category.map(item=>
                            (
                            <Link to={`/category/${item.slug}`} className="header__link" key={item.id}><div className='list'>{item.name}</div> </Link>
                            ))
                        }
                        
                        </div>
                        <div className="newpostcontainer">
                            <div className="menutitle">Bài viết mới
                                <hr/>
                                <NewPost
                                    pic={Img1}
                                    newpostcontent="Kinh nghiệm trồng và chăm sóc sen đá chuẩn như ở vườn"
                                />
                                <hr/>
                                <NewPost
                                    pic={Img2}
                                    newpostcontent="Top 9 cây cảnh làm quà mừng thọ ý nghĩa nhất"
                                />
                                <hr/>
                                <NewPost
                                    pic={Img3}
                                    newpostcontent="Hướng dẫn cách tưới sen đá cho người mới bắt đầu"
                                />
                                <hr/>
                                <NewPost
                                    pic={Img4}
                                    newpostcontent="Gợi ý 7 loại cây cảnh tặng sếp nhân dịp cuối năm"
                                />
                                <hr/>
                                <NewPost
                                    pic={Img5}
                                    newpostcontent="Sử dụng phân bón hữu cơ cho cây trồng trong nhà"
                                />
                                <hr/>
                                <NewPost
                                    pic={Img6}
                                    newpostcontent="Hướng dẫn thay chậu cho xương rồng đúng cách"
                                />
                            </div>
                        </div>
                    </div>
            </div> 
        </div>  
        </>
    );
};
export default Address;