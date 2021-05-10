import React from 'react';
import Button from '../shared/Button/Button';
import styles from './CartModal.module.scss';

function CartModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <div className={styles.cartHeader}>
            <h6 className={styles.cartTitle}>Cart (3)</h6>
            <button type="button" className={styles.cartRemoveAll}>
              Remove all
            </button>
          </div>
          <div className={styles.cartContents}>
            <div className={styles.cartItem}>
              <div className={styles.cartImage} />
              <div className={styles.cartItemDetails}>
                <p className={styles.cartItemTitle}>XX99 MKII</p>
                <span className={styles.cartItemPrice}>$ 2,999</span>
              </div>
            </div>
          </div>
          <div className={styles.cartFooter}>
            <span>Total</span>
            <p className={styles.cartTotal}>$ 5,396</p>
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
