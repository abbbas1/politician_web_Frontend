import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
 return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-4">The page you are looking for might be in another universe.</p>
        <NavLink to="/" className="block text-blue-600 text-2xl hover:text-blue-800 mt-8">
          BACK TO HOME
        </NavLink>
      </div>
    </div>
 );
};

export default NotFound;