import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay } from 'swiper';

import banner1 from '../../image/banner.png';
import banner2 from '../../image/banner2.jpg';
import banner3 from '../../image/banner3.jpg';
import banner4 from '../../image/banner4.jpg';
import banner5 from '../../image/banner5.jpg';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import './banner.css'


const Banner = () =>{
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
            modules={[Autoplay, Pagination ,Navigation]}
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
            <SwiperSlide>
              <img src={banner5} />
            </SwiperSlide>
          </Swiper>
        </>
      );
}
export default Banner;