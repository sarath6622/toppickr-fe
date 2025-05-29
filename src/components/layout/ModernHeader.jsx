import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';

const ModernHeader = ({ searchTerm, setSearchTerm, setShowAdminLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header Container with gradient background */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white  p-2">
        {/* Contained width wrapper for desktop */}
        <div className="w-full mx-auto">
          {/* Header content with rounded corners for desktop */}
          <header className="md:bg-white md:rounded-2xl md:shadow-sm md:border border-gray-200/50 backdrop-blur-md">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold flex items-center bg-gray-200 pr-2 rounded-xl">
                    <span className="bg-gray-900 text-white p-2 rounded-lg">Top</span>
                    Pickr
                  </h1>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:block flex-1 max-w-xl mx-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-50/80 border border-gray-200 py-2 px-4 pl-10 rounded-full focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-3">
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => setShowAdminLogin(true)}
                    className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4 shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    <User className="w-5 h-5 text-gray-700" />
                    <span className="font-medium">Admin</span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-gray-100"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Search Bar */}
              {/* {!isMobileMenuOpen && (
                <div className="md:hidden py-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white border-0 py-2 px-4 pl-10 rounded-full focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              )} */}
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
          <div className="px-4 pt-24 pb-6 space-y-4">
            <button className="w-full flex items-center gap-3 py-2 px-4 rounded-full hover:bg-gray-100">
              <ShoppingBag className="w-5 h-5" />
              <span>Cart</span>
            </button>
            <button className="w-full flex items-center gap-3 py-2 px-4 rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>
            <button
              onClick={() => {
                setShowAdminLogin(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 py-2 px-4 rounded-full hover:bg-gray-100"
            >
              <User className="w-5 h-5" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernHeader;