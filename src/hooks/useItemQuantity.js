import { useState, useCallback } from 'react';

function useItemQuantity(restrictZero) {
  const [value, setValue] = useState(1);

  const handleDecrement = useCallback(() => {
    if (value === 0 || (restrictZero && value === 1)) return;
    setValue(prevValue => prevValue - 1);
  }, [value, restrictZero]);

  const handleIncrement = useCallback(() => {
    setValue(prevValue => prevValue + 1);
  }, []);

  return {
    handleDecrement,
    handleIncrement,
    value,
  };
}

export default useItemQuantity;
