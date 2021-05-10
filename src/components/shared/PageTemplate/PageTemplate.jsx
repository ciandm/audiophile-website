import React from 'react';
import Nav from '../Nav/Nav';

function PageTemplate({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default PageTemplate;
