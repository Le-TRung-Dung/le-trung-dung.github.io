import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  vn: {
    translation: {
      // header
      "Home page": "Trang chủ",
      "Product":"Sản phẩm",
      "News and promotions":"Tin tức và khuyến mại",
      "Contact":"Liên hệ",
      "Sugar Cake":"Bánh ngọt",
      "Bread":"Bánh mỳ",
      "Moon Cake":"Bánh trung thu",
      "Hot selling products":"Sản Phẩm Bán Chạy",
      "See more":"Xem thêm",
      "Search":"Tìm kiếm",

      //footer
      "Policy":"Chính sách",
      "General policies and regulations":"Chính sách và quy định chung",
      "Policy transaction, payment":"Chính sách giao dịch, thanh toán",
      "Return policy":"Chính sách đổi trả",
      "Privacy Policy":"Chính sách bảo mật",
      "Shipping policy":"Chính sách vận chuyển",

      //detail Product
      "Product code":"Mã sản phẩm",
      "Price":"Giá",
      "Quantity":"Số lượng",
      "Add to cart":"Thêm vào giỏ hàng",
      "Buy now":"Mua ngay",
      "General description":"Mô tả chung",
      "Maybe you like":"Có thể bạn thích",
      "Related Products":"Sản phẩm tương tự",
      

      //cart
      "Cart":"Giỏ hàng",
      "Total money":"Tổng tiền",
      "Pay":"Thanh toán",
      "Your cart":"Giỏ hàng của bạn",
      "Product information":"Thông tin sản phẩm",
      "Unit price":"Đơn giá",
      "Delete":"Xóa",
      "Cart is empty":"Giỏ hàng trống",
      "Total order":"Tổng đơn hàng",
      "Continue shopping":"Tiếp tục mua hàng",

      // thanh toan
      "Payment order":"Thanh toán đơn hàng",
      "Billing Information":"Thông tin thanh toán",
      "First and last name":"Họ và tên",
      "Phone number":"Số điện thoại",
      "Address":"Địa chỉ",
      "Enter your first and last name":"Nhập họ và tên của bạn !",
      "Payment methods":"Hình thức thanh toán",
      "Payment on delivery":"Thanh toán khi nhận hàng(COD)",
      "Payment":"Thanh toán",
      "Order Success":"Đặt hàng thành công",
      "Order code":"Mã đơn hàng",
      "Thank you for your purchase":"Cảm ơn quý khách đã mua hàng !",
      "Order information":"Thông tin đơn hàng",
      "Shipping information":"Thông tin vận chuyển",
      "Total order value":"Tổng giá trị đơn hàng",
      "Your email address":"Địa chỉ email của bạn",
      "Content":"Nội dung",
      "Order now":"Đặt ngay",
      "Please complete all information":"Vui lòng điền đầy đủ thông tin !",
      "You have been contacted successfully":"Bạn đã liên hệ thành công",
      "Order online now":"Đặt online ngay",
      "No more waiting":"Không còn phải chờ đợi nữa",

      // login, log out
      "Log in":"Đăng nhập",
      "Remember password":"Nhớ mật khẩu",
      "Please enter your email":"Vui lòng nhập email của bạn !",
      "Please enter your password":"Vui lòng nhập mật khẩu của bạn !",
      "Return":"Trờ lại",
      "Register":"Đăng ký",
      "Forgot password":"Quên mật khẩu ?",
      "register":"Đăng ký"

    }
  },
  en: {
    translation: {
      "Home page": "Home page",
      "Product":"Product",
      "News and promotions":"news and promotions",
      "Contact":"Contact",
      "Sugar Cake":"Sugar Cake",
      "Bread":"Bread",
      "Moon Cake":"Moon Cake",
      "Hot selling products":"Hot Selling Product",
      "Policy":"Policy",
      "General policies and regulations":"General policies and regulations",
      "Policy transaction, payment":"Policy transaction, payment",
      "Return policy":"Return policy",
      "Privacy Policy":"Privacy Policy",
      "Shipping policy":"Shipping policy",
      "Search":"Search",
      "Product code":"Product code",
      "Price":"Price",
      "Quantity":"Quantity",
      "Add to cart":"Add to cart",
      "Buy now": "Buy now",
      "General description":"General description",
      "Maybe you like":"Maybe you like",
      "Related Products":"Related Products",
      "See more":"See more",
      "Cart":"Cart",
      "Total money":"Total money",
      "Pay":"Pay",
      "Your cart":"Your cart",
      "Product information":"Product information",
      "Unit price":"Unit price",
      "Delete":"Delete",
      "Cart is empty":"Cart is empty",
      "Total order":"Total order",
      "Continue shopping":"Continue shopping",
      "Payment order":"Payment order",
      "Billing Information":"Billing Information",
      "First and last name":"First and last name",
      "Phone number":"Phone number",
      "Address":"Address",
      "Enter your first and last name":"Enter your first and last name !",
      "Payment methods":"Payment methods",
      "Payment on delivery":"Payment on delivery(COD)",
      "Payment":"Payment",
      "Order Success":"Order Success",
      "Order code":"Order code",
      "Thank you for your purchase":"Thank you for your purchase !",
      "Order information":"Order information",
      "Shipping information":"Shipping information",
      "Total order value":"Total order value",
      "Your email address":"Your email address",
      "Content":"Content",
      "Order now":"Order now",
      "Please complete all information":"Please complete all information !",
      "You have been contacted successfully":"You have been contacted successfully",
      "Order online now":"Order online now",
      "No more waiting":"No more waiting",
      "Log in":"Log in",
      "Remember password":"Remember password",
      "Please enter your email":"Please enter your email !",
      "Please enter your password":"Please enter your password !",
      "Return":"Return",
      "Register":"Register",
      "Forgot password":"Forgot password",
      "Register":"Register"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn", 
    fallbackLng: "vn",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;