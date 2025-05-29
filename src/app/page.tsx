"use client"
import { useState, useEffect } from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import ModernHeader from '../components/layout/ModernHeader';
import ModernProductsSection from '../components/products/ModernProductsSection';
import ModernProductFilters from '../components/products/ModernProductFilters';
import AdminLoginModal from '../components/admin/AdminLoginModal';
import AdminPanel from '../components/admin/AdminPanel';
import ModernFooter from '@/components/layout/ModernFooter';

// Update the Product type to match the backend response structure
type Product = {
  id: number;
  title: string;
  asin: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number; // Note: this field is called 'reviewCount' in the API, not 'reviews'
  category: string;
  description: string;
  imageUrl: string; // Note: this field is called 'imageUrl' in the API, not 'image'
  affiliateLink: string;
  inStock: boolean;
  updatedAt: string;
};

// Type for the API response
type ApiResponse = {
  content: Product[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

const AmazonThrift = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ['all', 'Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Toys & Games', 'Sports & Outdoors'];

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://toppickr-be.onrender.com/api/products/top-rated');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        setProducts(data.content);
        setFilteredProducts(data.content);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category and search term
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, products]);

  const handleAdminLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple admin authentication logic
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'password') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <ModernLayout>
      <ModernHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowAdminLogin={setShowAdminLogin}
      />
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <ModernProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="lg:w-3/4 bg-white rounded-2xl p-4">
          {isAdminLoggedIn && (
            <AdminPanel products={products} onLogout={() => setIsAdminLoggedIn(false)} />
          )}
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          ) : (
            <ModernProductsSection 
              products={filteredProducts} 
              title={selectedCategory === 'all' ? "Featured Products" : `${selectedCategory} Products`} 
            />
          )}
        </div>
      </div>
      
      <AdminLoginModal
        show={showAdminLogin && !isAdminLoggedIn}
        onClose={() => setShowAdminLogin(false)}
        adminCredentials={adminCredentials}
        setAdminCredentials={setAdminCredentials}
        handleAdminLogin={handleAdminLogin}
      />
      
      <ModernFooter 
        categories={categories} 
        setSelectedCategory={setSelectedCategory} 
      />
    </ModernLayout>
  );
};

export default AmazonThrift;