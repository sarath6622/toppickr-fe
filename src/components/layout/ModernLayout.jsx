// components/layout/ModernLayout.jsx
import React from 'react';
import { Search, ShoppingBag, Heart, ArrowUpRight, Star } from 'lucide-react';

const ModernLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
    <div className="w-full mx-auto bg-gray-50 rounded-3xl p-4 shadow-sm">
      {children}
    </div>
  </div>
);

export default ModernLayout;