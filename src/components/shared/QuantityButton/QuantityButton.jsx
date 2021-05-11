import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityButton.module.scss';

function QuantityButton({ restrictZero, quantity }) {
  const [value, setValue] = useState(quantity || 1);

  const handleDecrement = () => {
    if (value === 0 || (restrictZero && value === 1)) return;
    setValue(prevValue => prevValue - 1);
  };

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

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
