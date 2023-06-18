import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useSearchProductMutation } from '../../APIslice/apiSlice';
import { useSelector } from "react-redux";

import banner1 from "../../image/bannerdienthoai3.jpg";
import banner2 from "../../image/bannerdienthoai2.jpg";
import banner3 from "../../image/bannerdienthoai3.jpg";
import banner4 from "../../image/huawei.jpg";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./banner.css";

const Banner = () => {
  const[ searchProduct, result]= useSearchProductMutation(
    {
      fixedCacheKey: 'share-product-search',
    }
  );

  return (
    <>
      {result?.data?.totalItems > 0 ? (
        <div className="bannerlogin">
          <div className="banneroverlay">
            <div className="bannertext">
              <h2>Tìm kiếm sản phẩm-chonie.cake</h2>
            </div>
          </div>
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};
export default Banner;
