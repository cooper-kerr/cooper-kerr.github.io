import React from 'react';

const experienceData = [
  {
    company: 'Innovate Corp',
    position: 'Software Engineer',
    dates: 'Jan 2022 - Present',
    description: [
      'Developed and maintained web applications using React and Node.js.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
      'Built Python scripts to automate data cleaning, saving 6 hours per week.',
    ],
  },
  {
    company: 'Tech Solutions',
    position: 'Junior Developer',
    dates: 'Jun 2020 - Dec 2021',
    description: [
      'Assisted in the development of a large-scale e-commerce platform.',
      'Wrote and maintained technical documentation.',
      'Fixed bugs and implemented new features in a timely manner.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-gray-300 absolute h-full top-0 left-1/2 -ml-1"></div>
          {experienceData.map((job, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 bg-gray-300 rounded-full h-4 w-4"></div>
              <div className="w-5/12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-2">{job.position}</h3>
                <p className="text-gray-600 font-semibold mb-2">{job.company} | {job.dates}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
