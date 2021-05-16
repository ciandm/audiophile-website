import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import QuantityButton from '../shared/QuantityButton/QuantityButton';
import styles from './AddToCartQuantity.module.scss';
import useItemQuantity from '../../hooks/useItemQuantity';
import { useCartContext } from '../../context/CartContext';

function AddToCartQuantity({ restrictZero, itemDetails }) {
  const { handleDecrement, handleIncrement, quantity } = useItemQuantity(
    restrictZero
  );

  const { handleAddToCart } = useCartContext();

  return (
    <div className={styles.addToCart}>
      <QuantityButton
        restrictZero={restrictZero}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        quantity={quantity}
      />
      <Button
        type="button"
        variation="primary"
        onClick={() => handleAddToCart(itemDetails, quantity)}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default AddToCartQuantity;

AddToCartQuantity.propTypes = {
  restrictZero: PropTypes.bool,
};
