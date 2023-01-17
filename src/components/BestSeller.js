import React from 'react';
import OneProduct from './OneProduct';
import './BestSeller.css';
import bestSellerProducts from '../data/bestSeller.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

function BestSeller() {
  return (
    <div className='bestseller-container'>
     <div>
        <div>
          <h1>Çok satanlar</h1>
        </div>
        <div className='products-favorite'>
          <h6>
            {' '}
            TÜM ÇOK SATANLAR <i className='fas fa-arrow-right' />
          </h6>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination
      >
        {bestSellerProducts.map((product) => (
          <SwiperSlide key={product.code}>
            <OneProduct
              title={product.title}
              serialNumber={product.code}
              rating={product.rating}
              comment={product.comment}
              price={product.price}
              img={product.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSeller;
