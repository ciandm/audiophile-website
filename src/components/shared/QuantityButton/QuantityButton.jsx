import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityButton.module.scss';

function QuantityButton({
  restrictZero,
  handleDecrement,
  handleIncrement,
  quantity,
}) {
  return (
    <div className={styles.button}>
      <button
        type="button"
        className={`${styles.decrement} ${
          quantity === 0 || (restrictZero && quantity === 1)
            ? `${styles.disabled}`
            : ''
        }`}
        onClick={handleDecrement}
      >
        -
      </button>
      <div className={styles.quantity}>{quantity}</div>
      <button
        type="button"
        className={styles.increment}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;

QuantityButton.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  restrictZero: PropTypes.bool,
};
