import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading high-quality products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Explore Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;