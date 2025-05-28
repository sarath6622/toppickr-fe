// data/mockProducts.js

export const mockProducts = [
  {
    id: 5,
    title: "LEGO Creator 3-in-1 Deep Sea Creatures",
    asin: "B08HWJKZ9N",
    price: 55.99,
    originalPrice: 75.99,
    rating: 4.90,
    reviews: 5678, // renamed from reviewCount to match your component props
    category: "Toys & Games",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=LEGO+Set", // renamed from imageUrl
    affiliateLink: "https://amazon.com/dp/B08HWJKZ9N",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.137812"
  },
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation)",
    asin: "B0BDHWDR12",
    price: 249.99,
    originalPrice: 269.99,
    rating: 4.80,
    reviews: 45234,
    category: "Electronics",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=AirPods+Pro",
    affiliateLink: "https://amazon.com/dp/B0BDHWDR12",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.137766"
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    asin: "B00FLYWNYQ",
    price: 79.95,
    originalPrice: 99.95,
    rating: 4.70,
    reviews: 89456,
    category: "Home & Kitchen",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=Instant+Pot",
    affiliateLink: "https://amazon.com/dp/B00FLYWNYQ",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.137791"
  },
  {
    id: 2,
    title: "Nike Air Max 270 Running Shoes",
    asin: "B07XJBQZPX",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.60,
    reviews: 12890,
    category: "Fashion",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=Nike+Air+Max",
    affiliateLink: "https://amazon.com/dp/B07XJBQZPX",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.137781"
  },
  {
    id: 4,
    title: "The Midnight Library - Kindle Edition",
    asin: "B08FF8Z1WD",
    price: 9.99,
    originalPrice: 29.99,
    rating: 4.50,
    reviews: 34567,
    category: "Books",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=Midnight+Library",
    affiliateLink: "https://amazon.com/dp/B08FF8Z1WD",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.1378"
  },
  {
    id: 6,
    title: "Fitbit Charge 5 Advanced Fitness Tracker",
    asin: "B09932QY5D",
    price: 149.95,
    originalPrice: 169.95,
    rating: 4.40,
    reviews: 23456,
    category: "Sports & Outdoors",
    description: "High-quality product with excellent reviews and ratings.",
    image: "https://via.placeholder.com/300x300/232F3E/FFFFFF?text=Fitbit+Charge",
    affiliateLink: "https://amazon.com/dp/B09932QY5D",
    inStock: true,
    updatedAt: "2025-05-29T00:33:11.137821"
  }
];

// Extract unique categories
export const productCategories = [
  'all',
  ...Array.from(new Set(mockProducts.map(product => product.category)))
];

// Pagination mock
export const mockPaginationData = {
  totalPages: 1,
  totalElements: 6,
  currentPage: 0,
  pageSize: 20,
  numberOfElements: 6,
  first: true,
  last: true,
  empty: false
};

// Function to simulate paginated API response
export const getMockPaginatedProducts = (page = 0, size = 20) => {
  return {
    content: mockProducts,
    pageable: {
      pageNumber: page,
      pageSize: size,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: page * size,
      paged: true,
      unpaged: false
    },
    last: true,
    totalPages: 1,
    totalElements: mockProducts.length,
    first: true,
    size: size,
    number: page,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    numberOfElements: mockProducts.length,
    empty: false
  };
};