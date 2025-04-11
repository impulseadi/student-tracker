import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-gradient-to-r from-blue-400 to-pink-600 shadow-md ">
      <h1 className="text-4xl font-bold text-gray-800">
        Student Job Tracker
      </h1>
      <p className="text-gray-600 text-lg font-medium">
        Student Tracker
      </p>
      
    </nav>
  );
};

export default Navbar;
