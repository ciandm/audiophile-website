import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ProductTitleWithLink.module.scss';

function ProductTitleWithLink({ title, link }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <Button type="link" variation="secondary" href={link}>
        See product
      </Button>
    </div>
  );
}

export default ProductTitleWithLink;

ProductTitleWithLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
