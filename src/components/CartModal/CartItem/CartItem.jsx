import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../shared/ResponsiveImage/ResponsiveImage';
import styles from './CartItem.module.scss';
import QuantityButton from '../../shared/QuantityButton/QuantityButton';

const CartItem = ({ image, title, price, quantity }) => (
  <div className={styles.cartItem}>
    <div className={styles.cartImage}>
      <ResponsiveImage src={image.src} alt={image.alt} />
    </div>
    <div className={styles.cartItemDetails}>
      <p className={styles.cartItemTitle}>{title}</p>
      <span className={styles.cartItemPrice}>
        $ {new Intl.NumberFormat().format(price)}
      </span>
    </div>
    <QuantityButton quantity={quantity} />
  </div>
);

export default CartItem;

CartItem.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
