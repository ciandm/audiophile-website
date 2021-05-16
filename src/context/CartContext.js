import React, { useState, useEffect, useContext, createContext } from 'react';
import removeUnwantedProductWords from '../../util/removeUnwantedProductWords';

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
  const [cartItemCount, setItemCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartTotal(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
    setItemCount(cartItems.reduce((acc, current) => acc + current.quantity, 0));
  }, [cartItems]);

  const handleShowCart = () => {
    setCartOpen(prevState => !prevState);
    document.body.classList.toggle('noScroll');
  };

  const handleAddToCart = (itemDetails, quantity) => {
    // check if item is in cart already
    if (
      cartItems.length > 0 &&
      cartItems.find(i => i.id === itemDetails.id) !== undefined
    ) {
      const indexOf = cartItems.findIndex(i => i.id === itemDetails.id);
      const copiedCart = [...cartItems];
      copiedCart[indexOf].quantity += quantity;
      setCartItems(copiedCart);
      return;
    }
    setCartItems(prevCartItems => [
      ...prevCartItems,
      {
        id: itemDetails.id,
        image: {
          alt: itemDetails.title,
          src: itemDetails.src,
        },
        name: removeUnwantedProductWords(itemDetails.name),
        price: itemDetails.price,
        quantity,
      },
    ]);
  };

  const handleChangeQuantityInCart = (choice, itemId) => {
    // choice should either be decrement or increment
    let copiedCart = [...cartItems];
    const indexOf = cartItems.findIndex(i => i.id === itemId);
    if (choice === 'increment') {
      copiedCart[indexOf].quantity += 1;
    }
    if (choice === 'decrement') {
      // if it reaches 1, and they decrement, remove it altogether
      if (copiedCart[indexOf].quantity === 1) {
        copiedCart = copiedCart.filter(i => i.id !== itemId);
      } else {
        copiedCart[indexOf].quantity -= 1;
      }
    }
    setCartItems(copiedCart);
  };

  const handleRemoveAllItems = () => {
    setCartItems([]);
  };

  return (
    <UserCartContext.Provider
      value={{
        cartItemCount,
        cartItems,
        cartOpen,
        cartTotal,
        handleAddToCart,
        handleChangeQuantityInCart,
        handleRemoveAllItems,
        handleShowCart,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;

export { useCartContext };
