import React from 'react';
import Button from '../shared/Button/Button';
import styles from './HeroSection.module.scss';

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.tagline}>New product</span>
          <h1 className={styles.title}>XX99 Mark II Headphone</h1>
          <p className={styles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            type="link"
            variation="primary"
            href="/products/xx99-mark-two-headphones"
          >
            See product
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
