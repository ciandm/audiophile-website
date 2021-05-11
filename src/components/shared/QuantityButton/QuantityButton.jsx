import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityButton.module.scss';
import useItemQuantity from '../../../hooks/useItemQuantity';

function QuantityButton({ restrictZero, quantity }) {
  const { handleDecrement, handleIncrement, value } = useItemQuantity(
    restrictZero
  );

  return (
    <div className={styles.button}>
      <button
        type="button"
        className={`${styles.decrement} ${
          value === 0 || (restrictZero && value === 1)
            ? `${styles.disabled}`
            : ''
        }`}
        onClick={handleDecrement}
      >
        -
      </button>
      <div className={styles.value}>{value}</div>
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
  quantity: PropTypes.number,
  restrictZero: PropTypes.bool,
};
