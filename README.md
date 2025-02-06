import React from 'react';

const Portfolio = () => {
  const socialLinks = [
    { name: 'Resume', icon: '📄', href: '#' },
    { name: 'LinkedIn', icon: '🔗', href: '#' },
    { name: 'GitHub', icon: '💻', href: '#' },
    { name: 'Email', icon: '✉️', href: '#' }
  ];

  const navLinks = ['ABOUT', 'EDUCATION', 'EXPERIENCE', 'PROJECTS'];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      {/* Logo Section */}
      <div className="mb-16 mt-8">
        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-8">
          <span className="text-2xl">💎</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">YOUR NAME</h1>
        <p className="text-gray-400 mb-4 max-w-2xl">
          COMPUTER SCIENCE GRADUATE STUDENT AT [YOUR UNIVERSITY] (EXPECTED GRADUATION: [DATE])
        </p>
        <p className="text-gray-400">
          CURRENTLY SEEKING NEW GRADUATE ROLES FOR 2025
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mb-16">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-700 pt-8 w-full max-w-2xl">
        <nav className="flex justify-center">
          <div className="grid grid-cols-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                className="px-6 py-2 text-sm border border-gray-700 rounded hover:bg-white hover:text-gray-900 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Portfolio;
