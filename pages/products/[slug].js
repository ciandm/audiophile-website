import React from 'react';
import Details from '../../src/components/Details/Details';
import Gallery from '../../src/components/Gallery/Gallery';
import GoBackButton from '../../src/components/GoBackButton/GoBackButton';
import ProductDetail from '../../src/components/ProductDetail/ProductDetail';
import ProductFeatures from '../../src/components/ProductFeatures/ProductFeatures';
import ProductShopLinks from '../../src/components/ProductShopLinks/ProductShopCards';
import BestAudioGear from '../../src/components/shared/BestAudioGear/BestAudioGear';
import SuggestedProducts from '../../src/components/SuggestedProducts/SuggestedProducts';
import { connectToDatabase } from '../../util/mongodb';

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
      <BestAudioGear />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const product = await db
    .collection('products')
    .findOne({ slug: params.slug });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const products = await db.collection('products').find().toArray();

  const paths = JSON.parse(JSON.stringify(products)).map(p => ({
    params: { slug: p.slug },
  }));

  return {
    fallback: false,
    paths,
  };
}

export default ProductPage;
