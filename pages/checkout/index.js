import CheckoutContainer from '../../src/components/CheckoutContainer/CheckoutContainer';
import CheckoutSummary from '../../src/components/CheckoutSummary/CheckoutSummary';
import CheckoutForm from '../../src/components/CheckoutForm/CheckoutForm';
import GoBackButton from '../../src/components/GoBackButton/GoBackButton';
import CheckoutDetails from '../../src/components/CheckoutDetails/CheckoutDetails';

function Checkout() {
  return (
    <CheckoutContainer>
      <GoBackButton />
      <CheckoutForm>
        <CheckoutDetails />
        <CheckoutSummary />
      </CheckoutForm>
    </CheckoutContainer>
  );
}

export default Checkout;
