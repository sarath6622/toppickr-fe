// components/products/ModernProductsSection.tsx
import React from 'react';
import ModernProductCard from './ModernProductCard';
import { ArrowUpRight } from 'lucide-react';

// Import or define the Product type
type Product = {
  id: number;
  title: string;
  asin: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  image: string;
  affiliateLink: string;
  inStock: boolean;
  updatedAt: string;
};

// Define props type for the component
type ModernProductsSectionProps = {
  products: Product[];
  title?: string;
};

const ModernProductsSection: React.FC<ModernProductsSectionProps> = ({ 
  products = [], 
  title = "Featured Products" 
}) => {
  // Get the first product as the featured one
  const featuredProduct = products.length > 0 ? products[0] : null;
  // Get the rest of the products
  const otherProducts = products.length > 1 ? products.slice(1) : [];
  
  return (
    <div className="mb-12 bg-white text-gray-700 p-3 rounded-3xl shadow-sm">
      {featuredProduct && (
        <ModernProductCard product={featuredProduct} highlighted={true} />
      )}
      
      <div className="mt-8 mb-6 flex items-center justify-between px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors group">
          View all 
          <ArrowUpRight className="w-4 h-4 group-hover:transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {otherProducts.map(product => (
          <ModernProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {otherProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No additional products to display
        </div>
      )}
    </div>
  );
};

export default ModernProductsSection;