import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import bestSellerProducts from '../data/bestSeller.json';
import SliderCard from './SliderCard';

SwiperCore.use([Navigation, Pagination]);

function Slider() {
  console.log({ bestSellerProducts });
  return (
    <div className='slider-container'>
      <div className='slider-container-inner'>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination
        >
          {bestSellerProducts.map((product) => (
            <SwiperSlide key={product.code}>
              <SliderCard title={product.title} price={product.price}  img={product.img}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
