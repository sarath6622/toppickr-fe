// components/layout/ModernLayout.jsx
import React from 'react';

const ModernLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="min-h-screen max-w-8xl mx-auto px-4 sm:px-6 lg:px-2 pt-20"> {/* Added pt-20 here */}
      <div className="bg-gray-50 rounded-3xl shadow-sm min-h-screen overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

export default ModernLayout;