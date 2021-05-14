import React from 'react';
import Details from '../../src/components/Details/Details';
import ProductDetail from '../../src/components/ProductDetail/ProductDetail';

function ProductPage({ product }) {
  return (
    <Details>
      <ProductDetail hasAddToCart {...product} />
    </Details>
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
