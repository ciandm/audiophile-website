import React from 'react';
import { useRouter } from 'next/router';
import styles from './ProductShopCard.module.scss';
import ResponsiveImage from '../../shared/ResponsiveImage/ResponsiveImage';
import Button from '../../shared/Button/Button';

function ProductShopCard({ category, href, image }) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <ResponsiveImage src={image.src} alt={image.alt} />
      </div>
      <h6 className={styles.title}>{category}</h6>
      <Button
        variation="ghost"
        type="link"
        href={href}
        activeLink={router.query.category === category}
      >
        Shop now
      </Button>
    </div>
  );
}

export default ProductShopCard;
