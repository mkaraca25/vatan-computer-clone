import React, { useContext } from 'react';
import './Header.css';
import logo from '../assets/img/logo.jpg';
import { BasketContext } from '../contexts/BasketContext';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { HiOutlineShoppingCart } from 'react-icons/hi';
function Header() {
  const [basketItem, setBasketItem] = useContext(BasketContext);
  console.log({ basketItem });
  return (
    <header className='header-container'>
      <div className='header-left'>
        <div className='header-left-categories'>
          <i className='fas fa-bars'></i>
          <p >Kategoriler</p> 
        </div><img className='img' src={logo} alt='vatan-logo'></img>
      </div>
      <input className='text-2xl text-white'   placeholder='Ürün ara'/><AiOutlineSearch className='icon mr-80 absolute text-2xl text-white'/>
      <div className='header-right'>
        <div className='header-right-account'>
          <p>Üyelik</p>
          <IoPersonCircleSharp className='personIcon'/>
        </div>
        <div className='header-right-basket'>
          <p>Sepetim</p>
          <HiOutlineShoppingCart className='cartIcon'/>
          <span>{basketItem.length}</span>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
