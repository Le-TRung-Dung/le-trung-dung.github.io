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
      "Continue to buy":"Tiếp tục mua hàng"
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
      "Continue to buy":"Continue to buy"
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