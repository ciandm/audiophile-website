import React from 'react';
import styles from './CheckoutForm.module.scss';
import Input from '../shared/Input/Input';

function CheckoutForm() {
  return (
    <form className={styles.form}>
      <h1 className={styles.formTitle}>Checkout</h1>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Billing details</legend>
        <div className={styles.fields}>
          <Input name="name" label="Name" placeholder="Alexei Ward" />
          <Input
            name="email"
            label="Email address"
            placeholder="alexei@mail.com"
          />
          <Input
            name="phone"
            label="Phone Number"
            placeholder="+1 202-555-0136"
          />
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Shipping info</legend>
        <div className={styles.fields}>
          <div className={styles.fieldFullwidth}>
            <Input
              name="address"
              label="Your Address"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <Input name="zip" label="ZIP Code" placeholder="10001" />
          <Input name="city" label="City" placeholder="New York" />
          <Input name="country" label="Country" placeholder="United States" />
        </div>
      </fieldset>
    </form>
  );
}

export default CheckoutForm;
