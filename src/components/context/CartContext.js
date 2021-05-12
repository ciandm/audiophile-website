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
    // setCartItems([
    //   {
    //     id: 1,
    //     image: {
    //       alt: 'XX99 MKII Headphones',
    //       src:
    //         '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    //     },
    //     price: 2999,
    //     quantity: 1,
    //     title: 'XX99 MKII',
    //   },
    // ]);
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) return;
    setCartTotal(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems]);

  const handleShowCart = () => {
    setCartOpen(prevState => !prevState);
  };

  const handleAddToCart = (itemDetails, quantity) => {
    // check if item is in cart already
    if (
      cartItems.length > 0 &&
      cartItems.find(i => i.id === itemDetails.id).length > 0
    ) {
      const indexOf = cartItems.findIndex(i => i.id === itemDetails.id);
      const copiedCart = [...cartItems];
      copiedCart[indexOf].quantity += quantity;
      setCartItems(copiedCart);
    }
    setCartItems(prevCartItems => [
      ...prevCartItems,
      {
        id: itemDetails.id,
        image: {
          alt: itemDetails.title,
          src: itemDetails.src,
        },
        price: itemDetails.price,
        quantity,
        title: itemDetails.title,
      },
    ]);
  };

  const handleRemoveAllItems = async () => {
    setCartItems([]);
  };

  return (
    <UserCartContext.Provider
      value={{
        cartItems,
        cartOpen,
        cartTotal,
        handleAddToCart,
        handleShowCart,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;

export { useCartContext };
