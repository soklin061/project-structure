import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const ProductCard = ({ product }) => {
  const {
    thumbnail = 'https://via.placeholder.com/150',
    title = 'No Title Available',
    description = 'No description available.',
    price = 0,
    rating = 0,
    brand = 'Generic'
  } = product || {};

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
      
      {/* Product Image Container */}
      <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="max-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
        
        {rating > 0 && (
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
            ⭐ {rating.toFixed(1)}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col gap-1.5">
        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
          {brand}
        </span>
        <h3 className="text-sm font-semibold text-slate-800 truncate" title={title}>
          {title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed" title={description}>
          {description}
        </p>
      </div>

      {/* Footer / Action Row */}
      <div className="p-4 pt-0 flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-slate-900">
          {formatCurrency(price)}
        </span>
        <button 
          onClick={() => alert(`Added ${title} to cart!`)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm active:scale-95"
        >
          Add
        </button>
      </div>

    </div>
  );
};

export default ProductCard;