import "./container.css";
import iconcake from "../../image/iconcake.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import OrderOnline from "./orderOnline/orderOnline";
import { useState } from "react";
import { Button, Drawer, Divider, Typography } from "antd";
import { increment } from "../../redux/counterproductslice";
import { useTranslation, withTranslation } from "react-i18next";
import { useGetProductQuery } from "../../APIslice/apiSlice";
import { useSearchProductMutation } from "../../APIslice/apiSlice";
import { decrement } from "../../redux/counterproductslice";
import {
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
} from "../../redux/cartSlice";

const Container = () => {
  const { t, i18n } = useTranslation();
  const { Paragraph, Text } = Typography;
  const [ellipsis, setEllipsis] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { data: product } = useGetProductQuery({});

  const myCart = useSelector((state) => state.cartSlice.items);
  const cartTotal = useSelector((state) => state.cartSlice.total);
  const cartItems = useSelector(selectCartItems);
  const itemtotal = myCart.map((e) =>
    cartItems.find((item) => item.maSanPham == e.maSanPham)
  );
  const iphone = product?.filter((item)=>item.maLoai ==1)
  const samsung = product?.filter((item)=>item.maLoai ==2)
  const oppo = product?.filter((item)=>item.maLoai ==3)
  const xiaomi = product?.filter((item)=>item.maLoai ==4)


  
  const pay = () => {
    navigate("/pay");
  };
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(increment());
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product.maSanPham));
    dispatch(increment());
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product.maSanPham));
    dispatch(decrement());
  };
  return (
    <div className="container-chonie">
      <div className="grid">
        <div className="dmspbanchay">
          <div className="page1-container-chonie">
            <div className="sanphambanchay">
              <h3>
                <span>Iphone chính hãng</span>
              </h3>
            </div>
          </div>
          <div className="dmspbanchay-list">
            {iphone?.map((product, index) => {
              const img = "https://localhost:44335/";
              return (
                <div className="dmspbanchay-item" key={index}>
                  <div className="dmspbanchay-item-img">
                    <Link to={`/detailproduct/${product.maSanPham}`}>
                      <img src={img + product?.anh} />
                    </Link>
                  </div>
                  <div className="dmspbanchay-item-title">
                    <Text
                      style={ellipsis ? { width: 150 } : undefined}
                      ellipsis={ellipsis ? true : false}
                    >
                      <Link to={`/detailproduct/${product.maSanPham}`}>
                        <div>{product?.tenSanPham}</div>
                      </Link>
                    </Text>
                  </div>
                  <div className="dmspbanchay-item-prince">
                    <div className="dmspbanchay-item-prince-gia">
                      {product.gia.toLocaleString()}
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
              );
            })}
          </div>
        </div>
        <div className="dmspbanchay">
          <div className="page1-container-chonie">
            <div className="sanphambanchay">
              <h3>
                <span>SamSung chính hãng</span>
              </h3>
            </div>
          </div>
          <div className="dmspbanchay-list">
            {samsung?.map((product, index) => {
              const img = "https://localhost:44335/";
              return (
                <div className="dmspbanchay-item" key={index}>
                  <div className="dmspbanchay-item-img">
                    <Link to={`/detailproduct/${product.maSanPham}`}>
                      <img src={img + product?.anh} />
                    </Link>
                  </div>
                  <div className="dmspbanchay-item-title">
                    <Text
                      style={ellipsis ? { width: 150 } : undefined}
                      ellipsis={ellipsis ? true : false}
                    >
                      <Link to={`/detailproduct/${product.maSanPham}`}>
                        <div>{product?.tenSanPham}</div>
                      </Link>
                    </Text>
                  </div>
                  <div className="dmspbanchay-item-prince">
                    <div className="dmspbanchay-item-prince-gia">
                      {product.gia.toLocaleString()}
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
              );
            })}
          </div>
        </div>
        <div className="dmspbanchay">
          <div className="page1-container-chonie">
            <div className="sanphambanchay">
              <h3>
                <span>oppo chính hãng</span>
              </h3>
            </div>
          </div>
          <div className="dmspbanchay-list">
            {oppo?.map((product, index) => {
              const img = "https://localhost:44335/";
              return (
                <div className="dmspbanchay-item" key={index}>
                  <div className="dmspbanchay-item-img">
                    <Link to={`/detailproduct/${product.maSanPham}`}>
                      <img src={img + product?.anh} />
                    </Link>
                  </div>
                  <div className="dmspbanchay-item-title">
                    <Text
                      style={ellipsis ? { width: 150 } : undefined}
                      ellipsis={ellipsis ? true : false}
                    >
                      <Link to={`/detailproduct/${product.maSanPham}`}>
                        <div>{product?.tenSanPham}</div>
                      </Link>
                    </Text>
                  </div>
                  <div className="dmspbanchay-item-prince">
                    <div className="dmspbanchay-item-prince-gia">
                      {product.gia.toLocaleString()}
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
              );
            })}
          </div>
        </div>
        <div className="dmspbanchay">
          <div className="page1-container-chonie">
            <div className="sanphambanchay">
              <h3>
                <span>xiaomi chính hãng</span>
              </h3>
            </div>
          </div>
          <div className="dmspbanchay-list">
            {xiaomi?.map((product, index) => {
              const img = "https://localhost:44335/";
              return (
                <div className="dmspbanchay-item" key={index}>
                  <div className="dmspbanchay-item-img">
                    <Link to={`/detailproduct/${product.maSanPham}`}>
                      <img src={img + product?.anh} />
                    </Link>
                  </div>
                  <div className="dmspbanchay-item-title">
                    <Text
                      style={ellipsis ? { width: 150 } : undefined}
                      ellipsis={ellipsis ? true : false}
                    >
                      <Link to={`/detailproduct/${product.maSanPham}`}>
                        <div>{product?.tenSanPham}</div>
                      </Link>
                    </Text>
                  </div>
                  <div className="dmspbanchay-item-prince">
                    <div className="dmspbanchay-item-prince-gia">
                      {product.gia.toLocaleString()}
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
              );
            })}
          </div>
        </div>
      </div>
      <Drawer
        title={t("Cart")}
        className="cart_sidebar"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {itemtotal.map((item, index) => {
          const img = "https://localhost:44335/";
          return (
            <>
              <div className="cart_ajaxcart" key={index}>
                <div className="ajaxcart_iner">
                  <div className="grid_item_img">
                    <Link to>
                      <img src={img + item?.anh} />
                    </Link>
                  </div>
                  <div className="grid_item_name">
                    <div>
                      <Link>{item.tenSanPham}</Link>
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
          );
        })}
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
      {/* <OrderOnline /> */}
    </div>
  );
};

export default Container;
