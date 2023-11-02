import { Link, Outlet } from "react-router-dom";
import logo from "../../Components/images/logo-1-1.png";
import banner from "../../Components/images/Banner-Web7.png";
import social from "../../Components/images/facebook101121.png";
import payment from "../../Components/images/phuong-thuc-thanh-toan-cayxinh.png"
import footerLogo from "../../Components/images/logo-1-1.png"
import footerProtect from "../../Components/images/dmca_protected-1.png";
import footerNoti from "../../Components/images/20150827110756-cay-xinh-dathongbao-e1611808211540.png";
import { useSelector } from "react-redux";
import "./header.css"
import "./footer.css"
function LayoutDefaultHome() {
  const cart=useSelector(state=>state.cartReducer);
    const total=cart.reduce((sum,item)=>{
      return sum + item.quantity;
    },0)
  return (
    <>
       {/* <!--  HEADER --> */}
      <div className="header__top">Truy cập trang web cayxinh.vn</div>
      <div className="header__introduce">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logo">
            <Link to="/">
            <img src= {logo}  alt={"logo"} />
            </Link>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
              <div className="header__button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="header__contact">
              <div className="header__icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="header__tele">090.566.5982</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="container">
          <div className="header__wrap">
            <div className="header__category">
              <div className="header__icon">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="header__text">Danh mục sản phẩm</div>
            </div>
            <div className="header__menu">
            <Link to ="/" className="header__link--home">
              <div className="header__box header__home">  Trang chủ
              </div>
                </Link>
              <div className="header__box header__products">Sản phẩm</div>
              <div className="header__box header__knowledge">Kiến thức cây cảnh</div>
              <div className="header__box header__sale">Bán sỉ & nhượng quyền</div>
              <div className="header__box header__recruitment">Tuyển dụng</div>
              <div className="header__box header__address">Địa chỉ</div>
              <Link to ="/cart" className="header__link--cart">
              <div className="header__box header__cart">
             
              <div className="header__text">Giỏ hàng({total})</div>
                <div className="header__icon">
                  <i className="fa-solid fa-cart-plus"></i>
                </div>
                </div>
                </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="header__view">
        <div className="container">
          <div className="header__wrap">
            <div className="header__list">
              <ul>
                <li>Cây trồng trong nhà</li>
                <li>Cây cảnh văn phòng</li>
                <li>Tiểu cảnh Terraium</li>
                <li>Chậu cây cảnh</li>
                <li>Sen Đá</li>
                <li>Xương Rồng</li>
                <li>Phụ kiện Terraium</li>
              </ul>
            </div>
            <div className="header__image">
              <img src={banner} alt="image" />
            </div>
          </div>
        </div>
      </div>
        {/* MAIN: */}
      <main className="main">
        <Outlet />
      </main>
        {/* <!-------------------------------------------------------FOOTER----------------------------------------------------> */}
    <footer>
        <div className="container container-footer">
            <div className="row1">
                <div className="row11">
                    <h3>Về chúng tôi</h3>
                    <img src={footerLogo} alt="Logo cây xinh"/>
                    <p>Cây Xinh là thương hiệu dẫn đầu trong lĩnh vực sản xuất & cung cấp các
                        loại Cây phong thủy,
                        cây văn phòng, sen đá, xương rồng & tiểu cảnh Terrarium cao cấp trang
                        trí nội thất.</p>
                    <p>Cây Xinh luôn cố gắng tạo ra những sản phẩm đẹp, độc đáo và khác biệt
                        hoàn toàn so với thị
                        trường. Chúng tôi biến sản phẩm thành những tác phẩm nghệ thuật với tất
                        cả niềm đam mê và
                        tâm huyết của mình... để đáp ứng mọi nhu cầu của khách hàng.</p>
                </div>

                <div className="row12">
                    <h3>Hỗ trợ khách hàng</h3>
                    <ul>
                        <li><a href="#">Hướng dẫn đặt hàng & thanh toán</a></li>
                        <li><a href="#">Chính sách giao hàng & đổi trả</a></li>
                        <li><a href="#">Thỏa thuận người dùng</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Chính sách đại lý</a></li>
                        <li><a href="#">Hệ thống cửa hàng Cây Xinh</a></li>
                    </ul>
                    <a href="#">
                        <button>
                            <span>Đăng ký làm đại lý cây xinh</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </a>
                </div>

                <div className="row13">
                    <h3>Fanpage Facebook</h3>
                    <a href="#"><img src={social} alt="Facebook Fanpage"/></a>
                </div>
            </div>

            <div className="row2">
                <div className="row21">
                    <img src={payment} alt="Payment"/>
                </div>

                <div className="row22">
                    <p>CÔNG TY CỔ PHẦN ĐẦU TƯ VŨ ANH | Giấy phép kinh doanh số 0315069189 do Sở
                        KH & ĐT TP HCM cấp
                        ngày 24/05/2018 | Địa chỉ: 74/1 Đường số 19, Phường 8, Quận Gò Vấp,
                        Thành phố Hồ Chí Minh,
                        Việt Nam | Điện thoại: 028 3890 9834</p>
                    <p>Copyright 2023 © Cây Xinh | Giữ bản quyền toàn bộ hình ảnh sản phẩm</p>
                    <div><img src= {footerProtect}alt=""/></div>
                    <div><img src={footerNoti} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    </footer>
    {/* <!-- END FOOTER: --> */}
     
    </>
  )
}

export default LayoutDefaultHome;