import React from 'react';
import styles from './HeroProduct.module.scss';
import Button from '../shared/Button/Button';
import ResponsiveImage from '../shared/ResponsiveImage/ResponsiveImage';

function HeroProduct() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <ResponsiveImage
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="ZX9 Speaker"
          objectFit="contain"
        />
      </div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>ZX9 Speaker</h2>
        <p className={styles.heroDescription}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button type="link" variation="tertiary" href="/products/zx9-speaker">
          See product
        </Button>
      </div>
    </div>
  );
}

export default HeroProduct;
