import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-bold text-lg mb-6">Exclusive</h3>
            <div className="space-y-4">
              <p>Subscribe</p>
              <p className="text-sm">Get 10% off your first order</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black border border-white rounded-l-lg px-4 py-2 w-full"
                />
                <button className="bg-black border border-l-0 border-white rounded-r-lg px-4">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>1234, Park Street,</p>
              <p>DL-11111, India.</p>
              <p>Test@testmail.com</p>
              <p>+91-999-999-9999</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300">My Account</a></li>
              <li><a href="/" className="hover:text-gray-300">Login / Register</a></li>
              <li><a href="/" className="hover:text-gray-300">Cart</a></li>
              <li><a href="/" className="hover:text-gray-300">Wishlist</a></li>
              <li><a href="/" className="hover:text-gray-300">Shop</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-gray-300">Terms Of Use</a></li>
              <li><a href="/" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="/" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">© Copyright Harmoni 2025. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};