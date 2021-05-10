import React from 'react';
import styles from './ProductShopCards.module.scss';
import ProductShopCard from '../ProductShopCard/ProductShopCard';

const ProductShopCards = () => {
  const cardImages = {
    earphones: {
      alt: 'Image of earphones',
      src: '/assets/shared/desktop/image-earphones.png',
    },
    headphones: {
      alt: 'Image of headphones',
      src: '/assets/shared/desktop/image-headphones.png',
    },
    speakers: {
      alt: 'Image of speakers',
      src: '/assets/shared/desktop/image-speakers.png',
    },
  };

  return (
    <div className={styles.container}>
      <ProductShopCard
        category="headphones"
        href="/category/headphones"
        image={cardImages.headphones}
      />
      <ProductShopCard
        category="speakers"
        href="/category/speakers"
        image={cardImages.speakers}
      />
      <ProductShopCard
        category="earphones"
        href="/category/earphones"
        image={cardImages.earphones}
      />
    </div>
  );
};

export default ProductShopCards;
