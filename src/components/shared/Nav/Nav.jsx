import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

function Nav() {
  const windowSize = useWindowSize();
  return windowSize > 500 ? <h1>Greater</h1> : <h2>Lower</h2>;
}

export default Nav;
