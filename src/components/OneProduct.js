import React, { useState, useContext } from 'react';
import './OneProduct.css';
import { BasketContext } from '../contexts/BasketContext';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
function OneProduct({ title, serialNumber, rating, comment, price ,img}) {
  const [basketItem, setBasketItem] = useContext(BasketContext);
  const [addItem, setAddItem] = useContext(BasketContext);
  const [mouseInside, setMouseInside] = useState(false);
  const mouseEnter = () => {
    setMouseInside(true);
  };
  const mouseLeave = () => {
    setMouseInside(false);
  };
  const addToBasket = () => {
    const item = { title, serialNumber, price,img };
    const state = (currentState) => [...currentState, item];
    setAddItem(state);
    
  };
  return (
    <div
      className='product-card'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src={img} alt='product' />
      <br />
      <div className='product-rating'>
        <i className='fas fa-star' />
        <span>{rating}</span>

        <span className='product-rating-comment'>({comment} Yorum)</span>
      </div>
      <br />
      <div className='product-serino'>
        <span>{serialNumber}</span>
      </div>

      <p>{title}</p>

      <h2 className='product-price'>₺ {price}</h2>

      {!mouseInside ? (
        <>
          <span className='product-shipping'>BUGÜN KARGODA</span>
          <br />
          <br />
          <br />
        </>
      ) : (
        <div className='product-addBasket'>
          <i>
            <AiOutlineArrowLeft className='icon'/><br />
            <AiOutlineArrowRight onClick={addToBasket}/>{basketItem.length}</i>
          <button onClick={addToBasket}>SEPETE EKLE</button>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
