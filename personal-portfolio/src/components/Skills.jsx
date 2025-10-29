import React from 'react';

const skillsData = {
  technical: ['Python', 'R', 'SQL', 'Git', 'Excel'],
  frameworks: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'React'],
  other: ['Communication', 'Problem-Solving', 'Teamwork'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical</h3>
            <ul className="space-y-2">
              {skillsData.technical.map((skill, index) => (
                <li key={index} className="bg-gray-200 text-gray-800 rounded-full px-4 py-2">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frameworks/Libraries</h3>
            <ul className="space-y-2">
              {skillsData.frameworks.map((skill, index) => (
                <li key={index} className="bg-gray-200 text-gray-800 rounded-full px-4 py-2">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Other</h3>
            <ul className="space-y-2">
              {skillsData.other.map((skill, index) => (
                <li key={index} className="bg-gray-200 text-gray-800 rounded-full px-4 py-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
