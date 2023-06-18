import "./SuggestProduct.css";
import { useTranslation, withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Drawer , Divider , Typography  } from 'antd';
import { addItem   ,increaseQuantity , decreaseQuantity , selectCartItems} from '../../../redux/cartSlice';
import { useGetProductQuery } from "../../../APIslice/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  decrement,
  increment,
  selectCount,
} from "../../../redux/counterproductslice";
import { FaShoppingCart } from 'react-icons/fa';


const SuggestProduct = () => {
  const { Paragraph, Text } = Typography;
  const { maSanpham } = useParams();
  const [ellipsis, setEllipsis] = useState(true);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const count = useSelector(selectCount);
  const myCart = useSelector((state) => state.cartSlice.items);
  const cartTotal = useSelector((state) => state.cartSlice.total);
  const cartItems = useSelector(selectCartItems);
  const itemtotal = myCart.map((e) =>
    cartItems.find((item) => item.maSanPham == e.maSanPham)
  );
  
  const{data:product}= useGetProductQuery({
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  const filteredProducts = product.filter(
    (item) => item.heDieuHanh === product.heDieuHanh && item.maSanPham !== maSanpham
  );
  console.log(filteredProducts);

  const handleCount = () => {
    if (count > 0) dispatch(decrement());
  };
   
  const onClose = () => {
    setOpen(false);
  }; 
  
  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product.id));
    dispatch(increment());
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product.id));
    dispatch(decrement());
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(increment())
    setOpen(true);
  };
  
  const pay = () => {
    navigate("/pay");
  };
  return (
    <>
      <div className="suggest_product">
        <h3>{t("Maybe you like")}</h3>
        <h2>{t("Related Products")}</h2>
      </div>
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div className="dmspbanchay">
            <div className="dmspbanchay-list">
              <div className="dmspbanchay-item" key={product.id}>
                <div className="dmspbanchay-item-img">
                  <Link to={`/detailproduct/${product.id}`}>
                    <img src={product.image} />
                  </Link>
                </div>
                <div className="dmspbanchay-item-title">
                  <Text
                    style={ellipsis ? { width: 150 } : undefined}
                    ellipsis={ellipsis ? true : false}
                  >
                    <Link to={`/detailproduct/${product.id}`}>
                      <div>{product.name}</div>
                    </Link>
                  </Text>
                </div>
                <div className="dmspbanchay-item-prince">
                  <div className="dmspbanchay-item-prince-gia">
                    {product.price}
                  </div>
                  <div
                    onClick={() => handleAddToCart(product)}
                    className="dmspbanchay-item-prince-action"
                  >
                    <button type="button">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Drawer
          title={t("Cart")}
          className="cart_sidebar"
          placement="right"
          onClose={onClose}
          open={open}
        >
          {itemtotal.map((item , index) => (
            <>
              <div className="cart_ajaxcart" key={index}>
                <div className="ajaxcart_iner">
                  <div className="grid_item_img">
                    <Link to>
                      <img src={item.image} />
                    </Link>
                  </div>
                  <div className="grid_item_name">
                    <div>
                      <Link>{item.name}</Link>
                      <p>{item.size}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <Button
                          className=""
                          aria-label="Decrement value"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </Button>

                        <span
                          style={{
                            fontSize: "14px",
                            marginRight: "5px",
                            marginLeft: "5px",
                          }}
                        >
                          {item.totalquantity}
                        </span>

                        <Button
                          aria-label="Increment value"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </Button>
                      </div>
                      <div>
                        <p
                          style={{
                            marginLeft: "40px",
                            fontSize: "16px",
                            marginTop: "16px",
                          }}
                        >
                          {item.totalPrice.toLocaleString()}.đ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          ))}
          <div style={{ textAlign: "end" }}>
            <span>{t("Total money")} : </span>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              {cartTotal.toLocaleString()}.Đ
            </span>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              style={{
                backgroundColor: "orange",
                fontWeight: "500",
                color: "white",
                width: "100%",
              }}
              onClick={pay}
            >
              {t("Pay")}
            </Button>
          </div>
        </Drawer>
    </>
  );
};

export default SuggestProduct;
