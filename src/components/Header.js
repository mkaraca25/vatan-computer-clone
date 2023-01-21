import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import { setIsCartOpen } from '../state';
import './Header.css';
import {Box} from '@mui/material';

function Header() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart.cart)

  return (
    <header className='header-container'>
      <div className='header-left'>
      <Box onClick={()=>navigate("/")}
        sx={{'&:hover':{cursor:"pointer"}}}
        >
           
        </Box>
        <div className='header-left-categories'>
          <i className='fas fa-bars'></i>
          <p >Kategoriler</p> 
        </div><img className='img' src={logo} alt='vatan-logo'></img>
      </div>
      <input className='text-2xl text-white' required='required' placeholder='Ürün ara'/><div className='icon'><AiOutlineSearch /></div>
      <div className='header-right'>
        <div className='header-right-account'>
          <p>Üyelik</p>
          <IoPersonCircleSharp className='personIcon'/>
        </div>
        <div className='header-right-basket'>
          <p>Sepetim</p> 
          <HiOutlineShoppingCart onClick={()=>dispatch(setIsCartOpen({}))} className='cartIcon'/>
          <span>{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
