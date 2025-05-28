// components/admin/AdminPanel.jsx
import { X } from 'lucide-react';

const AdminPanel = ({ products, onLogout }) => {
  // Calculate statistics
  const totalProducts = products.length;
  const averageRating = products.length > 0 
    ? (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1) 
    : 0;
  const totalReviews = products.reduce((sum, p) => sum + p.reviews, 0).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        <button
          onClick={onLogout}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Logout
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Total Products</h3>
          <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Average Rating</h3>
          <p className="text-2xl font-bold text-green-600">{averageRating}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Total Reviews</h3>
          <p className="text-2xl font-bold text-yellow-600">{totalReviews}</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left">Product</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Price</th>
              <th className="border p-2 text-left">Rating</th>
              <th className="border p-2 text-left">Reviews</th>
              <th className="border p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border p-2">{product.title}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">${product.price.toFixed(2)}</td>
                <td className="border p-2">{product.rating}</td>
                <td className="border p-2">{product.reviews.toLocaleString()}</td>
                <td className="border p-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;