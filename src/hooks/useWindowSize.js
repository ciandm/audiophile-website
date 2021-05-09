import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
