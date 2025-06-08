// components/layout/Footer.jsx
const Footer = ({ categories = [], setSelectedCategory = () => {} }) => {
  // Filter out 'all' from categories if it exists
  const displayCategories = categories ? categories.filter(cat => cat !== 'all') : [];
  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">AmazonThrift</h3>
            <p className="text-gray-300">
              Your destination for the best deals on top-rated Amazon products.
              All affiliate links help support our platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              {displayCategories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AmazonThrift. All rights reserved. Amazon and the Amazon logo are trademarks of Amazon.com, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;