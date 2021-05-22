import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import QuantityButton from '../shared/QuantityButton/QuantityButton';
import styles from './AddToCartQuantity.module.scss';
import useItemQuantity from '../../hooks/useItemQuantity';
import { useCartContext } from '../../context/CartContext';

function AddToCartQuantity({ restrictZero, itemDetails }) {
  const [buttonText, setButtonText] = useState('Add to cart');
  const { handleDecrement, handleIncrement, quantity } = useItemQuantity(
    restrictZero
  );
  const { handleAddToCart } = useCartContext();

  // provide feedback to user after adding to cart
  const handleButtonClick = () => {
    if (buttonText === 'Added!') return;
    handleAddToCart(itemDetails, quantity);
    setButtonText('Added!');
    setTimeout(() => {
      setButtonText('Add to cart');
    }, 1000);
  };

  return (
    <div className={styles.addToCart}>
      <QuantityButton
        restrictZero={restrictZero}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        quantity={quantity}
      />
      <Button type="button" variation="primary" onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default AddToCartQuantity;

AddToCartQuantity.propTypes = {
  restrictZero: PropTypes.bool,
};
