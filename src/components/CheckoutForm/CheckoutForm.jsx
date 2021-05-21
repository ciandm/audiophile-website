import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './CheckoutForm.module.scss';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

function CheckoutForm({ children }) {
  const methods = useForm();
  const [ordered, setOrdered] = useState(false);
  const onSubmit = data => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        className={styles.container}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
      {!ordered && <CheckoutModal />}
    </FormProvider>
  );
}

export default CheckoutForm;
