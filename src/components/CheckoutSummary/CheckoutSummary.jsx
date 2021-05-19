import React from 'react';
import styles from './CheckoutSummary.module.scss';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../../context/CartContext';
import Button from '../shared/Button/Button';
import CartRowLabel from '../shared/CartRowLabel/CartRowLabel';

function CheckoutSummary() {
  const { cartItems, cartTotal } = useCartContext();
  return (
    <div className={styles.summary}>
      <h6 className={styles.title}>Summary</h6>
      <div className={styles.items}>
        {cartItems.map(i => (
          <CartItem key={i._id} {...i} />
        ))}
      </div>
      <div className={styles.costs}>
        <div className={styles.minor}>
          <CartRowLabel label="Total" value={cartTotal.total} />
          <CartRowLabel label="Shipping" value={cartTotal.shipping} />
          <CartRowLabel label="VAT (Included)" value={cartTotal.vat} />
        </div>
        <div className={styles.major}>
          <CartRowLabel
            highlightPrice
            label="Grand total"
            value={cartTotal.total + cartTotal.shipping}
          />
        </div>
      </div>
      <Button type="submit" variation="primary">
        Continue & Pay
      </Button>
    </div>
  );
}

export default CheckoutSummary;
