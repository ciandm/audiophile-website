import CheckoutContainer from '../../src/components/CheckoutContainer/CheckoutContainer';
import CheckoutSummary from '../../src/components/CheckoutSummary/CheckoutSummary';
import CheckoutTiles from '../../src/components/CheckoutTiles/CheckoutTiles';
import GoBackButton from '../../src/components/GoBackButton/GoBackButton';
import CheckoutForm from '../../src/components/CheckoutForm/CheckoutForm';

function Checkout() {
  return (
    <CheckoutContainer>
      <GoBackButton />
      <CheckoutTiles>
        <CheckoutForm />
        <CheckoutSummary />
      </CheckoutTiles>
    </CheckoutContainer>
  );
}

export default Checkout;
