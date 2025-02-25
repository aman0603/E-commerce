import React from 'react';
export const Hero: React.FC = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row h-[550px] overflow-hidden">
      {/* Combined Section with Split Background */}
      <div className="w-full md:w-full flex items-center justify-center p-8" style={{ background: 'linear-gradient(to right, white 50%, oklch(0.945 0.129 101.54)50%)' }}>
        <div className="text-center w-full max-w-2xl">
            <h1 className="text-4xl font-bold mb-2 text-black">
            Welcome to <span className="underline">My Store</span>
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-black">Your Shopping <br />Destination</h2>
          <p className="text-gray-700">
            Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
          </p>
        </div>
      </div>
      
    </div>
    <div className="bg-black text-white p-8  mb-12">
          <h2 className="text-2xl font-bold mb-2">Discover Your Next Favorite Item</h2>
          <p className="text-gray-300">
            Browse our exclusive collection and find the perfect product tailored just for you.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-2xl border-2 mr-2 mt-2 border-white hover:bg-gray-800 transition-colors">
            Shop
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-2xl border-2 border-white hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
    </>
    
  );
};