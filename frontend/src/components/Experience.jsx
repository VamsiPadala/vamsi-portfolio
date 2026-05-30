import React, { useState, useEffect } from 'react';
import { BadgeCheck, Rocket, Users, TrendingUp, GraduationCap, Download } from 'lucide-react';
import { portfolioData } from '../mock';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experience } = portfolioData;
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fallback data to match the visual complexity of the design if mock data is sparse
  const displayExperience = experience && experience.length > 0 ? experience : [
    {
      role: "Senior Frontend Developer",
      company: "Vertex Labs",
      type: "Remote",
      duration: "Mar 2024 - Present",
      durationLabel: "1 yr 2 mos",
      description: "Building scalable and performant web applications using React, Next.js, and TypeScript. Leading frontend architecture and mentoring developers.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"]
    },
    {
      role: "Frontend Developer",
      company: "Novatech Solutions",
      type: "Hybrid",
      duration: "Aug 2022 - Feb 2024",
      durationLabel: "1 yr 7 mos",
      description: "Developed responsive and user-friendly interfaces for SaaS products. Collaborated with design and backend teams to deliver quality solutions.",
      technologies: ["React", "Redux", "JavaScript", "Sass", "REST API"]
    }
  ];

  const tools = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', filter: 'invert(1)' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
  ];

  useEffect(() => {
    // Simulate scroll progress filling the timeline for visual effect
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate how much of the section is visible
        let progress = ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100;
        progress = Math.max(0, Math.min(100, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/12R0rj7TxAyR6w_rCy7R9ltDgzitS2bJ_/view?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Timeline */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">My Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 mb-4 tracking-tight">
                My <span className="text-primary">Experience</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                A timeline of my professional journey, the companies I've worked with, and the impact I've created.
              </p>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[8px] md:left-[160px] top-4 bottom-0 w-[2px] bg-surface-hover rounded-full overflow-hidden">
                <div 
                  className="w-full bg-primary shadow-[0_0_10px_var(--primary)] transition-all duration-300"
                  style={{ height: `${scrollProgress * 1.5}%` }}
                />
              </div>

              <div className="space-y-12">
                {displayExperience.map((exp, idx) => {
                  // Determine active state based on scroll progress simulation
                  const isActive = scrollProgress > (idx * 20);

                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group">
                      
                      {/* Left: Date & Duration (Hidden on mobile) */}
                      <div className="hidden md:block w-[120px] text-right flex-shrink-0 pt-2">
                        <div className={`text-[13px] font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                          {exp.duration.split(' - ')[0]} –<br />{exp.duration.split(' - ')[1]}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-1">
                          {exp.durationLabel || exp.type}
                        </div>
                      </div>

                      {/* Mobile Date (Visible only on mobile) */}
                      <div className="md:hidden pl-8 text-xs font-bold text-primary">
                         {exp.duration}
                      </div>

                      {/* Center Node */}
                      <div className={`absolute left-[3px] md:left-[155px] top-6 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 ${isActive ? 'bg-background border-primary shadow-[0_0_15px_rgba(139,92,246,0.6)] scale-125' : 'bg-surface-hover border-border'}`}>
                        <div className={`absolute inset-[2px] rounded-full transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-transparent'}`} />
                      </div>

                      {/* Right: Experience Card */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="w-full md:w-[calc(100%-190px)] ml-8 md:ml-0 glass-panel border border-border rounded-2xl p-6 group-hover:border-primary/40 transition-colors duration-300 relative overflow-hidden"
                      >
                        {/* Internal hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                          <div className="flex items-start gap-4">
                            {/* Company Logo Placeholder */}
                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 border border-border shadow-sm">
                              <span className="text-xl font-bold text-primary">{exp.company.charAt(0)}</span>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{exp.role}</h3>
                              <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                                {exp.company} 
                                <BadgeCheck className="w-4 h-4 text-primary" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="hidden sm:block px-3 py-1 bg-surface-hover border border-border rounded-full text-[11px] font-medium text-muted-foreground self-start whitespace-nowrap">
                            {exp.type}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                          {exp.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 relative z-10">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="text-[10px] font-medium px-2.5 py-1 bg-surface-hover text-muted-foreground border border-border rounded-full hover:border-primary/30 hover:text-foreground transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar Dashboard */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Experience Overview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel border border-border rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold text-foreground mb-4">Experience Overview</h3>
              {/* Wave Chart Graphic (SVG) */}
              <div className="w-full h-24 mb-6 relative overflow-hidden rounded-lg bg-surface">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 C20,80 40,30 60,50 C80,70 90,20 100,40 L100,100 Z" fill="rgba(139, 92, 246, 0.2)" stroke="var(--primary)" strokeWidth="2" />
                  {/* Glowing Node on path */}
                  <circle cx="80" cy="45" r="3" fill="#fff" className="shadow-[0_0_10px_var(--primary)]" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">2+</div>
                  <div className="text-[11px] text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">3</div>
                  <div className="text-[11px] text-muted-foreground">Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-[11px] text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-[11px] text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* What I've Done */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel border border-border rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold text-foreground mb-4">What I've Done</h3>
              <ul className="space-y-4">
                {[
                  { icon: Rocket, text: "Built scalable web applications" },
                  { icon: Users, text: "Collaborated with cross-functional teams" },
                  { icon: TrendingUp, text: "Improved performance and user experience" },
                  { icon: GraduationCap, text: "Mentored and guided junior developers" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-medium text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools & Technologies Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel border border-border rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold text-foreground mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-5 gap-3">
                {tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-surface/50 border border-border flex items-center justify-center hover:border-primary/50 transition-colors cursor-default">
                      <img src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain" style={{ filter: tool.filter }} />
                    </div>
                    <span className="text-[9px] text-muted-foreground text-center font-medium leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel border border-border rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px]"
            >
              <div className="relative z-10 w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-4 h-4 text-foreground" />
                  <h3 className="text-sm font-bold text-foreground">Download Resume</h3>
                </div>
                <p className="text-[11px] text-muted-foreground mb-4 leading-relaxed">
                  Download my resume and explore my professional journey.
                </p>
                <button 
                  onClick={handleResumeDownload}
                  className="flex items-center gap-1.5 px-4 py-2 bg-surface hover:bg-surface-hover border border-border rounded-lg text-xs font-semibold text-foreground transition-colors w-max"
                >
                  Download CV <Download className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {/* Decorative 3D Document SVG on the right */}
              <div className="absolute right-[-10px] bottom-[-20px] w-32 h-32 opacity-80 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {/* Back document */}
                  <rect x="25" y="20" width="50" height="60" rx="4" fill="#3b82f6" opacity="0.3" transform="rotate(10 50 50)" />
                  {/* Front document */}
                  <rect x="20" y="15" width="50" height="65" rx="4" fill="#fff" />
                  <rect x="20" y="15" width="50" height="65" rx="4" fill="url(#purpleGrad)" opacity="0.1" />
                  {/* Lines */}
                  <line x1="28" y1="28" x2="45" y2="28" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="36" x2="62" y2="36" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="44" x2="58" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="52" x2="62" y2="52" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 45 68 Q 50 65 55 68 T 65 65" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
                  
                  <defs>
                    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;