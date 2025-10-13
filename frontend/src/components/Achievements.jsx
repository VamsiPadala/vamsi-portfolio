import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Key <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Achievements</span>
        </h2>
        <p className="text-center text-foreground/60 mb-8 md:mb-12">Milestones I'm proud of</p>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-950/30 dark:to-teal-950/30">
                  <Trophy className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70 mb-4">{achievement.description}</p>
                  <Button
                    variant="outline"
                    onClick={() => window.open(achievement.link, '_blank')}
                    className="hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 hover:border-blue-600 transition-colors w-full sm:w-auto"
                  >
                    See LinkedIn Post
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;