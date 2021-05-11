import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import QuantityButton from '../shared/QuantityButton/QuantityButton';
import styles from './AddToCartQuantity.module.scss';

function AddToCartQuantity({ restrictZero }) {
  return (
    <div className={styles.addToCart}>
      <QuantityButton restrictZero={restrictZero} />
      <Button type="button" variation="primary">
        Add to cart
      </Button>
    </div>
  );
}

export default AddToCartQuantity;

AddToCartQuantity.propTypes = {
  restrictZero: PropTypes.bool,
};
