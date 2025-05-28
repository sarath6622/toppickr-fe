// components/products/ModernProductsSection.jsx
import React from 'react';
import ModernProductCard from './ModernProductCard';
import { ArrowUpRight } from 'lucide-react';

const ModernProductsSection = ({ products = [], title = "Featured Products" }) => {
  // Get the first product as the featured one
  const featuredProduct = products.length > 0 ? products[0] : null;
  // Get the rest of the products
  const otherProducts = products.length > 1 ? products.slice(1) : [];
  
  return (
    <div className="mb-12 bg-white text-gray-700 p-3 rounded-3xl">
      {featuredProduct && (
        <ModernProductCard product={featuredProduct} highlighted={true} />
      )}
      
      <div className="mt-8 mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
          View all <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {otherProducts.map(product => (
          <ModernProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ModernProductsSection;