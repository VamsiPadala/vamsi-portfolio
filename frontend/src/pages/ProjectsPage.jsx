import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
