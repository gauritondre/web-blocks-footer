import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

       
        <div className="flex gap-6">
          <Link
            to="/Form"
            className="px-4 py-2 rounded-md transition-all font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700">
            Form
          </Link>

          <Link
            to="/"
            className="px-4 py-2 rounded-md transition-all font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700">
            Brands
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
