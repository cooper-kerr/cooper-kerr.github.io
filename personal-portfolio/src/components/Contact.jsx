import React from 'react';
import { config } from '../config';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Interested in collaborating or hiring me? Let’s connect!
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href={`mailto:${config.email}`} className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              Email Me
            </a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300">
              LinkedIn
            </a>
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300">
              GitHub
            </a>
            <a href="/resume.pdf" download className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
              Download Resume
            </a>
          </div>
          <form action={`https://formspree.io/f/${config.formspreeId}`} method="POST" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
