import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  Typography } from "antd";
import "./detailProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import {
  decrement,
  increment,
  selectCount,
} from "../../redux/counterproductslice";
import { addItem, selectCartItems } from "../../redux/cartSlice";
import { useGetProductQuery } from "../../APIslice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import SuggestProduct from "./suggestProduct/SuggestProduct";

function ProductDetail() {
  const { t, i18n } = useTranslation();
  const { Paragraph, Text } = Typography;
  const {maSanpham} = useParams();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const{data:productBestseller}= useGetProductQuery({
  });
  const product = productBestseller?.find((e) => e.maSanPham == maSanpham);
  console.log(product)


  // const filteredProducts = products.filter(
  //   (item) => item.category === product.category && item.id !== maSanPham
  // );
  // console.log(filteredProducts);
  const handleCount = () => {
    if (count > 0) dispatch(decrement());
  };

  const img="https://localhost:44335/";
  
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(increment());
  };

  const handleBuyNow = (product) => {
    dispatch(addItem(product));
    dispatch(increment());
    navigate('/pay')
  };

  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>{product?.tenSanPham}</h2>
          </div>
        </div>
      </div>
      <div className="detailProduct">
        <div className="grid">
          <div className="detail_list">
            <div className="detail_list_left">
              <div className="detail_img">
                <img src={img + product?.anh} />
              </div>
            </div>
            <div className="detail_list_right">
              <div className="detail_right_title">
                <h1>{product?.tenSanPham}</h1>
                <span>
                  {t("Product code")} : {maSanpham}
                </span>
                <hr />
              </div>
              <div className="detail_prince">
                <span>
                  {" "}
                  {t("Price")} : {product?.gia} đ
                </span>
              </div>
              <div className="detail_actions">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="actions1"
                >
                  {t("Add to cart")}
                </button>
                <button 
                  onClick={() => handleBuyNow(product)}
                 className="actions2">{t("Buy now")}
                </button>
              </div>
            </div>
          </div>
          <div className="content2" style={{ marginTop: "40px" }}>
            <div className="products-tab">
              <div className="tab">
                <p className="tab-text">{t("General description")}</p>
              </div>
              <div className="content-product-tab">
                <p>Hệ điều hành: {product?.heDieuHanh}</p>
                <p>Màn hình: {product?.manHinh}</p>
                <p>Ram: {product?.ram}</p>

              </div>
            </div>
          </div>
          {/* <SuggestProduct /> */}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
