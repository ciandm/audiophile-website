import React from 'react';
import Image from 'next/image';

const ResponsiveImage = ({ src, alt, objectFit }) => (
  <Image alt={alt} src={src} layout="fill" objectFit={objectFit || 'cover'} />
);

export default ResponsiveImage;
