import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryBanner.module.scss';

function CategoryProduct({ newItem, title, image, description }) {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <img src={image.src} alt={image.alt} className={styles.image} />
      </div>
      <div className={styles.content}>
        {newItem ? <span className={styles.overline}>New product</span> : null}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button>Placeholder</button>
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
  title: PropTypes.string.isRequired,
};
