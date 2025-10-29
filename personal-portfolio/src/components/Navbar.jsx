import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">My Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-800">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-gray-800">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#home" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#projects" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Projects</a>
          <a href="#experience" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Experience</a>
          <a href="#education" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Education</a>
          <a href="#skills" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Skills</a>
          <a href="#contact" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
