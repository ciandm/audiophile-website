import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './BestAudioGear.module.scss';

function BestAudioGear() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="A music enthusiast using headphones by Audiophile"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Bringing you the <span className={styles.highlight}>best</span>{' '}
            audio gear
          </h2>
          <p className={styles.description}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BestAudioGear;
