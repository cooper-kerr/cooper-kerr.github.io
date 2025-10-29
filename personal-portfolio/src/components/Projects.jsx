import React, { useState, useEffect } from 'react';
import { config } from '../config';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${config.githubUsername}/repos?sort=updated&direction=desc`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.language}</p>
              <div className="flex justify-between">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Code
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
