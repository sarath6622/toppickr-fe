// components/products/ProductCard.jsx
import { Star, ShoppingCart } from 'lucide-react';
import StarRating from '../ui/StarRating';

const ProductCard = ({ product }) => {
  const discountPercentage = 
    product.originalPrice > product.price 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium">
            -{discountPercentage}%
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
          <span className="text-xs text-white font-medium px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-3 space-y-2">
        {/* Title */}
        <h3 className="font-medium text-sm text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>
        
        {/* Rating and Reviews */}
        <div className="flex items-center gap-1.5 text-xs">
          <StarRating rating={product.rating} />
          <span className="text-gray-500">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>
        
        {/* Price and Buy Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-full font-medium transition-colors duration-200 flex items-center gap-1"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;