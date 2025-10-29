import React from 'react';

const educationData = [
  {
    university: 'State University',
    degree: 'B.S. in Computer Science',
    year: '2020',
    awards: 'Summa Cum Laude, Dean\'s List',
  },
  {
    university: 'Community College',
    degree: 'A.A. in General Studies',
    year: '2018',
    awards: 'Phi Theta Kappa Honor Society',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-2">{edu.university}</h3>
              <p className="text-gray-600 font-semibold mb-2">{edu.degree}</p>
              <p className="text-gray-500 mb-4">{edu.year}</p>
              <p className="text-gray-600">{edu.awards}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
