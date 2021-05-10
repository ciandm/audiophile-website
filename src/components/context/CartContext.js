import React, { useState, useEffect, useContext, createContext } from 'react';

/*
  id,
  image,
  title,
  price,
  quantity
*/
const UserCartContext = createContext({
  items: [],
  total: 0,
});

const useCartContext = () => useContext(UserCartContext);

function CartContext({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartItems({
      id: 1,
      image: {
        alt: 'XX99 MKII Headphones',
        src:
          '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
      },
      price: 2999,
      quantity: 1,
      title: 'XX99 MKII',
    });
  }, []);

  useEffect(() => {
    // setCartTotal(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems]);

  const handleShowCart = () => {
    setCartOpen(prevState => !prevState);
  };

  const handleAddToCart = async itemId => {
    // check if item is in cart already
  };

  return (
    <UserCartContext.Provider
      value={{ cartItems, cartOpen, cartTotal, handleShowCart }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;

export { useCartContext };
