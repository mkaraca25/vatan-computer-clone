import React, {  useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './OneProduct.css';
import { useDispatch } from 'react-redux'
import {addToCart} from '.././state/index'


const  OneProduct=({item})=> {
  const [mouseInside, setMouseInside] = useState(false);
  const mouseEnter = () => {
    setMouseInside(true);
  };
  const mouseLeave = () => {
    setMouseInside(false);
  };
  const dispatch=useDispatch();
  const [count, setCount] = useState(1);

  return (
    <div
      className='product-card'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src={item?.img} alt='product' />
      <br />
      <div className='product-rating'>
        <i className='fas fa-star' />
        

        <span className='product-rating-comment'>({item?.comment} Yorum)</span>
      </div>
      <br />
      

      <p>{item?.title}</p>

      <h2 className='product-price'>₺ {item?.price}</h2>
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
            <span>{count}</span><br />
            <AiOutlineArrowLeft className='icon'onClick={() => count>1?setCount(count - 1):alert('Sıfır vaya Negatif miktar olamaz.')}/><br />
            <AiOutlineArrowRight onClick={() => setCount(count + 1)}/>
            </i>
          <button className="add" onClick={()=>dispatch(addToCart({
           item: {...item, count }
           
        }))}>SEPETE EKLE</button>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
