import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryBanner.module.scss';

const CategoryBanner = ({ category }) => (
  <section className={styles.banner}>
    <h1 className={styles.title}>{category || 'Category'}</h1>
  </section>
);

export default CategoryBanner;

CategoryBanner.propTypes = {
  category: PropTypes.string.isRequired,
};
