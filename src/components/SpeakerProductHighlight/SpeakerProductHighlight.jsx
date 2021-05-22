import React from 'react';
import ProductTitleWithLink from '../shared/ProductTitleWithLink/ProductTitleWithLink';
import styles from './SpeakerProductHighlight.module.scss';

function SpeakerProductHighlight() {
  return (
    <div className={styles.container}>
      <ProductTitleWithLink title="ZX7 Speaker" link="/products/zx7-speaker" />
    </div>
  );
}

export default SpeakerProductHighlight;
