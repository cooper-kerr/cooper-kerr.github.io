import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      {/* Diamond Logo */}
      <div className="relative w-full flex justify-center mb-20">
        <div className="absolute top-0 w-[1px] h-32 bg-white"></div>
        <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-gray-900 relative top-28">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 2H3l9 18L21 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl tracking-wider font-light">SAURABH LOYA</h1>
        <p className="text-sm tracking-wider text-gray-300">
          COMPUTER SCIENCE GRADUATE STUDENT AT THE UNIVERSITY OF UTAH (EXPECTED GRADUATION: MAY 2025)
        </p>
        <p className="text-sm tracking-wider text-gray-300">
          CURRENTLY SEEKING NEW GRADUATE ROLES FOR 2025
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mb-20">
        <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm-5-4h4v-9h-4v9zm-2 0V9.5h-4V17h4z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </a>
      </div>

      {/* Navigation with Line */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-white"></div>
        <div className="flex justify-center pt-24">
          <nav className="inline-flex space-x-4 border border-white rounded-lg">
            <button className="px-8 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">ABOUT</button>
            <button className="px-8 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">EDUCATION</button>
            <button className="px-8 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">EXPERIENCE</button>
            <button className="px-8 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">PROJECTS</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
