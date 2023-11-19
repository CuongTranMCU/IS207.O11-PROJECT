import React from 'react';
import Img1 from "../../Components/images/cach-cham-soc-sen-da.jpg";
import Img2 from "../../Components/images/cay-canh-lam-qua-mung-tho-.jpg";
import Img3 from "../../Components/images/tuoi-nuoc-cho-sen-da-dung-cach.jpg"
import Img4 from "../../Components/images/goi-y-cac-loai-cay-tang-sep.jpg"
import Img5 from "../../Components/images/su-dung-phan-bon-huu-co-cho-cay-trong-trong-nha.jpg"
import Img6 from "../../Components/images/thay-chau-cho-xuong-rong.jpg"
import Feng1 from "../../Components/images/cay-hop-menh-kim.jpg"
import Feng2 from "../../Components/images/cay-hop-menh-thuy.jpg"
import Feng3 from "../../Components/images/cay-hop-menh-hoa.jpg"
import Feng4 from "../../Components/images/cay-hop-menh-tho.jpg"
import Feng5 from "../../Components/images/cay-hop-menh-moc.jpg"
import Feng6 from "../../Components/images/cay-canh-hop-menh.jpg"
import Feng7 from "../../Components/images/cay-hop-tuoi-hoi.jpg"
import Feng8 from "../../Components/images/cay-hop-tuoi-tuat.jpg"
import Feng9 from "../../Components/images/cay-hop-tuoi-dau.jpg"
import Feng10 from "../../Components/images/cay-hop-tuoi-than.jpg"
import { getListCategory } from "../../services/categoryServices"
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import "./styles.css";
import Post from "./post";

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

function Guide(){
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
    return(
        <>
        <div className="container">
            <h2>Cây cảnh phong thủy</h2>
                <div className="KnowledgeTitle">
                Mỗi loại cây cũng giống như chúng ta. Tùy từng loại cây sẽ mang đặc tính khác nhau, 
                khi bạn chăm sóc loài cây phù hợp với tuổi của mình, theo quan niệm phong thủy ngũ hành 
                sẽ tạo ra mối quan hệ tương sinh, thuận lợi cho con đường tiền tài, công danh của bạn. 
                Hãy cùng Cây Xinh xem top 12 cây cảnh phong thủy 
                theo tuổi bên dưới để xem cây nào mang lại may mắn, tài lộc cho bản thân nhé…
                </div>
            <div className="bodycontainer">
                <div className="Allpost">
                <Post
                    title="Cây Hợp Mệnh Kim"
                    pic={Feng1}
                    content="Hiện nay, việc trồng cây cảnh trong nhà đóng vai trò quan trọng, nó không 
                    chỉ là vật trang trí cho không gian thêm xanh tươi mà còn mang ý nghĩa về mặt tâm linh. 
                    Cây hợp mệnh sẽ mang lại điềm lành, những điều tốt đẹp nhất cho gia chủ. Trong bài viết 
                    này, Cây Xinh sẽ đưa các bạn đi tìm hiểu những loại cây hợp với người mệnh Kim."
                    comment="19"
                />
                <Post
                    title="Cây Hợp Mệnh Thủy"
                    pic={Feng2}
                    content="Chọn cây cảnh hợp phong thuỷ từ lâu đã không còn là việc xa lạ với mọi người, 
                    nhưng chọn cây hợp nội thất, hợp tuổi thôi là chưa đủ, mà chọn cây hợp với mệnh cũng rất 
                    quan trọng. Nếu chọn đúng cây hợp với mệnh của gia chủ sẽ giúp mọi thành viên trong gia đình 
                    luôn an lanh, suôn sẻ trong cuộc sống."
                    comment="19"
                />
                <Post
                    title="Cây Hợp Mệnh Hoả"
                    pic={Feng3}
                    content="Trang trí không gian bằng cây xanh không chỉ tạo nên môi trường sống và làm việc trong 
                    lành, mà việc chọn đúng cây hợp với mệnh còn giúp tăng vượng khí và vận may cho gia đình. 
                    Vậy người mang mệnh Hỏa hợp cây gì?"
                    comment="19"
                />
                <Post
                    title="Cây Hợp Mệnh Thổ"
                    pic={Feng4}
                    content="Trước khi lựa chọn bất cứ một dòng cây trồng trong nhà nào đó, bản thân người sở hữu cũng 
                    phải cân nhắc dựa trên nhiều yếu tố và phong thuỷ cũng chính là một trong những yếu tố quyết định."
                    comment="19"
                />
                <Post
                    title="Cây Hợp Mệnh Mộc"
                    pic={Feng5}
                    content="Trong ngũ hành, người mang mệnh Mộc phù hợp với trồng cây cảnh nhất, họ không mất nhiều thời 
                    gian để chọn loại cây phù hợp giúp chiêu tài, mang lại nhiều may mắn trong cuộc sống cũng như công việc."
                    comment="19"
                />
                <Post
                    title="Cây Hợp Mệnh"
                    pic={Feng6}
                    content="Trong dịp đầu năm mới, ngoài việc dọn dẹp nhà cửa, phòng làm việc để lấy may mắn, 
                    bạn cũng có thể trồng thêm một vài cây cảnh hợp với mệnh của mình để nhằm tạo không gian xanh 
                    và có tác dụng “hút” tài lộc, may mắn cho bản thân mình…"
                    comment="19"
                />
                <Post
                    title="Cây phong thủy tuổi Hợi"
                    pic={Feng7}
                    content="Cây phong thủy là một trong những yếu tố quan trọng giúp chiêu tài, chiêu lộc và mang lại may mắn 
                    cho gia chủ, được rất nhiều người ưa chuộng. Tuy nhiên, đối với mỗi tuổi sẽ có một số loại cây phù hợp cho 
                    bản thân mình, đem lại tài lộc và may mắn cho gia chủ."
                    comment="19"
                />
                <Post
                    title="Cây phong thủy tuổi Tuất"
                    pic={Feng8}
                    content="Hiện nay, việc sử dụng các loại cây cảnh văn phòng để trang trí cho các không gian không chỉ 
                    mang lại tính thẩm mỹ cao, mà còn là một yếu tố rất quan trọng giúp mang lại tiền tài và sự may mắn 
                    cho gia chủ. Đặc biệt, mỗi năm tuổi sẽ lại có một số loại cây phù hợp cho riêng mình."
                    comment="19"
                />
                
                <Post
                    title="Cây phong thủy tuổi Dậu"
                    pic={Feng9}
                    content="Việc lựa chọn các loại cây phong thủy hợp tuổi đóng vai trò quan trong việc mang tới tài lộc, 
                    vận may cho 12 con giáp. Mỗi tuổi sẽ thích hợp với mỗi loài cây phong thủy khác nhau."
                    comment="19"
                />
                <Post
                    title="Cây phong thủy tuổi Thân"
                    pic={Feng10}
                    content="Ngày nay, việc trồng các loại cây cảnh phong thủy để trang trí không gian nội thất ngày càng 
                    phổ biến. Bởi cây cảnh không chỉ mang lại không gian mới mẻ mà còn cải thiện môi trường sống, tốt cho 
                    sức khỏe của các thành viên trong gia đình. Đặc biệt, với mỗi tuổi mệnh sẽ lại có một loại cây cảnh phong thủy tương ứng."
                    comment="19"
                />
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
    )
}
export default Guide