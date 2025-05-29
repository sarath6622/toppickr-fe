// components/products/ModernProductFilters.tsx
import React from 'react';

// Add proper type definitions
type ModernProductFiltersProps = {
  categories?: string[];
  selectedCategory?: string;
  setSelectedCategory: (category: string) => void; // Function that accepts a string parameter
};

const ModernProductFilters: React.FC<ModernProductFiltersProps> = ({ 
  categories = ['all'], 
  selectedCategory = 'all', 
  setSelectedCategory
}) => {
  return (
    <div className="mb-8 bg-white text-gray-700 p-3 rounded-3xl w-auto">
      <h3 className="text-lg font-medium m-4">Popular Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category === 'all' ? 'All Products' : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModernProductFilters;