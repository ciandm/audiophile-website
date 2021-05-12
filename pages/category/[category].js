import React from 'react';
import CategoryBanner from '../../src/components/CategoryBanner/CategoryBanner';
import ProductDetail from '../../src/components/ProductDetail/ProductDetail';
import CategoryProducts from '../../src/components/CategoryProducts/CategoryProducts';
import ProductShopLinks from '../../src/components/ProductShopLinks/ProductShopCards';

function SelectedCategoryPage({ category, products }) {
  return (
    <>
      <CategoryBanner category={category} />
      <CategoryProducts>
        {products.map(p => (
          <ProductDetail
            key={p._id}
            itemId={p._id}
            imageSrc={p.image.desktop}
            alt={p.name}
            title={p.name}
            description={p.description}
            newItem={p.new}
            slug={p.slug}
            price={2999}
            hasAddToCart
          />
        ))}
      </CategoryProducts>
      <ProductShopLinks />
    </>
  );
}

export default SelectedCategoryPage;

export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/products/categories/${params.category}`,
    {
      method: 'GET',
    }
  );
  const results = await data.json();
  // place items with a new flag towards the top
  const products = results.data.sort((a, b) => b.new - a.new);

  return {
    props: {
      category: params.category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
  });
  const products = await data.json();

  function removeDuplicateCategory(acc, current) {
    if (acc.includes(current.category)) return acc;
    return acc.concat(current.category);
  }

  const paths = products.data.reduce(removeDuplicateCategory, []).map(p => ({
    params: { category: p },
  }));

  return {
    fallback: false,
    paths,
  };
}
