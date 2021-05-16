import React from 'react';
import Details from '../../src/components/Details/Details';
import Gallery from '../../src/components/Gallery/Gallery';
import GoBackButton from '../../src/components/GoBackButton/GoBackButton';
import ProductDetail from '../../src/components/ProductDetail/ProductDetail';
import ProductFeatures from '../../src/components/ProductFeatures/ProductFeatures';
import ProductShopLinks from '../../src/components/ProductShopLinks/ProductShopCards';
import SuggestedProducts from '../../src/components/SuggestedProducts/SuggestedProducts';

function ProductPage({ product }) {
  return (
    <>
      <Details>
        <GoBackButton />
        <ProductDetail hasAddToCart {...product} />
        <ProductFeatures {...product} />
      </Details>
      <Gallery name={product.name} images={product.gallery} />
      <SuggestedProducts products={product.others} />
      <ProductShopLinks />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/products/${params.slug}`,
    {
      method: 'GET',
    }
  );
  const result = await data.json();
  // place items with a new flag towards the top

  return {
    props: {
      product: result.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
  });
  const products = await data.json();

  const paths = products.data.map(p => ({
    params: { slug: p.slug },
  }));

  return {
    fallback: false,
    paths,
  };
}

export default ProductPage;
