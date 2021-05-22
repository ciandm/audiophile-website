import React from 'react';
import ProductTitleWithLink from '../shared/ProductTitleWithLink/ProductTitleWithLink';
import styles from './EarphoneProductHighlight.module.scss';

function EarphoneProductHighlight() {
  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.description}>
        <ProductTitleWithLink
          title="YX1 Earphones"
          link="/products/yx1-earphones"
        />
      </div>
    </div>
  );
}

export default EarphoneProductHighlight;
