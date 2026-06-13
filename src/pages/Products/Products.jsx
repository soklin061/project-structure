import { useProducts } from '../../hooks/useProducts';
import { apiService } from '../../services/apiService';

export default function ProductsPage() {
  const { data: products, loading, error } = useProducts(apiService.getProducts);

  if (loading)return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {products?.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-contain mb-3"
          />

          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-blue-600 font-bold mt-2">
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}