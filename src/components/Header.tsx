import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { useSearchStore } from '../store/search';
import { getCategories } from '../api';

export const Header: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const items = useCartStore((state) => state.items);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-yellow-400 text-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="text-xl font-bold"
          >
            Harmoni
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="text-sm hover:text-gray-700"
            >
              Home Page
            </a>
            <div className="relative">
              <button
                className="text-sm hover:text-gray-700 flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        navigate(`/category/${category}`);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="text-sm hover:text-gray-700"
            >
              Contact Us
            </a>
            <a
              href="/more"
              onClick={(e) => {
                e.preventDefault();
                navigate('/more');
              }}
              className="text-sm hover:text-gray-700"
            >
              More Options
            </a>
          </nav>

          <div className="flex-1 max-w-sm">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 px-4 pr-10 rounded-full border-none focus:ring-2 focus:ring-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items}
                </span>
              )}
            </div>
            <button className="p-1 rounded-full">
              <img
                src="https://ui-avatars.com/api/?background=000&color=fff"
                alt="User"
                className="w-6 h-6 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};