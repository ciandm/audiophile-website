import { useState, useCallback } from 'react';

function useItemQuantity(restrictZero) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = useCallback(() => {
    if (quantity === 0 || (restrictZero && quantity === 1)) return;
    setQuantity(prevValue => prevValue - 1);
  }, [quantity, restrictZero]);

  const handleIncrement = useCallback(() => {
    setQuantity(prevValue => prevValue + 1);
  }, []);

  return {
    handleDecrement,
    handleIncrement,
    quantity,
  };
}

export default useItemQuantity;
