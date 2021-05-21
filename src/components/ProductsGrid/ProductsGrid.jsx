import React from 'react';
import styles from './ProductsGrid.module.scss';

function ProductsGrid({ children }) {
  return <section className={styles.grid}>{children}</section>;
}

export default ProductsGrid;
