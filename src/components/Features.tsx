import React from 'react';
import { Truck, HeadphonesIcon, RefreshCw } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-gray-300 p-2 rounded-full">
              <div className="bg-black p-4 rounded-full">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mt-4 mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-gray-300 p-2 rounded-full">
              <div className="bg-black p-4 rounded-full">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mt-4 mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-gray-300 p-2 rounded-full">
              <div className="bg-black p-4 rounded-full">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mt-4 mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};