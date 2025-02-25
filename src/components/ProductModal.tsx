import React, { useState } from 'react';
import { X, Minus, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cart';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleBuyNow = () => {
    // In a real application, this would navigate to checkout
    alert('Proceeding to checkout...');
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-500">({product.rating.count} Reviews)</span>
                <span className="ml-4 text-green-500 flex items-center gap-1">
                  <Check className="w-4 h-4" /> In Stock
                </span>
              </div>

              <div className="text-3xl font-bold mb-6">${product.price}</div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 rounded-l-full"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 rounded-r-full"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Buy Now
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart();
                  onClose();
                }}
                className="w-full border border-black text-black py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};