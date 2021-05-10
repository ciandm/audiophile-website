import React, { useState } from 'react';
import styles from './QuantityButton.module.scss';

function QuantityButton() {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    if (value === 0) return;
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
          value === 0 ? `${styles.disabled}` : ''
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
