import React from 'react';
import CategoryBanner from '../../src/components/CategoryBanner/CategoryBanner';
import CategoryProduct from '../../src/components/CategoryProduct/CategoryProduct';
import CategoryProducts from '../../src/components/CategoryProducts/CategoryProducts';

function SelectedCategoryPage({ category, products }) {
  return (
    <>
      <CategoryBanner category={category} />
      <CategoryProducts>
        {products.map(p => (
          <CategoryProduct
            image={p.image.mobile}
            alt={p.name}
            title={p.name}
            description={p.description}
            newItem={p.new}
            slug={p.slug}
          />
        ))}
      </CategoryProducts>
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
  const products = await data.json();

  return {
    props: {
      category: params.category,
      products: products.data,
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
