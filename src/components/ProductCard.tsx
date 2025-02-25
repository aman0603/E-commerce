import React from 'react';
import { Product } from '../types';
import { useCartStore } from '../store/cart';
interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div
      className="bg-white rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative pb-[100%] bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate mb-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500">({product.rating.count})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <button 
          onClick={() => {
            addToCart();            
          }}className="bg-black text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};