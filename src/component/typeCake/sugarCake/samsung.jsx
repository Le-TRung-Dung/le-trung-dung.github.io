import "./banhngot.css";
import { FaShoppingCart } from "react-icons/fa";
import { useGetProductQuery } from "../../../APIslice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "../../../redux/cartSlice";
import { increment } from "../../../redux/counterproductslice";
import { Button, Drawer, Divider, Typography } from "antd";
import { decrement } from "../../../redux/counterproductslice";
import { useTranslation, withTranslation } from "react-i18next";
import {
    increaseQuantity,
    decreaseQuantity,
    selectCartItems,
  } from "../../../redux/cartSlice";

const Samsung = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);
  const { Paragraph, Text } = Typography;
   
  const { data: product } = useGetProductQuery({});

  const cartTotal = useSelector((state) => state.cartSlice.total);

  const cartItems = useSelector(selectCartItems);

  const myCart = useSelector((state) => state.cartSlice.items);

  const itemtotal = myCart.map((e) =>
    cartItems.find((item) => item.maSanPham == e.maSanPham)
  );

  const filteredProducts = product?.filter((product) => product?.maLoai == 2);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(increment());
    setOpen(true);
  };

  const pay = () => {
    navigate("/pay");
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product.maSanPham));
    dispatch(decrement());
  };

  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product.maSanPham));
    dispatch(increment());
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>samsung</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="grid">
          <div className="wrapper">
            <div className="inner">
              <h1 className="text_center">samsung</h1>
            </div>
            <div className="dmspbanchay">
              <div className="dmspbanchay-list">
                {filteredProducts?.map((product, index) => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Samsung;
