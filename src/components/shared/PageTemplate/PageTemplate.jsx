import React from 'react';
import Nav from '../Nav/Nav';
import CartContext from '../../../context/CartContext';
import Footer from '../Footer/Footer';

function PageTemplate({ children }) {
  return (
    <CartContext>
      <Nav />
      {children}
      <Footer />
    </CartContext>
  );
}

export default PageTemplate;
