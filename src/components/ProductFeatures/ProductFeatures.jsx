import React from 'react';
import styles from './ProductFeatures.module.scss';

function ProductFeatures({ features, includes }) {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h3 className={styles.heading}>Features</h3>
          <div className={styles.paragraph}>
            {features.split('\n\n').map((s, index) => (
              <p key={index} className={styles.paragraph}>
                {s}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.contains}>
          <h3 className={styles.heading}>In the box</h3>
          <ul className={styles.contents}>
            {includes.map((i, index) => (
              <li key={index} className={styles.content}>
                <div className={styles.quantity}>{i.quantity}x</div>
                <div className={styles.item}>{i.item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
