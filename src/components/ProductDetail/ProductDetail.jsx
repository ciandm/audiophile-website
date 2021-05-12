import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductDetail.module.scss';
import Button from '../shared/Button/Button';
import ResponsiveImage from '../shared/ResponsiveImage/ResponsiveImage';
import AddToCartQuantity from '../AddToCartQuantity/AddToCartQuantity';

function ProductDetail({
  itemId,
  newItem,
  title,
  imageSrc,
  description,
  price,
  slug,
  hasAddToCart,
}) {
  return (
    <div
      className={
        hasAddToCart ? `${styles.productAlternate}` : `${styles.product}`
      }
    >
      <div
        className={
          hasAddToCart
            ? `${styles.imageContainerAlternate}`
            : `${styles.imageContainer}`
        }
      >
        <ResponsiveImage src={imageSrc} alt={title} objectFit="contain" />
      </div>
      <div
        className={
          hasAddToCart ? `${styles.contentAlternate}` : `${styles.content}`
        }
      >
        {newItem ? <span className={styles.overline}>New product</span> : null}
        <h2 className={styles.title}>{title}</h2>
        <p
          className={`${styles.description} ${
            price ? `${styles.tighterPadding}` : ''
          }`}
        >
          {description}
        </p>
        {price && (
          <span className={styles.price}>
            $ {new Intl.NumberFormat().format(price)}
          </span>
        )}
        {hasAddToCart ? (
          <AddToCartQuantity
            restrictZero
            itemDetails={{ id: itemId, price, src: imageSrc, title }}
          />
        ) : (
          <Button type="link" href={`/products/${slug}`} variation="primary">
            See Product
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;

ProductDetail.propTypes = {
  description: PropTypes.string.isRequired,
  hasAddToCart: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  itemId: PropTypes.string,
  newItem: PropTypes.bool,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};
