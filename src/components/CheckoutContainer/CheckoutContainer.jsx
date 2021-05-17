import React from 'react';
import styles from './CheckoutContainer.module.scss';

function CheckoutContainer({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default CheckoutContainer;
