import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <Home />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
