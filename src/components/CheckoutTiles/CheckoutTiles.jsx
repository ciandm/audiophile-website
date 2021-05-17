import React from 'react';
import styles from './CheckoutTiles.module.scss';

function CheckoutTiles({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default CheckoutTiles;
