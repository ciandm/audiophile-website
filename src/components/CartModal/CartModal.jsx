import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import CartItem from '../CartItem/CartItem';
import styles from './CartModal.module.scss';
import { useCartContext } from '../../context/CartContext';
import CartRowLabel from '../shared/CartRowLabel/CartRowLabel';

function CartModal({ cartItems, cartTotal }) {
  const { handleShowCart, handleRemoveAllItems } = useCartContext();

  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) return;
    handleShowCart();
  };
  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <div className={styles.cartHeader}>
            <h6 className={styles.cartTitle}>Cart ({cartItems.length})</h6>
            <button
              type="button"
              onClick={handleRemoveAllItems}
              className={styles.cartRemoveAll}
            >
              Remove all
            </button>
          </div>
          <div className={styles.cartContents}>
            {cartItems.map(i => (
              <CartItem key={i.id} {...i} hasControls />
            ))}
          </div>
          <div className={styles.cartFooter}>
            <CartRowLabel label="Total" value={cartTotal} />
          </div>
          <Button variation="primary" type="link" href="/checkout">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;

CartModal.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartTotal: PropTypes.number.isRequired,
};
