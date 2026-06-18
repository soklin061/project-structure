import { useProducts } from '../../hooks/useProducts';
import { apiService } from '../../services/apiService';
import { usePageTitle } from '../../hooks/usePageTitle';
import { useTranslation } from '../../hooks/useTranslation';
import { formatCurrency } from '../../utils/formatCurrency'; // 1. Import your existing utility

export default function ProductsPage() {
  const { t } = useTranslation();
  
  usePageTitle(t('products.title'));

  const { data: products, loading, error } = useProducts(apiService.getProducts);

  // 2. High-end Skeleton Loader instead of simple text
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-slate-100 rounded-2xl bg-white p-4 animate-pulse">
            <div className="w-full h-44 bg-slate-100 rounded-xl mb-4" />
            <div className="h-4 bg-slate-100 rounded w-3/4 mb-2" />
            <div className="h-4 bg-slate-100 rounded w-1/2 mb-4" />
            <div className="h-6 bg-slate-100 rounded w-1/4" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-50/50 rounded-2xl border border-red-100 max-w-xl mx-auto my-10 p-6">
        <p className="text-red-600 font-semibold text-lg">{t('products.error')}</p>
        <p className="text-red-400 text-sm mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products?.map((product) => {
        return (
          <div
            key={product.id}
            className="border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-200 ease-in-out flex flex-col justify-between group"
          >
            <div>
              <div className="w-full h-44 bg-slate-50 dark:bg-slate-950/40 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2 relative">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>

              {/* Added responsive tracking and slightly bigger lead height for Khmer rendering */}
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-2 leading-relaxed tracking-wide">
                {product.title}
              </h3>
            </div>

            {/* 3. Uses currency utility formatting directly instead of manual concatenation */}
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-base mt-4 flex items-center">
              {formatCurrency ? formatCurrency(product.price) : `${t('products.currency_symbol')}${product.price}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}