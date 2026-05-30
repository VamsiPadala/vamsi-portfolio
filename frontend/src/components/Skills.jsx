import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, Briefcase, Users, Trophy, Box, Star, MessageSquare, Puzzle, Users2, Clock, Repeat, Lightbulb } from 'lucide-react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  const expertise = [
    { name: 'Frontend\nDevelopment', percent: 90, color: '#8b5cf6' }, // Purple
    { name: 'UI/UX\nDesign', percent: 80, color: '#3b82f6' }, // Blue
    { name: 'Backend\nDevelopment', percent: 75, color: '#10b981' }, // Green
  ];

  const stats = [
    { icon: Code2, value: '2+', label: 'Years Experience' },
    { icon: Briefcase, value: '5+', label: 'Projects Completed' },
    { icon: Users, value: '3+', label: 'Happy Clients' },
    { icon: Trophy, value: '6', label: 'Certifications' },
  ];

  // Dynamically map frontend skills from mock data and assign realistic proficiency percentages
  const percentages = [95, 90, 85, 90, 80];
  const technicalSkills = skills.frontend.map((skill, index) => ({
    name: skill.name,
    icon: skill.logo,
    percent: percentages[index % percentages.length],
    filter: skill.name === 'Next.js' || skill.name === 'GitHub' ? 'invert(1)' : 'none'
  }));

  // Combine backend and database skills from mock data, and append common developer tools
  const tools = [
    ...skills.backend.map(s => ({ name: s.name, icon: s.logo, filter: 'none' })),
    ...skills.database.map(s => ({ name: s.name, icon: s.logo, filter: 'none' })),
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', filter: 'none' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', filter: 'none' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', filter: 'invert(1)' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', filter: 'none' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', filter: 'none' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', filter: 'none' },
    { name: 'More', isMore: true },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Puzzle },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Teamwork', icon: Users2 },
    { name: 'Time Management', icon: Clock },
    { name: 'Adaptability', icon: Repeat },
    { name: 'Creativity', icon: Lightbulb },
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/12R0rj7TxAyR6w_rCy7R9ltDgzitS2bJ_/view?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Top Left: Intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary text-xs font-bold shadow-sm">01</div>
              <span className="text-primary text-sm font-medium tracking-widest">What I do best</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              My Skills <span className="text-primary">&</span><br/>Technologies
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-10 max-w-md leading-relaxed text-sm md:text-base"
            >
              I combine creativity with code to build seamless digital experiences. Here are the technologies and tools I specialize in.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <button onClick={handleResumeDownload} className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 text-sm font-medium transition-colors glass-panel hover:bg-surface-hover">
                Download CV <Download className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>Available for hire</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
            </motion.div>
          </div>

          {/* Top Right: Expertise & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Expertise Rings */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-4 relative"
            >
              <h3 className="w-full sm:w-auto text-lg font-semibold mb-2 sm:mb-0 sm:absolute sm:top-6 sm:left-6">My Expertise</h3>
              <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-8 sm:gap-6 md:gap-10 sm:mt-8">
                {expertise.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" className="text-surface-hover" strokeWidth="6" />
                        <circle cx="32" cy="32" r="28" fill="none" stroke={exp.color} strokeWidth="6" strokeDasharray="175" strokeDashoffset={175 - (175 * exp.percent) / 100} className="transition-all duration-1000 ease-out" />
                      </svg>
                      <span className="absolute text-xs font-bold">{exp.percent}%</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-pre-line leading-tight">{exp.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 transition-transform cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface/50 flex items-center justify-center border border-border">
                    <stat.icon className="w-5 h-5 text-primary" style={{ color: idx % 2 === 0 ? '#8b5cf6' : '#10b981' }} />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Left: Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold">Technical Skills</h3>
            </div>
            
            <div className="space-y-5">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-5 h-5 flex-shrink-0">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" style={{ filter: skill.filter }} />
                  </div>
                  <div className="w-32 flex-shrink-0 text-xs md:text-sm font-medium text-foreground">{skill.name}</div>
                  <div className="flex-grow h-1.5 bg-surface-hover rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                  <div className="w-8 text-right text-xs font-bold text-muted-foreground">{skill.percent}%</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-5 border-t border-border flex justify-center">
              <button className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                View More <span className="text-primary ml-1">v</span>
              </button>
            </div>
          </motion.div>

          {/* Bottom Right: Tools & Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Box className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold">Tools & Technologies</h3>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-y-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-[14px] bg-surface/40 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-surface-hover transition-all cursor-pointer shadow-sm">
                    {tool.isMore ? (
                      <span className="text-muted-foreground font-bold text-lg leading-none mt-[-5px]">...</span>
                    ) : (
                      <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" style={{ filter: tool.filter }} />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Wide: Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 glass-panel rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-start md:justify-between gap-6 overflow-x-auto hide-scrollbar"
          >
            <div className="flex items-center gap-3 flex-shrink-0 md:border-r md:border-border md:pr-6">
              <Star className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold">Soft Skills</h3>
            </div>
            
            <div className="flex items-center gap-6 md:gap-8 min-w-max pb-2 md:pb-0 px-2">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-default">
                  <skill.icon className="w-4 h-4 text-purple-400/80 group-hover:text-purple-400 transition-colors" />
                  <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;