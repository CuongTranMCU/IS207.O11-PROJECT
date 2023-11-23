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
function Recruitment(){
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
                    <div className="bodycontent">
                        <p>
                        <h3>THÔNG TIN TUYỂN DỤNG THÁNG 7/2019</h3>
                        Với kế hoạch mở rộng và phát triển hoạt động kinh doanh lĩnh vực cây xanh trên toàn quốc, Cây Xinh tuyển dụng nhân sự ở các vị trí khác nhau, tạo việc làm và cơ hội phát triển nghề nghiệp với thu nhập hấp dẫn.<br/><br/>
                        Đặc biệt rất phù hợp với các bạn có tình yêu với cây cối, thích làm việc trong môi trường xanh, đồng nghiệp tốt, quản lý giỏi để phát triển kỹ năng trở thành người bán hàng vĩ đại nhất<br/><br/>
                        Địa chỉ làm việc:<span className="highlighttext"> Số 1, Ngõ 213, Giáp Nhất, Thanh Xuân, Hà Nội </span><br/><br/>

                        <h3>I. VỊ TRÍ TUYỂN DỤNG:</h3>
                        – Kế toán nội bộ: 1 nhân sự (mức lương 6,5-8tr/tháng)<br/>
                        – Nhân viên bán hàng/CSKH: 4 nhân sự (lương 6-8tr/tháng) <br/>
                        – Nhân viên Partime (3 ca từ 8-19h hàng ngày): 4 nhân sự (lương 14-16k/h) <br/>
                        *Mức lương tuỳ theo năng lực của ứng viên, khi phỏng vấn sẽ trao đổi cụ thể hơn<br/><br/>

                        <h3>II. YÊU CẦU CHUNG</h3> 
                        1. Đối với kế toán: <br/>
                        – Tốt nghiệp Đại học trở lên, chuyên ngành kế toán/kiểm toán<br/>
                        – Yêu cầu kinh nghiệm trên 1 năm, sử dụng thành thạo 1 số phần mềm kế toán thông dụng<br/>
                        – Quản lý, đối chiếu công nợ, lập báo cáo thu chi hàng tháng của công ty <br/>
                        – Nhanh nhẹn, thật thà, ý thức làm việc nhóm tốt<br/><br/>

                        2. Đối với nhân viên bán hàng/CSKH: 
                        – Kỹ năng giao tiếp tốt, thái độ phục vụ tốt, năng động, nhiệt tình, chăm chỉ<br/>
                        – Yêu thích cây cảnh là một lợi thế<br/>
                        – Ưu tiên các bạn có kinh nghiệm bán hàng online<br/><br/>

                        3. Đối với nhân viên Partime: 
                        – Không yêu cầu kinh nghiệm, ca làm việc linh động <br/>
                        – Hỗ trợ bán hàng, chăm sóc khách hàng, sắp xếp, chăm sóc cây <br/>
                        – Thời gian làm việc tối thiểu 4 buổi/tuần<br/><br/>

                        <h3>III. QUYỀN LỢI</h3>
                        – Thu nhập cạnh tranh, xét duyệt tăng lương theo năng lực<br/>
                        – Hưởng các chế độ BHXH, BHYT, BHTN đầy đủ theo luật định<br/>
                        – Có cơ hội đào tạo, phát triển năng lực cá nhân trong môi trường chuyên nghiệp, năng động
                        – Đào tạo từ A-Z về các phần mềm quản lý, kỹ năng bán hàng, chốt sale, Telesale…<br/><br/>

                        <h3>IV. HƯỚNG DẪN ỨNG TUYỂN </h3>
                        – Nộp hồ sơ và phỏng vấn trực tiếp tại: <span className="highlighttext">Số 1, Ngõ 213, Giáp Nhất, Thanh Xuân, Hà Nội </span><br/>
                        – Điện thoại: Mr. Dũng<span className="highlighttext"> 096.771.6467</span> hoặc<span className="highlighttext"> 094.822.5678</span><br/>
                        – Gửi CV qua email:<span className="highlighttext"> cayxinh.vn@gmail.com </span><br/><br/>

                        Mọi thắc mắc xin vui lòng liên hệ trực tiếp để được giải đáp, xin cảm ơn!
                        </p>
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
export default Recruitment;