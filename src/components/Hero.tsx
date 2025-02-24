import React from 'react';
import { Brain } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-[400px] overflow-hidden">
      {/* Combined Section with Split Background */}
      <div className="w-full md:w-full flex items-center justify-center p-8" style={{ background: 'linear-gradient(to right, white 50%, oklch(0.945 0.129 101.54)50%)' }}>
        <div className="text-center w-full max-w-2xl">
          <div className="mb-6">
            <Brain className="w-16 h-16 mx-auto text-yellow-500" /> {/* Yellow icon for contrast */}
          </div>
          <h1 className="text-4xl font-bold mb-2 text-black">
            Welcome to <span className="underline">My Store</span>
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-black">Your Shopping Destination</h2>
          <p className="text-gray-700">
            Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
          </p>
        </div>
      </div>
    </div>
  );
};