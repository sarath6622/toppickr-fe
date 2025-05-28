// components/products/ProductFilters.jsx
import { useState } from 'react';
import { Filter, SortAsc, ChevronDown, Info } from 'lucide-react';

const ProductFilters = ({ 
  categories = ['all'], 
  selectedCategory = 'all', 
  setSelectedCategory = () => {}, 
  sortBy = 'rating', 
  setSortBy = () => {} 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSortTooltip, setShowSortTooltip] = useState(false);
  
  return (
    <div className="border text-white rounded-lg shadow-md m-4 p-4 mb-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        {/* Category filters with improved UI */}
        <div className="w-full md:w-auto">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Categories</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                  transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedCategory === category}
                aria-label={`Filter by ${category === 'all' ? 'all categories' : category}`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Sort dropdown with enhanced styling */}
        <div className="relative w-full md:w-auto">
          <div 
            className="flex items-center gap-2 mb-2"
            onMouseEnter={() => setShowSortTooltip(true)}
            onMouseLeave={() => setShowSortTooltip(false)}
          >
            <SortAsc className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Sort By</h3>
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
            
            {showSortTooltip && (
              <div className="absolute left-0 top-8 bg-gray-800 text-white text-xs py-1 px-2 rounded z-10 w-48">
                Choose how you want to order the products
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full md:w-64 bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 transition-colors"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <span className="text-gray-700">
                {sortBy === 'rating' && 'Highest Rated'}
                {sortBy === 'reviews' && 'Most Reviewed'}
                {sortBy === 'price-low' && 'Price: Low to High'}
                {sortBy === 'price-high' && 'Price: High to Low'}
              </span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <ul 
                className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 py-1 shadow-lg max-h-60 overflow-auto transition-all duration-200 animate-fadeIn"
                role="listbox"
              >
                <li 
                  onClick={() => {
                    setSortBy('rating');
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${sortBy === 'rating' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                  role="option"
                  aria-selected={sortBy === 'rating'}
                >
                  Highest Rated
                </li>
                <li 
                  onClick={() => {
                    setSortBy('reviews');
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${sortBy === 'reviews' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                  role="option"
                  aria-selected={sortBy === 'reviews'}
                >
                  Most Reviewed
                </li>
                <li 
                  onClick={() => {
                    setSortBy('price-low');
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${sortBy === 'price-low' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                  role="option"
                  aria-selected={sortBy === 'price-low'}
                >
                  Price: Low to High
                </li>
                <li 
                  onClick={() => {
                    setSortBy('price-high');
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${sortBy === 'price-high' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                  role="option"
                  aria-selected={sortBy === 'price-high'}
                >
                  Price: High to Low
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or include it in the component
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.2s ease-out forwards;
// }

export default ProductFilters;