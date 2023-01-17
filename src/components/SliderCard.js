import React from 'react';
import './SliderCard.css';

function SliderCard({ title, price,img }) {
  return (
    <div className='slidercard-container'>
      <img  src={img} alt='product'/>
      <p>{title}</p>
      <h1 className='product-price'>₺ {price}
      </h1>
    </div>
  );
}

export default SliderCard;
