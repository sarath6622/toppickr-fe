// components/products/ProductCard.jsx
import { Star, ShoppingCart } from 'lucide-react';
import StarRating from '../ui/StarRating';

const ProductCard = ({ product }) => {
  // Calculate discount percentage if there's a discount
  const discountPercentage = 
    product.originalPrice > product.price 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            <StarRating rating={product.rating} />
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews.toLocaleString()} reviews)
          </span>
        </div>
        
        <div className="flex items-center mb-3">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;