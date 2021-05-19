import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './CheckoutForm.module.scss';

function CheckoutForm({ children }) {
  const methods = useForm();
  const onSubmit = data => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        className={styles.container}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default CheckoutForm;
