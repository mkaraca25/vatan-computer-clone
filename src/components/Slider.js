import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import bestSellerProducts from "../data/bestSeller.json";

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { color } from "@mui/system";


const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-container-inner">
        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={3}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true}}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
        >
          {bestSellerProducts.map((item) => (
             <div className='slider-container'>
             <div className='slider-container-inner'>
              <SwiperSlide className="slidercard-container" key={item.id}>
                <div className="slidercard-container">
                  <img src={item?.img} alt="product" />
                  <p>{item?.title}</p>
                  <h1 className="product-price">₺ {item?.price}</h1>
                </div>
              </SwiperSlide>
         
              </div></div>
            
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
