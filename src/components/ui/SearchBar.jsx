import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, className }) => (
  <div className={`relative ${className}`}>
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="bg-white text-gray-900 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
  </div>
);

export default SearchBar;