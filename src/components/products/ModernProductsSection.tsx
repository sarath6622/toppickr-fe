// components/products/ModernProductsSection.tsx
import React from 'react';
import ModernProductCard from './ModernProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  category: string;
  imageUrl: string;
  affiliateLink: string;
  inStock: boolean;
};

type ModernProductsSectionProps = {
  products: Product[];
  title: string;
  isLoading?: boolean;
};

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full border border-gray-100 animate-pulse">
      {/* Image skeleton */}
      <div className="relative pt-[75%] bg-gray-200"></div>
      
      <div className="p-5 flex-grow flex flex-col space-y-3">
        {/* Category and stock status skeleton */}
        <div className="flex items-start justify-between">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
        
        {/* Title skeleton */}
        <div className="h-5 bg-gray-200 rounded w-full"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        
        {/* Rating skeleton */}
        <div className="flex items-center">
          <div className="h-6 w-16 bg-gray-200 rounded-lg"></div>
          <div className="ml-2 h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        
        {/* Price skeleton */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="h-7 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
      
      {/* Button skeleton */}
      <div className="h-12 bg-gray-200 w-full"></div>
    </div>
  );
};

const ModernProductsSection: React.FC<ModernProductsSectionProps> = ({ 
  products, 
  title,
  isLoading = false 
}) => {
  // Generate skeleton array
  const skeletonArray = Array(6).fill(0);
  
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6">
        {isLoading ? (
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
        ) : (
          title
        )}
      </h2>
      
      {isLoading ? (
        // Skeleton loader grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skeletonArray.map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      ) : products.length === 0 ? (
        // No products found message
        <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      ) : (
        // Actual products grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ModernProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernProductsSection;