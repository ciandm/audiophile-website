import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Button from '../shared/Button/Button';
import CartItem from '../CartItem/CartItem';
import styles from './CartModal.module.scss';
import { useCartContext } from '../../context/CartContext';
import CartRowLabel from '../shared/CartRowLabel/CartRowLabel';

function CartModal({ cartItems, cartTotal }) {
  const { handleShowCart, handleRemoveAllItems } = useCartContext();
  const router = useRouter();

  // whenever route changes, hide the modal.
  useEffect(() => {
    const handleRouterChange = () => {
      handleShowCart('hide');
    };
    router.events.on('routeChangeComplete', handleRouterChange);

    return () => router.events.off('routeChangeComplete', handleRouterChange);
    // eslint-disable-next-line
  }, []);

  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) return;
    handleShowCart('hide');
  };
  const handleKeyPress = e => {
    e.preventDefault();
    if (e.key === 'Escape' || e.key === 'Esc') {
      handleShowCart('hide');
    }
  };
  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      onKeyDown={e => handleKeyPress(e)}
      role="button"
      tabIndex={0}
    >
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
            <CartRowLabel label="Total" value={cartTotal.total} />
          </div>
          {cartItems.length > 0 ? (
            <Button variation="primary" type="link" href="/checkout">
              Checkout
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CartModal;

CartModal.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartTotal: PropTypes.shape({
    shipping: PropTypes.number,
    total: PropTypes.number,
    vat: PropTypes.number,
  }).isRequired,
};
