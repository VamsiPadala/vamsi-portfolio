import React, { useState } from 'react';
import { ExternalLink, Github, Folder, Rocket, Users, Star, LayoutGrid, Globe, Smartphone, PenTool, Database, ChevronDown, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../mock';
import { motion, AnimatePresence } from 'framer-motion';

const projectTech = {
  'Woodworks Online Booking': ['React', 'Node.js', 'MongoDB', 'Express'],
  'Clothing E-commerce': ['React', 'Bootstrap', 'MySQL', 'Python'],
  'Deepfake Recognition': ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
  'Farm Product Booking': ['React', 'Node.js', 'MongoDB'],
  'College Complaint Management': ['React', 'Express', 'MySQL'],
};

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    { name: 'All Projects', icon: LayoutGrid },
    { name: 'Web Apps', icon: Globe },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'UI/UX Design', icon: PenTool },
    { name: 'Full Stack', icon: Database },
  ];

  const headerStats = [
    { value: '5+', label: 'Projects Completed', icon: Folder, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
    { value: '2', label: 'Featured Projects', icon: Rocket, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
    { value: '3+', label: 'Happy Clients', icon: Users, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    { value: '1', label: 'In Progress', icon: Star, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mb-12 items-center">
          
          {/* Left: Intro */}
          <div className="xl:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">My Work</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              Projects I've<br/>Built with <span className="text-primary relative inline-block">
                Passion
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed"
            >
              Here are some of the projects I've worked on. Each project taught me something new and helped me grow as a developer.
            </motion.p>
          </div>

          {/* Right: Stats */}
          <div className="xl:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
            {headerStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-center gap-4 hover:-translate-y-1 transition-transform border border-border"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.bg }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-panel rounded-[20px] overflow-hidden flex flex-col border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              {/* Image Container with Padding to simulate app window */}
              <div className="p-4 pb-0 relative">
                <div className="relative w-full aspect-[4/3] rounded-t-xl overflow-hidden bg-surface flex items-center justify-center">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Featured Badge */}
                  {index < 2 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-bold tracking-wider uppercase rounded-full">
                      Featured
                    </div>
                  )}
                  {/* Internal overlay gradient on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-5 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(projectTech[project.title] || ['React', 'Node.js']).map((tech, i) => (
                    <span key={i} className="text-[10px] font-medium px-2.5 py-1 bg-surface-hover text-muted-foreground border border-border rounded-full group-hover:border-primary/30 group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={'https://github.com/VamsiPadala'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;