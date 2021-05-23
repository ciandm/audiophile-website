import React from 'react';
import CategoryBanner from '../../src/components/CategoryBanner/CategoryBanner';
import ProductDetail from '../../src/components/ProductDetail/ProductDetail';
import CategoryProducts from '../../src/components/CategoryProducts/CategoryProducts';
import ProductShopLinks from '../../src/components/ProductShopLinks/ProductShopCards';
import BestAudioGear from '../../src/components/shared/BestAudioGear/BestAudioGear';
import { connectToDatabase } from '../../util/mongodb';

function SelectedCategoryPage({ category, products }) {
  return (
    <>
      <CategoryBanner category={category} />
      <CategoryProducts>
        {products.map(p => (
          <ProductDetail key={p._id} {...p} />
        ))}
      </CategoryProducts>
      <ProductShopLinks />
      <BestAudioGear />
    </>
  );
}

export default SelectedCategoryPage;

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const result = await db
    .collection('products')
    .find({ category: params.category })
    .toArray();

  const products = JSON.parse(JSON.stringify(result)).sort(
    (a, b) => b.new - a.new
  );

  return {
    props: {
      category: params.category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const result = await db.collection('products').find().toArray();
  const products = JSON.parse(JSON.stringify(result));

  function removeDuplicateCategory(acc, current) {
    // if the array includes the category already, return
    if (acc.includes(current.category)) return acc;
    // add the category to the array
    return acc.concat(current.category);
  }

  // put all products through a reducer to only keep 1 instance of each category
  const paths = products.reduce(removeDuplicateCategory, []).map(p => ({
    params: { category: p },
  }));

  return {
    fallback: false,
    paths,
  };
}
