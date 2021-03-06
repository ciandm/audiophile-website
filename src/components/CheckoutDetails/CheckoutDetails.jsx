import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CheckoutDetails.module.scss';
import Input from '../shared/Input/Input';
import Radio from '../shared/Radio/Radio';

function CheckoutForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  // watch input of e-money fields to display extra inputs or not
  const watchPaymentMethod = watch('paymentMethod', null);

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>Checkout</h1>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Billing details</legend>
        <div className={styles.fields}>
          <Input
            {...register('name', { required: 'Required' })}
            label="Name"
            error={errors.name}
            placeholder="Alexei Ward"
          />
          <Input
            {...register('email', {
              pattern: {
                message: 'Invalid email address',
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              },
              required: 'Required',
            })}
            label="Email address"
            error={errors.email}
            placeholder="alexei@mail.com"
          />
          <Input
            {...register('phone', { required: 'Required' })}
            label="Phone Number"
            error={errors.phone}
            placeholder="+1 202-555-0136"
          />
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Shipping info</legend>
        <div className={styles.fields}>
          <div className={styles.fieldFullwidth}>
            <Input
              {...register('address', { required: 'Required' })}
              label="Your Address"
              error={errors.address}
              placeholder="1137 Williams Avenue"
            />
          </div>
          <Input
            {...register('zip', { required: 'Required' })}
            label="ZIP Code"
            error={errors.zip}
            placeholder="10001"
          />
          <Input
            {...register('city', { required: 'Required' })}
            label="City"
            error={errors.city}
            placeholder="New York"
          />
          <Input
            {...register('country', { required: 'Required' })}
            label="Country"
            error={errors.country}
            placeholder="United States"
          />
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldTitle}>Payment Details</legend>
        <div className={styles.fieldsPayment}>
          <span className={styles.fauxLabel}>Payment Method</span>
          <div className={styles.radioGroup}>
            <Radio
              activeRadio={watchPaymentMethod === 'eMoney'}
              error={errors.paymentMethod}
              name="payment"
              label="e-Money"
              {...register('paymentMethod', { required: 'Required' })}
              value="eMoney"
            />
            <Radio
              activeRadio={watchPaymentMethod === 'cashOnDelivery'}
              error={errors.paymentMethod}
              name="payment"
              label="Cash on Delivery"
              {...register('paymentMethod', { required: 'Required' })}
              value="cashOnDelivery"
            />
          </div>
          {watchPaymentMethod === 'eMoney' ? (
            <>
              <Input
                {...register('eMoneyNumber', { required: 'Required' })}
                error={errors.eMoneyNumber}
                label="e-Money Number"
                placeholder="238521993"
              />
              <Input
                {...register('eMoneyPIN', { required: 'Required' })}
                error={errors.eMoneyPIN}
                label="e-Money PIN"
                placeholder="6891"
              />
            </>
          ) : watchPaymentMethod === 'cashOnDelivery' ? (
            <div className={styles.cashOnDelivery}>
              <img
                src="/assets/cart/icon-cash-on-delivery.svg"
                alt="Cash on delivery icon"
                className={styles.cashIcon}
              />
              <p className={styles.cashDescription}>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          ) : null}
        </div>
      </fieldset>
    </div>
  );
}

export default CheckoutForm;
