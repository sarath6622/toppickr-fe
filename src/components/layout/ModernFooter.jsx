// components/layout/ModernFooter.jsx
import { useState } from 'react';
import { Twitter, Instagram, Facebook, Youtube, ArrowRight, Mail } from 'lucide-react';

const ModernFooter = ({ categories = [], setSelectedCategory = () => {} }) => {
  const [email, setEmail] = useState('');
  // Filter out 'all' from categories if it exists
  const displayCategories = categories ? categories.filter(cat => cat !== 'all') : [];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 mt-20 rounded-3xl">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl mb-12 shadow-xl">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Join our newsletter</h3>
            <p className="text-gray-300 text-sm">Get the latest deals and updates delivered to your inbox.</p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 flex w-full">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-gray-700 text-white py-3 pl-10 pr-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-5 rounded-r-lg transition-colors font-medium flex items-center"
            >
              Subscribe
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </form>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="bg-yellow-400 text-gray-900 p-1 rounded mr-2">A</span>
              AmazonThrift
            </h3>
            <p className="text-gray-400 mb-6">
              Your destination for the best deals on top-rated Amazon products.
              All affiliate links help support our platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-3">
              {displayCategories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Information</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Customer Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AmazonThrift. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Amazon and the Amazon logo are trademarks of Amazon.com, Inc.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;