import Banbuon from "../../Components/images/ban-buon.jpg";
import Img1 from "../../Components/images/cach-cham-soc-sen-da.jpg";
import Img2 from "../../Components/images/cay-canh-lam-qua-mung-tho-.jpg";
import Img3 from "../../Components/images/tuoi-nuoc-cho-sen-da-dung-cach.jpg"
import Img4 from "../../Components/images/goi-y-cac-loai-cay-tang-sep.jpg"
import Img5 from "../../Components/images/su-dung-phan-bon-huu-co-cho-cay-trong-trong-nha.jpg"
import Img6 from "../../Components/images/thay-chau-cho-xuong-rong.jpg"
import "./styles.css";
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

function Wholesale(){
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
            <div className="bodycontainer">
                <div className="bodycontent">
                    <img 
                        src={Banbuon}
                        alt="banbuon"
                        className="moi_hop_tac"
                    />
                    <p >
                    Đầu tiên, Cây Xinh xin gửi lời cảm ơn chân thành tới quý khách vì đã ủng hộ và yêu thích các sản phẩm của chúng tôi trong nhiều năm vừa qua.<br/><br/> 
                    Với niềm đam mê đối với các loại cây phong thủy, sen đá, xương rồng… và kinh nghiệm nhiều năm trồng, chăm sóc và bán cây chúng tôi đã đúc kết được rất nhiều kinh nghiệm quý giá để có thể hỗ trợ các bạn khởi nghiệp có niềm yêu thích với cây cảnh, hoặc hợp tác với các đơn vị cùng ngành.<br/><br/>                    
                    Hiện nay Cây Xinh rất vinh dự khi cung cấp sản phẩm trang trí cho các doanh nghiệp, nhà hàng, khách sạn, quán cafe, quán trà sữa, công ty nội thất… và một số đối tác khác trên khắp Việt Nam và vươn ra tầm thế giới. Các sản phẩm của Cây Xinh hoàn toàn khác biệt so với thị trường hiện nay, chúng tôi luôn dẫn đầu về sự sáng các mẫu tiểu cảnh cây phong thủy, tiểu cảnh sen đá, xương rồng… <br/><br/> 
                    Với khả năng sản xuất trực tiếp cây từ nhà vườn hơn 10 hecta trong Đà Lạt, ngoài ra chúng tôi còn có khả năng tự chủ về việc sản xuất chậu gốm sứ, do đó Cây Xinh luôn có những mẫu mã mới được cập nhật hàng tháng và độc quyền cho tất cả khách sỉ và nhượng quyền thương hiệu của Cây Xinh.<br/><br/> 
                    Chúng tôi luôn sẵn sàng chia sẻ những kinh nghiệm quý báu giúp các bạn có thể tự mở cửa hàng cây cảnh, tư vấn phát triển hệ thống marketing, hướng dẫn trồng và chăm sóc tất cả các loại cây mà chúng tôi cung cấp. Nếu bạn có nhu cầu xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây.<br/><br/> 
                    </p>
                    <h3 >THÔNG TIN LIÊN HỆ: </h3>
                    <p>
                    Mọi thông tin chi tiết về sản phẩm các bạn có thể tham khảo trên website và gọi trực tiếp cho chúng tôi qua <br/>SĐT:<span className="highlighttext"> 086 835 7939</span> để nhận tư vấn tốt nhất.<br/><br/>  
                    Nếu bạn cần hỗ trợ tư vấn về mở <span className="highlighttext">cửa hàng CÂY CẢNH</span> chúng tôi có chính sách đặc biệt ưu tiên các bạn sinh viên có ý tưởng mở bán xin liên hệ với chúng tôi qua:<br/><br/>  
                    <h5>ĐIỆN THOẠI: 086 835 7939 </h5>  <br/> 
                    – Zalo: <span className="highlighttext">086 835 7939</span><br/><br/>  
                    – Fanpage: <span className="highlighttext">https://www.facebook.com/caycanhmini.plus/</span><br/><br/>  
                    – Email: <span className="highlighttext">cayxinh.vn@gmail.com</span><br/><br/>  
                    Trong hàng trăm cửa hàng cây cảnh trên thị trường Cây Xinh luôn có sự khác biệt về chất lượng sản phẩm, sự độc đáo về cây, nguồn phụ kiện tiểu cảnh và mẫu chậu luôn cập nhật liên tục… thái độ phục vụ khách hàng tốt và luôn tư vấn đúng những gì khách hàng cần là điều quan trọng giúp cho mọi người tin tưởng và sử dụng những sản phẩm của Cây Xinh.<br/><br/>  
                    Hiện nay có rất nhiều bạn quan tâm và muốn hợp tác với Cây Xinh trong lĩnh vực cây cảnh như cộng tác viên, mua sỉ, tư vấn mở cửa hàng,… vì thế Cây Xinh xin trân trọng kính mời:<br/><br/>  
                    – Các tổ chức kinh doanh thương mại, dịch vụ có nhu cầu về cây cảnh<br/> 
                    – Các quán cafe, trà sữa, công ty nội thất, nhà hàng, khách sạn…<br/>  
                    – Các cá nhân có nhu cầu kinh doanh, yêu thích và đam mê với cây cảnh, sen đá xương rồng…
                    <h5>Những ưu điểm của cây xinh:</h5>                    
                    ✅ Có nguồn cung cấp cây cảnh, sen đá, xương rồng ổn định với chất lượng cao<br/>
                    ✅ Tự sản xuất được châu cây cảnh với mẫu mã thay đổi liên tục hàng tháng<br/>
                    ✅ Luôn có sẵn hàng trăm mẫu phụ kiện trang trí tiểu cảnh<br/>
                    ✅ Nhiều loại cây đẹp, độc đáo được lựa chọn kỹ lưỡng<br/>
                    ✅ Cung cấp nhiều mẫu chậu đẹp, cập nhật liên tục và độc quyền trên thị trường<br/>
                    ✅ Có nhiều năm kinh nghiệm trồng và chăm sóc cây cảnh<br/>
                    ✅ Có khả năng tư vấn thiết kế tiểu cảnh, sân vườn…<br/>                    
                    <h5>Tại sao bạn nên chọn cây xinh làm đối tác:</h5>
                    ✅ Cây Xinh nhận chuyển giao kỹ thuật trồng, chăm sóc và thiết kế tiểu cảnh terrarium…<br/>
                    ✅ Tư vấn những loại cây phù hợp bán theo mùa, dễ chăm sóc<br/>
                    ✅ Không mất quá nhiều chi phí để khởi đầu kinh doanh<br/>
                    ✅ Hỗ trợ vận chuyển cây đi các tỉnh với chi phí tốt nhất<br/>
                    ✅ Hỗ trợ marketing, truyền thông nếu các bạn có nhu cầu<br/><br/>
                    Với triết lý kinh doanh “Chữ tín Quý hơn Vàng” Cây xinh vô cùng trân trọng sự tín nhiệm của Quý khách hàng tới các sản phẩm của chúng tôi. Uy tín, thái độ làm việc chuyên nghiệp, nhiệt tình và chân thành khi phục vụ là những gì quý khách sẽ nhận được tại Cây Xinh<br/><br/>
                    <ul type="asterisk">
                        <li>Để tiện cho khách hàng theo dõi các sản phẩm, các bạn có thể truy cập website:<span className="highlighttext"> www.cayxinh.vn</span> hoặc fanpage: <span className="highlighttext">Cây cảnh mini – Cayxinh.vn</span> để xem các mẫu tiểu cảnh Terrarium, các loại cây cảnh, các mẫu chậu cập nhật hàng ngày. Sau đó liên hệ trực tiếp với chúng tôi qua SĐT<span className="highlighttext"> 086 835 7939 </span>(có hỗ trợ Zalo) để nhận tư vấn mua sỉ với mức giá tốt nhất.</li>
                        <li>Tất cả sản phẩm do chúng tôi trực tiếp sản xuất nên chất lượng cực kì đảm bảo, không phải qua trung gian nên giá phải chăng và chiết khấu cao cho các của hàng bán lẻ.</li>
                    </ul>
                    <h5>CÁCH THỨC ĐẶT HÀNG</h5>
                    – Đặt hàng trực tiếp tại vườn: quý khách vui lòng gọi số ĐT:<span className="highlighttext"> 086 835 7939</span> Chúng tôi sẽ tư vấn các sản phẩm hiện đang bán chạy, quý khách lựa chọn các mặt hàng cần mua buôn sau đó chúng tôi sẽ đóng hàng vào thùng cho quý khách. Với đơn hàng lớn hơn 10 triệu sẽ được miễn phí vận chuyển ra bến xe khách để gửi đi các tỉnh. Các trường hợp khác chúng tôi có thể hỗ trợ gọi xe giúp quý khách, chi phí vận chuyển sẽ do quý khách chi trả. Giá trị đơn hàng tối thiểu từ 2 triệu đối với đơn hàng buôn.<br/><br/>
                    – Đặt hàng online qua website và qua điện thoại: quý khách vui lòng xem các sản phẩm tại website:<span className="highlighttext"> www.cayxinh.vn </span> sau đó lưu tên các sản phẩm ra file word và gửi cho chúng tôi qua email<span className="highlighttext"> cayxinh.vn@gmail.com</span>, chúng tôi sẽ gửi báo giá các sản phẩm đó cho quý khách ngay khi nhận được email.<br/><br/>
                    – Hình thức thanh toán: Quý khách có thể thanh toán trực tiếp tại cửa hàng hoặc thanh toán chuyển khoản ngân hàng.<br/><br/>
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
}
export default Wholesale;