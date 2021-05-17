import CheckoutContainer from '../../src/components/CheckoutContainer/CheckoutContainer';
import CheckoutSummary from '../../src/components/CheckoutSummary/CheckoutSummary';
import CheckoutTiles from '../../src/components/CheckoutTiles/CheckoutTiles';
import GoBackButton from '../../src/components/GoBackButton/GoBackButton';

function Checkout() {
  return (
    <CheckoutContainer>
      <GoBackButton />
      <CheckoutTiles>
        <div />
        <CheckoutSummary />
      </CheckoutTiles>
    </CheckoutContainer>
  );
}

export default Checkout;
