export function getCookie(cname) {
    // Tạo chuỗi tên cookie kèm theo dấu bằng
    var name = cname + "=";
  
    // Tách tất cả cookie thành một mảng
    var ca = document.cookie.split(";");
  
    // Duyệt qua từng cookie trong mảng
    for (var i = 0; i < ca.length; i++) {
      // Lấy từng cookie
      var c = ca[i];
  
      // Bỏ qua các cookie trống
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
  
      // Kiểm tra xem cookie có chứa tên cookie cần lấy hay không
      if (c.indexOf(name) === 0) {  
        // Trả về giá trị của cookie
        return c.substring(name.length, c.length);
      }
    }
  
    // Trả về giá trị rỗng nếu không tìm thấy cookie
    return "";
  }
// a cookie will be created on the web.
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

export const login = () => {
document.cookie = 'isLogin=true';
document.cookie = 'token=JKHDS34234KJLKJFNKSJ';
}
//
export function deleteCookie (cname) {
document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC` ;
}
// Xóa hết cookie
 export function deleteAllCookies() {
const cookies = document.cookie.split(";");
for (let i = 0; i < cookies.length; i++) {
const cookie = cookies[i];
const eqPos = cookie.indexOf("=");
const name = eqPos > -1 ? cookie.substr(0, eqPos): cookie;
document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
}
// Hết phần Xóa hết cookie