import React from 'react';
import styles from './ProductShopCards.module.scss';
import ProductShopCards from './ProductShopCards/ProductShopCards';

function ProductShopLinks() {
  return (
    <section className={styles.section}>
      <ProductShopCards />
    </section>
  );
}

export default ProductShopLinks;
