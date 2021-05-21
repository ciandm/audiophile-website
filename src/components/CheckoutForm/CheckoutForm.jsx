import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './CheckoutForm.module.scss';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import { useCartContext } from '../../context/CartContext';

function CheckoutForm({ children }) {
  const methods = useForm();
  const [ordered, setOrdered] = useState(false);
  const {
    handleRemoveAllItems,
    handleRemoveFromLocalStorage,
  } = useCartContext();
  useEffect(() => {
    setOrdered(false);

    // when form unmounts, remove all contents from the cart
    return () => handleRemoveAllItems();
    // eslint-disable-next-line
  }, []);
  const onSubmit = () => {
    setOrdered(true);
    handleRemoveFromLocalStorage();
  };
  return (
    <FormProvider {...methods}>
      <form
        className={styles.container}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
      {ordered && <CheckoutModal />}
    </FormProvider>
  );
}

export default CheckoutForm;
