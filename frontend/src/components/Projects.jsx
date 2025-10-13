import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const projectLinks = {
  'Woodworks Online Booking': 'https://github.com/VamsiPadala/karthik-wood-works',
  'Clothing E-commerce': 'https://github.com/VamsiPadala/clothing',
  'Deepfake Recognition': 'https://github.com/VamsiPadala/deep-fake-detection',
  'Farm Product Booking': 'https://www.linkedin.com/posts/padalavamsi_webdevelopment-freelancedeveloper-mernstack-activity-7383488626615177216-7C-6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEc9t2YBSoKhShMcRK7kVzMuUQ1AjUhQ47E',
  'College Complaint Management': 'https://github.com/akhilduddi/college-complaints-management-system'
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-blue-50/30 to-teal-50/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-foreground/60 mb-8 md:mb-12">Some of my recent work</p>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={projectLinks[project.title] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <Card
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="h-5 w-5" />
                    <span className="font-medium">View Details</span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </div>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;