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
    reviewCount: number; // This was likely 'reviews' in your mock data
    imageUrl: string;    // This was likely 'image' in your mock data
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Product image */}
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-48 object-cover" 
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        {/* Product title */}
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{product.title}</h3>
        
        {/* Category */}
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{product.rating}</span>
          <span className="ml-1 text-xs text-gray-500">
            ({product.reviewCount?.toLocaleString() || '0'} reviews)
          </span>
        </div>
        
        {/* Pricing */}
        <div className="mt-auto">
          <div className="flex items-baseline">
            <span className="text-xl font-bold">${product.price?.toLocaleString() || '0'}</span>
            {discountPercentage > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice?.toLocaleString() || '0'}
              </span>
            )}
          </div>
          
          {/* Stock status */}
          <div className="mt-2">
            {product.inStock ? (
              <span className="text-green-600 text-sm">In Stock</span>
            ) : (
              <span className="text-red-600 text-sm">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Buy button */}
      <a 
        href={product.affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-2 font-medium transition-colors duration-300"
      >
        View on Amazon
      </a>
    </div>
  );
};

export default ModernProductCard;