// components/layout/ModernHeader.jsx
import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';

const ModernHeader = ({ searchTerm, setSearchTerm, setShowAdminLogin }) => {
  return (
    <header className="flex items-center justify-between mb-6 p-2">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold flex items-center bg-gray-200 pr-2 rounded-xl">
          <span className="bg-gray-900 text-white p-2 rounded-lg">Top</span>
          Pickr
        </h1>
      </div>
      
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-0 py-3 px-4 pl-12 rounded-full focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-700" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
        <button 
          onClick={() => setShowAdminLogin(true)}
          className="flex items-center gap-2 bg-white rounded-full py-2 px-4 shadow-sm hover:bg-gray-100 transition-colors"
        >
          <User className="w-5 h-5 text-gray-700" />
          <span className="font-medium">Admin</span>
        </button>
      </div>
    </header>
  );
};

export default ModernHeader;