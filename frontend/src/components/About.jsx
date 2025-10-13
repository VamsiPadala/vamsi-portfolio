import React from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Palette, title: 'Beautiful UI', description: 'Creating stunning user interfaces' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimizing for speed and efficiency' }
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-center text-foreground/60 mb-8 md:mb-12">Get to know me better</p>

          <div className="space-y-6 md:space-y-8">
            <Card className="p-6 md:p-8 border-2 hover:shadow-lg transition-shadow duration-300">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {about.description}
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-950/30 dark:to-teal-950/30 mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/60 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-6 md:mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;