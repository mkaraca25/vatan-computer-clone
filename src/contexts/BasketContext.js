import React, { useState } from 'react';

export const BasketContext = React.createContext();

export const BasketProvider = (props) => {
  const [basketItem, setBasketItem] = useState([]);
  return (
    <BasketContext.Provider value={[basketItem, setBasketItem]}>
      {props.children}
    </BasketContext.Provider>
  );
};
