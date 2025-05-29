// components/layout/ModernFooter.tsx
import { useState } from 'react';
import { Twitter, Instagram, Facebook, Youtube, ArrowRight, Mail } from 'lucide-react';

type ModernFooterProps = {
  categories?: string[];
  setSelectedCategory: (category: string) => void;
};

const ModernFooter: React.FC<ModernFooterProps> = ({ 
  categories = [], 
  setSelectedCategory 
}) => {
  const [email, setEmail] = useState('');
  const displayCategories = categories.filter(cat => cat !== 'all');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-2xl mb-12 shadow-sm border border-gray-100">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Join our newsletter</h3>
            <p className="text-gray-500 text-sm">Get the latest deals and updates delivered to your inbox.</p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 flex w-full">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-white border border-gray-200 text-gray-900 py-3 pl-10 pr-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-5 rounded-r-lg transition-colors font-medium flex items-center"
            >
              Subscribe
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </form>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gray-900 text-white p-1 rounded mr-2">Top</span>
              Pickr
            </h3>
            <p className="text-gray-500 mb-6">
              Your destination for the best deals on top-rated Amazon products.
              All affiliate links help support our platform.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'facebook', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  {social === 'twitter' && <Twitter className="w-5 h-5 text-gray-600" />}
                  {social === 'instagram' && <Instagram className="w-5 h-5 text-gray-600" />}
                  {social === 'facebook' && <Facebook className="w-5 h-5 text-gray-600" />}
                  {social === 'youtube' && <Youtube className="w-5 h-5 text-gray-600" />}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Categories</h4>
            <ul className="space-y-3">
              {displayCategories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Information</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Customer Support</h4>
            <ul className="space-y-3">
              {['FAQs', 'Shipping Info', 'Returns & Refunds', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TopPickr. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Amazon and the Amazon logo are trademarks of Amazon.com, Inc.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;