import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './CheckoutDetails.module.scss';
import Input from '../shared/Input/Input';
import Radio from '../shared/Radio/Radio';

function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>Checkout</h1>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Billing details</legend>
        <div className={styles.fields}>
          <Input
            {...register('Name', { required: true })}
            label="Name"
            placeholder="Alexei Ward"
          />
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
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Payment Details</legend>
        <div className={styles.fieldsPayment}>
          <span className={styles.fauxLabel}>Payment Method</span>
          <div className={styles.radioGroup}>
            <Radio name="payment" label="e-Money" />
            <Radio name="payment" label="Cash on Delivery" />
          </div>
          <Input
            name="e-money-number"
            label="e-Money Number"
            placeholder="238521993"
          />
          <Input name="e-money-pin" label="e-Money PIN" placeholder="6891" />
        </div>
      </fieldset>
    </div>
  );
}

export default CheckoutForm;
