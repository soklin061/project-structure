import { useProducts } from '../../hooks/useProducts';
import { apiService } from '../../services/apiService';

export default function ProductsPage() {
  // Config -> Service -> Hooks -> Managed Page State
  const { data: products, loading, error } = useProducts(apiService.getProducts);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}