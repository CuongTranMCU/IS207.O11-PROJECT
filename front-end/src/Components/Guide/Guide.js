import React from 'react';
import Img1 from "../../Components/images/cach-cham-soc-sen-da.jpg";
import Img2 from "../../Components/images/cay-canh-lam-qua-mung-tho-.jpg";
import Img3 from "../../Components/images/tuoi-nuoc-cho-sen-da-dung-cach.jpg"
import Img4 from "../../Components/images/goi-y-cac-loai-cay-tang-sep.jpg"
import Img5 from "../../Components/images/su-dung-phan-bon-huu-co-cho-cay-trong-trong-nha.jpg"
import Img6 from "../../Components/images/thay-chau-cho-xuong-rong.jpg"
import Gui2 from "../../Components/images/cham-soc-cay-canh-vao-mua-he.jpg"
import Gui3 from "../../Components/images/cach-cham-soc-cay-trau-ba.jpg"
import Gui4 from "../../Components/images/huong-dan-cham-soc-cay-de-ban.jpg"
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
    return(
        <>
        <div className="container">
            <h2>Hướng dẫn chăm sóc</h2>
            <div className="KnowledgeTitle">
            Hướng dẫn chăm sóc các loại cây cảnh, sen đá, xương rồng.
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
                    title="8 tuyệt chiêu để chăm sóc cây cảnh vào mùa hè nắng gắt?"
                    pic={Gui2}
                    content="Cây cảnh cũng như con người chúng ta, chúng cũng có thể bị 
                    tổn thương bởi nắng gắt hay mất nước trong những ngày nắng hè khi nhiệt độ 
                    vượt quá 35°C. Thay đổi chế độ tưới nước, ánh sáng, điều chỉnh một số điều kiện 
                    khác sẽ giúp ích rất nhiều cho việc chăm sóc chúng trở nên dễ dàng hơn. "
                    comment="19"
                />
                <Post
                    title="Hướng dẫn chăm sóc cây trầu bà đế vương đỏ đúng cách"
                    pic={Gui3}
                    content="Cây Trầu bà đế vương đỏ được mệnh danh là bậc đế vương có ý nghĩa mang 
                    lại sự thành công, may mắn, thịnh vượng cho gia chủ. Đồng thời chúng còn có khả 
                    năng hút các luồng khí độc như khói thuốc, bức xạ máy tính, xăng xe… Hiện nay, loài 
                    cây cảnh phong thủy để bàn này đang rất được giới văn phòng ưa chuộng và sử dụng để 
                    trang trí bày biện cho phòng làm việc."
                    comment="19"
                />
                <Post
                    title="Hướng dẫn chi tiết cách trồng và chăm sóc cây cảnh để bàn"
                    pic={Gui4}
                    content="Cây cảnh để bàn dùng để trang trí, tăng thêm tài lộc và may mắn theo phong 
                    thủy đang là xu hướng được phần lớn giới công sở, văn phòng ưa chuộng hiện nay. Những 
                    chậu trồng cây cảnh mini để bàn đẹp tạo cho bạn sự thoải mái để hoàn thành công việc tốt nhất."
                    comment="19"
                />
                </div>
                <div className="menucontainer">
                    <div className="menu">
                        <div className="menutitle">Danh mục sản phẩm</div>
                        <hr/>
                        <div className="menucontent">Cây cảnh văn phòng </div>
                        <hr/>
                        <div className="menucontent">Cây trồng trong nhà </div>
                        <hr/>
                        <div className="menucontent">Chậu cây cảnh </div>
                        <hr/>
                        <div className="menucontent">Phụ kiện Terrarium </div>
                        <hr/>
                        <div className="menucontent">Sen đá </div>
                        <hr/>
                        <div className="menucontent">Tiểu cảnh Terrarium</div>
                        <hr/>
                        <div className="menucontent">Xương rồng</div>
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