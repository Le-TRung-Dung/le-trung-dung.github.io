import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import banner1 from "../../image/tv-01.jpg";
import banner2 from "../../image/tai-nghe-sennheiser-01.jpg";
import banner3 from "../../image/banner-1.jpg";
import banner4 from "../../image/1200x382-zfoldzflip5-250723.jpg";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./banner.css";

const Banner = () => {

  return (
    <>
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
    </>
  );
};
export default Banner;
