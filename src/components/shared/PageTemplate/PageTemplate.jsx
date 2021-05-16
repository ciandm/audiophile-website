import React from 'react';
import Nav from '../Nav/Nav';
import CartContext from '../../../context/CartContext';

function PageTemplate({ children }) {
  return (
    <CartContext>
      <Nav />
      {children}
    </CartContext>
  );
}

export default PageTemplate;
