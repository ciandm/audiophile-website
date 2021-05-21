import React from 'react';
import styles from './CheckoutModal.module.scss';
import Button from '../shared/Button/Button';
import { useCartContext } from '../../context/CartContext';

function CheckoutModal() {
  const { cartTotal, cartItems } = useCartContext();
  const purchasedMainItem = cartItems.sort((a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  })[0];
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <img
            src="/assets/cart/icon-check-mark.svg"
            alt="Check mark icon"
            className={styles.check}
          />
          <h3 className={styles.modalTitle}>Thank you for your order</h3>
          <p className={styles.modalDescription}>
            You will receive an email confirmation shortly.
          </p>
        </header>
        <div className={styles.purchased}>
          <div className={styles.purchasedItems}>
            <div className={styles.purchasedMain}>
              <div className={styles.mainImageContainer}>
                <img
                  src={purchasedMainItem.image.src}
                  alt=""
                  className={styles.mainImage}
                />
              </div>
              <div className={styles.mainItem}>
                <h6 className={styles.mainTitle}>{purchasedMainItem.name}</h6>
                <p className={styles.mainPrice}>
                  $ {new Intl.NumberFormat().format(purchasedMainItem.price)}
                </p>
              </div>
              <span className={styles.mainQuantity}>
                {purchasedMainItem.quantity}x
              </span>
            </div>
            <p className={styles.purchasedOthers}>
              and {cartItems.length - 1} other item(s)
            </p>
          </div>
          <div className={styles.purchasedFooter}>
            <p className={styles.footerSubtitle}>Grand total</p>
            <h5 className={styles.footerTotal}>
              ${' '}
              {new Intl.NumberFormat().format(
                cartTotal.total + cartTotal.shipping
              )}
            </h5>
          </div>
        </div>
        <footer className={styles.modalFooter}>
          <Button type="link" href="/" variation="primary">
            Back to home
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default CheckoutModal;
