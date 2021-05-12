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
    if (cartItems.length === 0) {
      setCartTotal(0);
      return;
    }
    setCartTotal(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  }, [cartItems]);

  const handleShowCart = () => {
    setCartOpen(prevState => !prevState);
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
        price: itemDetails.price,
        quantity,
        title: itemDetails.title,
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
        handleChangeQuantityInCart,
        handleShowCart,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;

export { useCartContext };
