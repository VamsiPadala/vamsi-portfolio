import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Certificates & <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Awards</span>
        </h2>
        <p className="text-center text-foreground/60 mb-8 md:mb-12">My professional certifications</p>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg text-center mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      Issued by {cert.issuer}
                    </p>
                    {cert.link && (
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        View Certificate
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;