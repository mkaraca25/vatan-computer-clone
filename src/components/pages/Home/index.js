import React from 'react'
import Footer from '../../Footer';
import BestSeller from '../../BestSeller';
import Header from '../../Header';
import Products from '../../Products';

import Slider from '../../Slider';

const index = () => {
  return (
    <div>
        <Header />
        <Slider/>
        <Products />
        <BestSeller />
        <Footer/>
    </div>
  )
}

export default index