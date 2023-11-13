//import plantData from './Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSeller from "./Props/BestSeller"
import HomePost from "./Props/HomePost";
import BsData from './BSdata';
import lacay from "../../Components/images/lacay.png"
import "./Css/BestSeller.css"
import "./Css/Homeproduct.css"
import "./Css/Blog.css"
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
import BlogPost from "./Props/BlogPost";
function Home(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,

    };
    return(
        <>
        <div className="container">  
        {/* ------------------BestSeller ------------------------ */}
          <div id="bsheader">
              <h1 id="bstitle">SẢN PHẨM BÁN CHẠY</h1>
               <img src={lacay}/>                
          </div>                       
          <div id="bsbody">
            {BsData.map(plant =>(
              <BestSeller
                key={plant.id}
                plant={plant}
              />
            ))}
          </div>
        {/* -----------------------Product---------------------------- */}
            <div className="HomeProduct">
                <div className="ProductHeader">
                    <h3 className="type"> CÂY CẢNH VĂN PHÒNG</h3>
                    <div className="anotherChoice">
                        <a href='#' className="choice">Cây lọc không khí</a>
                        <a href='#' className="choice">Cây phong thủy</a>
                        <a href='#' className="choice">Cây thủy sinh</a>
                        <a href='#' className="choice">Cây để bàn</a>
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                <div className="HomePostContainer">
                {BsData.map(post =>(
                <HomePost
                    key={post.id}
                    Post={post}
                />
                ))}                                     
                </div>
            </div>
            <div className="HomeProduct">  
                <div className="ProductHeader">
                    <h3 className="type"> TIỂU CẢNH TERRARIUM</h3>
                    <div className="anotherChoice">
                        <a href='#' className="choice">Chậu composite</a>
                        <a href='#' className="choice">Chậu gốm</a>
                        <a href='#' className="choice">Chậu nhựa</a>
                        <a href='#' className="choice">Chậu thủy tinh</a>
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                <div className="HomePostContainer">
                {BsData.map(post =>(
                <HomePost
                    key={post.id}
                    Post={post}
                />
                ))}                                     
                </div>                
            </div>
            <div className="HomeProduct">  
                <div className="ProductHeader">
                    <h3 className="type">CHẬU CÂY CẢNH</h3>
                    <div className="anotherChoice">
                        <a href='#' className="choice">Chậu gốm sứ</a>
                        <a href='#' className="choice">Chậu đất nung</a>
                        <a href='#' className="choice">Chậu nhựa</a>
                        <a href='#' className="choice">Chậu thủy tinh</a>
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                <div className="HomePostContainer">
                {BsData.map(post =>(
                <HomePost
                    key={post.id}
                    Post={post}
                />
                ))}                                     
                </div>                
            </div>
            <div className="HomeProduct">  
                <div className="ProductHeader">
                    <h3 className="type">SEN ĐÁ</h3>
                    <div className="anotherChoice">
                        
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                <div className="HomePostContainer">
                {BsData.map(post =>(
                <HomePost
                    key={post.id}
                    Post={post}
                />
                ))}                                     
                </div>                
            </div>
            <div className="HomeProduct">  
                <div className="ProductHeader">
                    <h3 className="type">XƯƠNG RỒNG</h3>
                    <div className="anotherChoice">
                        
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                <div className="HomePostContainer">
                {BsData.map(post =>(
                <HomePost
                    key={post.id}
                    Post={post}
                />
                ))}                                     
                </div>                
            </div>
            <div className="HomeProduct">  
                <div className="ProductHeader">
                    <h3 className="type">PHỤ KIỆN TERRARIUM</h3>
                    <div className="anotherChoice">
                        <a href='#' className="choice">Cây cối</a>
                        <a href='#' className="choice">Con người</a>
                        <a href='#' className="choice">Hoạt hình</a>
                        <a href='#' className="choice">Động vật</a>
                        <a href='#' className="choice">Kiến trúc</a>
                        <p className="extent">+ Xem tất cả</p>                                                   
                    </div>
                </div>
                <hr />
                
                <Slider {...settings}>
                
                    {BsData.map((post) =>(
                    <HomePost
                        key={post.id}
                        Post={post}
                        isWide={true}
                    />
                    ))}                                      

                </Slider>             
            </div>
            <div className="Blog">
                <div className="KnowledgeBlog">
                    <div className="BlogHeader">
                        <h4 className="BlogHeaderText">KIẾN THỨC CÂY CẢNH</h4>
                        <img src={lacay}/>  
                    </div>
                    <div className="BlogBody">
                        <BlogPost
                            img={Img1}
                            title="Kinh nghiệm trồng và chăm sóc sen đá chuẩn như ở vườn"
                            content="Sen đá được yêu thích không chỉ bởi sự nhỏ nhắn"
                        />
                        <BlogPost
                            img={Img2}
                            title="Top 9 cây cảnh làm quà mừng thọ ý nghĩa nhất"
                            content="Lễ mừng thọ là một trong những truyền thống tốt đẹp"
                        />
                        <BlogPost
                            img={Img3}
                            title="Hướng dẫn cách tưới sen đá cho người mới bắt đầu"
                            content="Sen đá là một loại thực vật mọng nước tưởng chừng"
                        />
                        <BlogPost
                            img={Img4}
                            title="Gợi ý 7 loại cây cảnh tặng sếp nhân dịp cuối năm"
                            content="Đặt một vài chậu cây xanh trong cơ quan,văn phòng"
                        />
                        <BlogPost
                            img={Img5}
                            title="Sử dụng phân bón hữu cơ cho cây trồng trong nhà"
                            content="Cây trồng trong nhà cần được bón phân để đảm bảo"
                        />
                        <BlogPost
                            img={Img6}
                            title="Hướng dẫn thay chậu cho Xương Rồng đúng cách"
                            content="Xương Rồng là một loại cây mọng nước không đòi"
                        />
                    </div>
                </div>
                <div className="FengshuiBlog">
                    <div className="BlogHeader">
                        <h4 className="BlogHeaderText">CÂY PHONG THỦY THEO TUỔI</h4>
                        <img src={lacay}/>  
                    </div>
                    <div className="BlogBody">
                        <BlogPost
                            type="true"
                            img={Feng1}
                            title="Cây Hợp Mệnh Kim"
                            content="Hiện nay việc trồng cây cảnh trong nhà đóng vai trò quan trọng, nó không chỉ là"
                        />
                        <BlogPost
                            type="true"
                            img={Feng2}
                            title="Cây Hợp Mệnh Thủy"
                            content="Chọn cây cảnh hợp phong thủy từ lâu đã không còn là việc xa lạ với mọi người"
                        />
                        <BlogPost
                            type="true"
                            img={Feng3}
                            title="Cây Hợp Mệnh Hỏa"
                            content="Trang trí không gian bằng cây xanh không chỉ tạo nên môi trường sống và làm việc"
                        />
                        <BlogPost
                            type="true"
                            img={Feng4}
                            title="Cây Hợp Mệnh Thổ"
                            content="Trước khi lựa chọn bất kì một dòng cây trồng trong nhà nào đó, bản thân người sở hữu"
                        />
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}
export default Home