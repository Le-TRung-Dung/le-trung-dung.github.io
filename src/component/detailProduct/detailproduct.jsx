import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Button, Drawer, Divider, Typography } from "antd";
import "./detailProduct.css";
import { useSelector, useDispatch } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import { useState } from "react";
import {
  decrement,
  increment,
  selectCount,
} from "../../redux/counterproductslice";
import { addItem, selectCartItems } from "../../redux/cartSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation, withTranslation } from "react-i18next";
import SuggestProduct from "./suggestProduct/SuggestProduct";

function ProductDetail() {
  const { t, i18n } = useTranslation();
  const { Paragraph, Text } = Typography;
  const [ellipsis, setEllipsis] = useState(true);
  const { id } = useParams();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector((state) => state.productSlice.product);
  const product = products.find((e) => e.id == id);

  const filteredProducts = products.filter(
    (item) => item.category === product.category && item.id !== id
  );
  console.log(filteredProducts);
  const handleCount = () => {
    if (count > 0) dispatch(decrement());
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(increment());
    console.log(product);
  };

  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>{product.name}</h2>
          </div>
        </div>
      </div>
      <div className="detailProduct">
        <div className="grid">
          <div className="detail_list">
            <div className="detail_list_left">
              <div className="detail_img">
                <img src={product.image} />
              </div>
            </div>
            <div className="detail_list_right">
              <div className="detail_right_title">
                <h1>{product.name}</h1>
                <span>
                  {t("Product code")} : {id}
                </span>
                <hr />
              </div>
              <div className="detail_prince">
                <span>
                  {" "}
                  {t("Price")} : {product.price}
                </span>
              </div>
              <div className="deatil_amount">
                <span>{t("Quantity")} : </span>
                <button
                  className="decrement"
                  aria-label="Decrement value"
                  onClick={handleCount}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  className="increment"
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
              </div>
              <div className="detail_actions">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="actions1"
                >
                  {t("Add to cart")}
                </button>
                <button className="actions2">{t("Buy now")}</button>
              </div>
            </div>
          </div>
          <div className="content2" style={{ marginTop: "40px" }}>
            <div className="products-tab">
              <div className="tab">
                <p className="tab-text">{t("General description")}</p>
              </div>
              <div className="content-product-tab">
                <p>{product.describe}</p>
              </div>
            </div>
          </div>
          <SuggestProduct />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
