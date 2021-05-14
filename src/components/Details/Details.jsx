import React from 'react';
import styles from './Details.module.scss';

function Details({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.details}>{children}</div>
    </section>
  );
}

export default Details;
