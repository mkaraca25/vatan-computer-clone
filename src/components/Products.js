import React from 'react';
import OneProduct from './OneProduct';
import './Products.css';
import relatedProducts from '../data/relatedProducts.json';

const Products=()=> {
 
  return (
    <div className='products-container'>
      <div>
        <div>
          <h1>Öne Çıkan Ürünler</h1>
        </div>
        <div className='products-favorite'>
          <h5>
            {' '}
            TÜM ÖNE ÇIKANLAR <i className='fas fa-arrow-right' />
          </h5>
        </div>
      </div>
      <div className='products-list'>
        {relatedProducts.map((item) => (
          <OneProduct 
            item={item} key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
