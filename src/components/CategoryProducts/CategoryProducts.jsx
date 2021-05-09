import React from 'react';
import styles from './CategoryProducts.module.scss';

const CategoryProducts = ({ children }) => (
  <section className={styles.section}>
    <div className={styles.products}>{children}</div>
  </section>
);

export default CategoryProducts;
