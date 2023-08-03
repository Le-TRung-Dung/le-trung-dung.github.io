import iconcake from "../../image/iconcake.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import xiaomi from "../../image/logo-xiaomi-nho.png";
import samsung from "../../image/logo-samsung-to.png";
import huawei from "../../image/huawei.jpg";
import apple from "../../image/logo-apple-nho.png";
import oppo from "../../image/logo-oppo-nho.png";
import "./search.css";
import { useState } from "react";
import { Button, Drawer, Divider, Typography, Select } from "antd";
import { increment } from "../../redux/counterproductslice";
import { useTranslation, withTranslation } from "react-i18next";
import { useSearchProductMutation } from "../../APIslice/apiSlice";
import { decrement } from "../../redux/counterproductslice";
import {
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
} from "../../redux/cartSlice";

const SearchProduct = () => {
  const { t, i18n } = useTranslation();
  const { Paragraph, Text } = Typography;
  const [ellipsis, setEllipsis] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkProduct, setCheckProduct] = useState(false);
  const [selectPrice, setSelectPrince] = useState();
  const [open, setOpen] = useState(false);
  const myCart = useSelector((state) => state.cartSlice.items);
  const cartTotal = useSelector((state) => state.cartSlice.total);
  const cartItems = useSelector(selectCartItems);
  const itemtotal = myCart.map((e) =>
    cartItems.find((item) => item.maSanPham == e.maSanPham)
  );
  const [searchProduct, result] = useSearchProductMutation({
    fixedCacheKey: "share-product-search",
  });
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

  const samsung1 = () => {
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      tenLoai: "SamSung",
    });
  };

  const handleSelectPrince = (value) => {
    const [value1, value2] = value.split("-");
    const numberValue1 = parseInt(value1, 10);
    const numberValue2 = parseInt(value2, 10);
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      fromPrice: numberValue1,
      toPrice: numberValue2,
    });
  };

  const handleRam = (value) => {
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      ram: value,
    });
  };
  const apple1 = () => {
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      tenLoai: "Apple (Iphone)",
    });
  };

  const xiaomi1 = () => {
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      tenLoai: "Xiaomi",
    });
  };

  const oppo1 = () => {
    searchProduct({
      pageIndex: 1,
      pageSize: 50,
      tenLoai: "OPPO",
    });
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
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>KẾT QUẢ TÌM KIẾM</h2>
          </div>
        </div>
      </div>
      <div className="grid">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "100", color: "#333333" }}>
            KẾT QUẢ TÌM KIẾM SẢN PHẨM : "{result?.data?.totalItems}" KẾT QUẢ
          </h1>
          <Divider />
        </div>
        <div className="cover_container page">
          <div className="grid">
            {/* <h2>Lựa chọn thương hiệu</h2> */}
            <div className="Brand">
              <Button onClick={xiaomi1}>
                <img src={xiaomi} />
              </Button>
              <Button onClick={apple1}>
                <img src={apple} />
              </Button>
              <Button onClick={samsung1}>
                <img src={samsung} />
              </Button>
              <Button onClick={oppo1}>
                <img src={oppo} />
              </Button>
            </div>
            <div className="option">
              <div style={{display:"flex", alignItems: "center" , marginRight:"20px" }}>
                <h3 style={{ color: "#be1e2d" }}>TÌM KIẾM PHÂN LOẠI :</h3>
              </div>
              <div style={{marginRight:"20px"}}>
                <Select
                  defaultValue="Giá"
                  style={{ width: 150 }}
                  onChange={handleSelectPrince}
                  options={[
                    { value: "0-1000000", label: "Dưới 1 triệu" },
                    {
                      value: "1000000-10000000",
                      label: "Từ 1 triệu đến 10 triệu",
                    },
                    {
                      value: "10000000-20000000",
                      label: "Từ 10 triệu đến 20 triệu",
                    },
                    {
                      value: "20000000-30000000",
                      label: "Từ 20 đến 30 triệu",
                    },
                  ]}
                />
              </div>
              <div>
                <div>
                  <Select
                    defaultValue="RAM"
                    style={{ width: 150 }}
                    onChange={handleRam}
                    options={[
                      { value: "2 GB", label: "2Gb Ram" },
                      {
                        value: "3 GB",
                        label: "3Gb Ram",
                      },
                      {
                        value: "4 GB",
                        label: "4Gb Ram",
                      },
                      {
                        value: "6 GB",
                        label: "6Gb Ram",
                      },
                      {
                        value: "8 GB",
                        label: "8Gb Ram",
                      },
                      {
                        value: "12 GB",
                        label: "12Gb Ram",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dmspbanchay">
            <div className="dmspbanchay-list">
              {result?.data?.data.map((product, index) => {
                const img = "https://localhost:44335/";
                return (
                  <div className="dmspbanchay-item" key={index}>
                    <div className="dmspbanchay-item-img">
                      <Link to={`/detailproduct/${product?.maSanPham}`}>
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
  );
};

export default SearchProduct;
