import React from 'react';

const ResponsiveImage = ({ image, alt }) => (
  <img
    alt={alt}
    src={image.mobile}
    srcSet={`${image.mobile} 300w, ${image.tablet} 768w, ${image.desktop} 1280w`}
  />
);

export default ResponsiveImage;
