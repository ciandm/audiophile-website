import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartRowLabel.module.scss';

function CartRowLabel({ label, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <p className={styles.value}>$ {new Intl.NumberFormat().format(value)}</p>
    </div>
  );
}

export default CartRowLabel;

CartRowLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
