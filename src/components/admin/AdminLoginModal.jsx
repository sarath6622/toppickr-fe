// components/admin/AdminLoginModal.jsx
import { X } from 'lucide-react';
import Modal from '../ui/Modal';

const AdminLoginModal = ({ 
  show, 
  onClose, 
  adminCredentials, 
  setAdminCredentials, 
  handleAdminLogin 
}) => (
  <Modal show={show} onClose={onClose} title="Admin Login">
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <input
          type="text"
          value={adminCredentials.username}
          onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          value={adminCredentials.password}
          onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <button
        onClick={handleAdminLogin}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </div>
    
    <p className="text-sm text-gray-600 mt-4">
      Demo credentials: admin / admin123
    </p>
  </Modal>
);

export default AdminLoginModal;