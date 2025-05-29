// components/products/ModernProductCard.tsx
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    category: string;
    affiliateLink: string;
    inStock: boolean;
  };
};

const ModernProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 transform hover:-translate-y-1">
      {/* Image container with consistent aspect ratio */}
      <div className="bg-white relative pt-[75%] overflow-hidden bg-gray-50">

        {/* Product image */}
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="absolute top-0 left-0 w-full h-full object-contain p-4" 
        />
      </div>
      
      <div className="p-5 flex-grow flex flex-col space-y-3">
        {/* Category badge */}
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
            {product.category}
          </span>
          
          {/* Stock status with better visual */}
          {product.inStock ? (
            <span className="text-xs font-medium bg-green-50 text-green-600 px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              In Stock
            </span>
          ) : (
            <span className="text-xs font-medium bg-red-50 text-red-600 px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
              Out of Stock
            </span>
          )}
        </div>
        
        {/* Product title */}
        <h3 className="text-lg font-semibold line-clamp-2 text-gray-800">{product.title}</h3>
        
        {/* Rating with stars and count */}
        <div className="flex items-center">
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="ml-2 text-xs text-gray-500">
            {product.reviewCount?.toLocaleString() || '0'} reviews
          </span>
        </div>
        
        {/* Pricing with better layout */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-gray-900">₹{product.price?.toLocaleString() || '0'}</span>
            {discountPercentage > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{product.originalPrice?.toLocaleString() || '0'}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Buy button with improved style */}
      <a 
        href={product.affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-3 font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
      >
        <span>View on Amazon</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default ModernProductCard;