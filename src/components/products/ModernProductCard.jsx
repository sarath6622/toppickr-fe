// components/products/ModernProductCard.jsx
import React from 'react';
import { Heart, ArrowUpRight, Star } from 'lucide-react';

const ModernProductCard = ({ product, highlighted = false }) => {
  const discountPercentage = 
    product.originalPrice > product.price 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;
      
  if (highlighted) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <div className="mb-2 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
              {product.category}
            </div>
            <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-6">
              Experience premium quality with incredible savings. 
              {discountPercentage > 0 && ` Save ${discountPercentage}% today.`}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-medium transition-colors"
              >
                View Product
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-4 relative">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto object-contain h-72 z-10 relative"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-md"></div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm group relative transition-all hover:shadow-md">
      <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-gray-700" />
      </button>
      
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-1">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600 font-medium">
              {product.rating} <span className="text-gray-400">({product.reviews.toLocaleString()})</span>
            </span>
          </div>
          
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full hover:bg-yellow-400 transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModernProductCard;