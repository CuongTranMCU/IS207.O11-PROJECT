import React from 'react';
import Img1 from "../../Components/images/cach-cham-soc-sen-da.jpg";
import Img2 from "../../Components/images/cay-canh-lam-qua-mung-tho-.jpg";
import Img3 from "../../Components/images/tuoi-nuoc-cho-sen-da-dung-cach.jpg"
import Img4 from "../../Components/images/goi-y-cac-loai-cay-tang-sep.jpg"
import Img5 from "../../Components/images/su-dung-phan-bon-huu-co-cho-cay-trong-trong-nha.jpg"
import Img6 from "../../Components/images/thay-chau-cho-xuong-rong.jpg"
import Img7 from "../../Components/images/bon-sai.jpg"
import Img8 from "../../Components/images/vuon-ban-cong.jpg"
import Img9 from "../../Components/images/van-chuyen-cay-canh.jpg"
import { getListCategory } from "../../services/categoryServices"
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";
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

function Knowledge()
{   
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
            <h2>Kiến thức cây cảnh</h2>
            <div className="KnowledgeTitle">
            Tổng hợp các kiến thức về cây phong thủy, hướng dẫn lựa chọn 
            cây phù hợp với tuổi, mệnh.Ngoài ra nơi đây còn chia sẻ cách chăm 
            sóc các loại cây để bàn, sen đá, xương rồng tốt nhất...
            </div>
            <div className="bodycontainer">
                <div className="Allpost">
                    <Post
                        title="Kinh nghiệm trồng và chăm sóc sen đá lên màu chuẩn
                        như ở vườn"
                        pic={Img1}
                        content="Sen đá được yêu thích không chỉ bởi sự nhỏ nhắn 
                        đáng yêu mà còn vì đây là một loại cây cực kì dễ sống, dễ trồng.
                        Đối với nhiều người, có lẽ trồng và chăm sóc sen đá không 
                        có gì là quá khó. Với kinh nghiệm 
                        nhiều năm trong lĩnh vực kinh doanh cây cảnh,  "
                        comment="19"
                    />
                    <Post
                        title="Top 9 cây cảnh làm quà mừng thọ ý nghĩa nhất"
                        pic={Img2}
                        content="Lễ mừng thọ là một trong những truyền thống tốt đẹp của 
                        người Việt, là dịp quan trọng để con cháu bày tỏ sự tôn trọng, 
                        lòng biết ơn tới ông, bà, bố, mẹ. Một chậu cây xanh tốt chắc chắn sẽ 
                        là món quà mừng ý nghĩa, mang giá trị thực tế cao. "
                        
                        comment="19"
                    />
                    <Post
                        title="Hướng dẫn cách tưới sen đá cho người mới bắt đầu"
                        pic={Img3}
                        content="Sen Đá là một loại thực vật mọng nước tưởng chừng như dễ 
                        chăm nhưng để lại khá nhiều rắc rối cho những ai chưa biết cách săn 
                        sóc đúng cách. Những khó khăn ấy phần lớn bắt nguồn từ việc tưới nước cho cây."
                        
                        comment="19"
                    />
                    <Post
                        title="Gợi ý 7 loại cây cảnh tặng sếp nhân dịp cuối năm"
                        pic={Img4}
                        content="Đặt một vài chậu cây xanh trong cơ quan, văn phòng hay bàn làm việc 
                        không những gia tăng sinh khí mà còn mang lại không gian trong lành, 
                        hạn chế tiếng ồn, giảm căng thẳng và kích thích sự sáng tạo. 
                        Vì vậy, mỗi dịp cuối năm, nhiều nhân viên đã dành tặng cho sếp 
                        của mình những chậu cây xanh để bày tỏ sự quý mến, tôn trọng."                       
                        comment="19"
                    />
                    <Post
                        title="Sử dụng phân bón hữu cơ cho cây trồng trong nhà"
                        pic={Img5}
                        content="Cây trồng trong nhà cần được bón phân để đảm bảo sinh trưởng
                         và phát triển một cách tốt nhất. Phân bón hữu cơ là một sự lựa chọn 
                         tuyệt vời vì chúng không những an toàn, hiệu quả mà còn thân thiện 
                         với môi trường. Thế nhưng phân bón hữu cơ được tạo ra như thế nào và 
                         bón phân cho cây ra sao?"                       
                        comment="19"
                    />
                    <Post
                        title="Hướng dẫn thay chậu cho xương rồng đúng cách"
                        pic={Img6}
                        content="Xương Rồng là một loại cây mọng nước không đòi hỏi quá nhiều 
                        sự săn sóc. Chúng không cần thay chậu thường xuyên thế nhưng thỉnh thoảng 
                        cũng cần bổ sung đất và cần chậu có kích thước lớn hơn."                       
                        comment="19"
                    />
                    <Post
                        title="Tổng hợp 20 cây cảnh chuyên dùng làm Bonsai đẹp nhất"
                        pic={Img7}
                        content="ếu như ở cây cảnh thông thường, mọi người chỉ tập trung vào vẻ đẹp 
                        của hoa và lá thì đối với những chậu bonsai, sự thưởng thức sẽ nằm ở toàn bộ 
                        cây. Bonsai cũng chính là một hình thức nghệ thuật mang đến sự hài hoà, đồng 
                        điệu giữa chậu, thân và kiểu dáng của cây cảnh."                       
                        comment="19"
                    />
                    <Post
                        title="'Vườn' ban công - Cách trang trí và tối đa hóa không gian của bạn"
                        pic={Img8}
                        content="Nếu như ở cây cảnh thông thường, mọi người chỉ tập trung vào vẻ đẹp 
                        của hoa và lá thì đối với những chậu bonsai, sự thưởng thức sẽ nằm ở toàn bộ 
                        cây. Bonsai cũng chính là một hình thức nghệ thuật mang đến sự hài hoà, đồng 
                        điệu giữa chậu, thân và kiểu dáng của cây cảnh."                       
                        comment="19"
                    />
                    <Post
                        title="Kinh nghiệm vận chuyển cây cảnh vừa đúng kỹ thuật, vừa an toàn"
                        pic={Img9}
                        content="Chúng ta đều biết rằng cây cảnh sẽ mất giá trị khi cành cây bị gãy hay dập, 
                        đặc biệt với những người yêu cây mỗi chiếc lá, nụ hoa đều thật quý báu. Chính vì vậy, 
                        việc di chuyển cây cảnh đi xa luôn là là nỗi lo của nhiều người, nếu vận chuyển không 
                        đúng kỹ thuật sẽ ảnh hưởng đến sự phát triển cành lá của cây, thậm chí là chết cây. "                       
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
export default Knowledge;
