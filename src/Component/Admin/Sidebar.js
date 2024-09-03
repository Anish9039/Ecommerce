// src/components/sidebarss.js
import React from 'react';
import { Link } from 'react-router-dom';

const sidebars = () => {
  return (
    <div className="sidebars bg-gray-800 text-white w-64 min-h-screen">
      <ul className="space-y-4 p-4">
        <li><Link to="/products" className="block py-2 px-4 rounded hover:bg-gray-700">Products</Link></li>
        <li><Link to="/categories" className="block py-2 px-4 rounded hover:bg-gray-700">Categories</Link></li>
        {/* Add more links here */}
      </ul>
    </div>
  );
};

export default sidebars;
