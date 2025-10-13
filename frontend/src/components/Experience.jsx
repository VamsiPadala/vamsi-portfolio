import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-foreground/60 mb-8 md:mb-12">My professional journey</p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-950/30 dark:to-teal-950/30">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-foreground/70 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs whitespace-nowrap">
                  {exp.type}
                </Badge>
              </div>

              <p className="text-sm text-foreground/70 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <h4 className="text-sm font-semibold mb-2 text-foreground/80">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;