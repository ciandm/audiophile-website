import React from 'react';
import styles from './CategoryBanner.module.scss';

const CategoryBanner = ({ category }) => (
  <section className={styles.banner}>
    <h1 className={styles.title}>{category || 'Category'}</h1>
  </section>
);

export default CategoryBanner;
