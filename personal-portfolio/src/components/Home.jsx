import React from 'react';
import { config } from '../config';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I’m {config.name} — {config.profession}</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {config.bio}
        </p>
        <div className="space-x-4">
          <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            View My Projects
          </a>
          <a href="/resume.pdf" download className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
            Download Resume
          </a>
          <a href="#contact" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
