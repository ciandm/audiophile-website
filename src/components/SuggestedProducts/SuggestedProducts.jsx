import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestedProducts.module.scss';
import ResponsiveImage from '../shared/ResponsiveImage/ResponsiveImage';
import Button from '../shared/Button/Button';

function SuggestedProducts({ products }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.heading}>You may also like</h3>
        <div className={styles.products}>
          {products.map(p => (
            <div className={styles.product} key={p.name}>
              <div className={styles.productImage}>
                <div className={styles.productImageContainer}>
                  <ResponsiveImage
                    src={p.image.desktop.replace('./', '/')}
                    alt={p.name}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.productName}>{p.name}</div>
              <Button
                type="link"
                href={`/products/${p.slug}`}
                hre
                variation="primary"
              >
                See product
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuggestedProducts;

SuggestedProducts.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
