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
import { useSearchProductMutation } from '../../APIslice/apiSlice';
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
  const [count, setCount] = useState(8);
  const [open, setOpen] = useState(false);
 
  const{data:product}= useGetProductQuery({
  });

  const myCart = useSelector((state) => state.cartSlice.items);
  const cartTotal = useSelector((state) => state.cartSlice.total);
  const cartItems = useSelector(selectCartItems);
  const itemtotal = myCart.map((e) =>
    cartItems.find((item) => item.maSanPham == e.maSanPham)
  );
  const[ searchProduct, result]= useSearchProductMutation(
    {
      fixedCacheKey: 'share-product-search',
    }
  );
  
  const displayProducts = result?.data?.totalItems  > 0 ? result?.data?.data : product;

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
  const handleShowMore = () => {
    setCount(count + 4);
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
        {result?.data?.totalItems > 0 ? (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "100" , color:"#333333" }}>KẾT QUẢ TÌM KIẾM SẢN PHẨM : "{result?.data?.totalItems}" KẾT QUẢ</h1>
            <Divider />
          </div>
        ) : (
          <div className="page1-container-chonie">
            <div className="sanphambanchay">
              <img src={iconcake} />
              <h3>
                <span>{t("Hot selling products")}</span>
              </h3>
              <img src={iconcake} />
            </div>
          </div>
        )}
        <div className="dmspbanchay">
          <div className="dmspbanchay-list">
            {displayProducts?.slice(0,count).map((product, index) => {
              const img="https://localhost:44335/";
              return(
            
              <div className="dmspbanchay-item" key={index}>
                <div className="dmspbanchay-item-img">
                  <Link to={`/detailproduct/${product.maSanPham}`}>
                    <img src= {img + product?.anh} />
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
              )
              })}
          </div>
          {count < product?.length && (
            <div className="Loadmore">
              <Button
                type="primary"
                onClick={handleShowMore}
                style={{ fontSize: "16px", backgroundColor: "orange" }}
                size="large "
              >
                {t("See more")}
              </Button>
            </div>
          )}
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
              const img="https://localhost:44335/";
              return(
          <>
            <div className="cart_ajaxcart" key={index}>
              <div className="ajaxcart_iner">
                <div className="grid_item_img">
                  <Link to>
                    <img src={img + item?.anh}/>
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
        )
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
