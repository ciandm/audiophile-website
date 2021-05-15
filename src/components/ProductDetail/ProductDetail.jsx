import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductDetail.module.scss';
import Button from '../shared/Button/Button';
import ResponsiveImage from '../shared/ResponsiveImage/ResponsiveImage';
import AddToCartQuantity from '../AddToCartQuantity/AddToCartQuantity';

function ProductDetail({
  hasAddToCart,
  _id,
  new: newItem,
  name,
  image,
  description,
  price,
  slug,
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
        <ResponsiveImage src={image.desktop} alt={name} objectFit="contain" />
      </div>
      <div
        className={
          hasAddToCart ? `${styles.contentAlternate}` : `${styles.content}`
        }
      >
        {newItem ? <span className={styles.overline}>New product</span> : null}
        <h2 className={styles.name}>{name}</h2>
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
            itemDetails={{ id: _id, name, price, src: image.desktop }}
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
  image: PropTypes.oneOfType([PropTypes.array]),
  itemId: PropTypes.string,
  name: PropTypes.string.isRequired,
  new: PropTypes.bool,
  slug: PropTypes.string,
};
