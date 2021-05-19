import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartRowLabel.module.scss';

function CartRowLabel({ label, value, highlightPrice }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <p
        className={`${styles.value} ${
          highlightPrice ? `${styles.highlighted}` : ''
        }`}
      >
        $ {new Intl.NumberFormat().format(value)}
      </p>
    </div>
  );
}

export default CartRowLabel;

CartRowLabel.propTypes = {
  highlightPrice: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
