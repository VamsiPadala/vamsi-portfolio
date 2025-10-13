import React, { useState } from 'react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const SkillCard = ({ skill }) => {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // transient class state for one-shot hover animations
  const [hoverClass, setHoverClass] = useState('');

  const handleMouseEnter = () => {
    setHovered(true);
    // only add hover-once classes when not locked
    if (!locked) {
      const name = (skill.name || '').toLowerCase();
      if (name.includes('react')) setHoverClass('spin-once');
      else if (name.includes('mysql')) setHoverClass('dolphin-swim');
      else if (name.includes('mongodb')) setHoverClass('leaf-fly');
      else if (name.includes('bootstrap')) setHoverClass('bootstrap-once');
      else if (name.includes('express')) setHoverClass('express-once');
      else setHoverClass('');
      // remove the transient class after the animation duration so it can replay on next hover
      if (hoverClass) {
        // no-op, we'll rely on timeout below
      }
      // timing aligned with CSS animation durations (1.2s max). Clear after 1400ms
      setTimeout(() => {
        setHoverClass((prev) => (prev && !locked ? '' : prev));
      }, 1400);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // for non-locked, we should remove transient class immediately on mouse leave to stop
    if (!locked) setHoverClass('');
  };

  return (
    <Card
      className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
      onClick={() => setLocked((s) => !s)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setLocked((s) => !s);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={locked}
    >
      <div
        className={`w-16 h-16 mb-4 flex items-center justify-center transition-all duration-300 ${
          hovered || locked ? 'scale-110 overflow-hidden skill-avatar rounded-lg' : 'rounded-lg skill-avatar'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skill.logo ? (
          <img
            src={skill.logo}
            alt={skill.name}
            className={`w-full h-full object-contain transition-all duration-300 ${
              (skill.name || '').toLowerCase().includes('react') ? (locked ? 'spin-forever' : hoverClass) : ''
            } ${
              (skill.name || '').toLowerCase().includes('mysql') ? (locked ? 'dolphin-fly' : hoverClass) : ''
            } ${
              (skill.name || '').toLowerCase().includes('mongodb') ? (locked ? 'leaf-fly' : hoverClass) : ''
            } ${
              (skill.name || '').toLowerCase().includes('bootstrap') ? (locked ? 'bootstrap-flip' : hoverClass) : ''
            } ${
              (skill.name || '').toLowerCase().includes('express') ? (locked ? 'express-roll' : hoverClass) : ''
            }`}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">{skill.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h4 className="font-semibold text-sm">{skill.name}</h4>
    </Card>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Frontend', items: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', items: skills.backend, color: 'from-teal-500 to-green-500' },
    { title: 'Database', items: skills.database, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Technical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">Technologies I work with</p>

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className={`h-1 w-12 bg-gradient-to-r ${category.color} mr-4 rounded-full`}></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.items.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;