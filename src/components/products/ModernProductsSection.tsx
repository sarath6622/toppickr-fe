// components/products/ModernProductsSection.tsx
import React from 'react';
import ModernProductCard from './ModernProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number; // Changed from 'reviews'
  category: string;
  imageUrl: string;    // Changed from 'image'
  affiliateLink: string;
  inStock: boolean;
  // Other properties...
};

type ModernProductsSectionProps = {
  products: Product[];
  title: string;
};

const ModernProductsSection: React.FC<ModernProductsSectionProps> = ({ products, title }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      ) : (
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