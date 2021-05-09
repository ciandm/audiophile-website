import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryProduct.module.scss';
import Button from '../shared/Button/Button';

function CategoryProduct({ newItem, title, image, description, slug }) {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <img src={image.src} alt={image.alt} className={styles.image} />
      </div>
      <div className={styles.content}>
        {newItem ? <span className={styles.overline}>New product</span> : null}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Button type="link" href={`/products/${slug}`} variation="primary">
          See Product
        </Button>
      </div>
    </div>
  );
}

export default CategoryProduct;

CategoryProduct.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  newItem: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
