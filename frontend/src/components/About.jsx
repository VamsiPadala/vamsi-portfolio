import React from 'react';
import { 
  Smile, Briefcase, Users, Award, Coffee, Star, 
  Code, Rocket, Globe, PenTool, Database, Puzzle,
  Plane, Camera, Book, Gamepad, Music, ArrowUpRight, Download, ChevronRight
} from 'lucide-react';
import { portfolioData } from '../mock';
import { motion } from 'framer-motion';

const About = () => {
  const { about, personal, experience, skills } = portfolioData;

  // Aggregate tech stack for the right column
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.database].slice(0, 10);

  const timelineData = [
    {
      year: '2023 – 2026',
      title: 'B.Tech in Computer Science',
      institution: 'Acharya Nagarjuna University',
      highlight: 'Pursuing',
    },
    {
      year: '2020 – 2023',
      title: 'Diploma',
      institution: 'KITS Divili',
      highlight: 'Core',
    },
    {
      year: '2019 – 2020',
      title: '10th Grade (SSC)',
      institution: 'ZPHS Sankhavaram',
      highlight: 'Base',
    }
  ];

  const stats = [
    { value: '2+', label: 'Years of Experience', icon: Smile },
    { value: '5+', label: 'Projects Completed', icon: Briefcase },
    { value: '3+', label: 'Happy Clients', icon: Users },
    { value: '6', label: 'Certifications', icon: Award },
    { value: '1000+', label: 'Hours of Coding', icon: Coffee },
    { value: '100%', label: 'Client Rating', icon: Star },
  ];

  const services = [
    { title: 'Web Development', description: 'Building fast, responsive and scalable web apps.', icon: Globe },
    { title: 'UI/UX Design', description: 'Designing beautiful and user-friendly interfaces.', icon: PenTool },
    { title: 'API & Backend', description: 'Creating secure and efficient backend solutions.', icon: Database },
    { title: 'Problem Solving', description: 'Solving complex problems with clean code.', icon: Puzzle },
  ];

  const hobbies = [
    { title: 'Traveling', icon: Plane },
    { title: 'Photography', icon: Camera },
    { title: 'Reading', icon: Book },
    { title: 'Gaming', icon: Gamepad },
    { title: 'Music', icon: Music },
  ];

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/12R0rj7TxAyR6w_rCy7R9ltDgzitS2bJ_/view', '_blank');
  };

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- TOP ROW --- */}
          
          {/* 1. Intro Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">GET TO KNOW ME</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
              About <span className="text-primary">Me</span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h2>
            
            <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-6">
              I craft digital experiences that are <br/>
              <span className="text-primary">fast, beautiful</span> and user-focused.
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {about.description}
              <br/><br/>
              With a strong foundation in modern technologies, I enjoy turning ideas into impactful digital products.
            </p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                Download Resume <Download className="w-4 h-4" />
              </button>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border hover:border-primary/50 text-foreground rounded-xl text-xs font-bold transition-all"
              >
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* 2. Profile Image Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 relative min-h-[400px] flex items-center justify-center"
          >
            {/* Circular glowing backdrop */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute w-[260px] h-[260px] rounded-full border-4 border-primary/50 shadow-[0_0_50px_rgba(139,92,246,0.4)] overflow-hidden flex items-center justify-center bg-surface">
              <img 
                src={personal.image} 
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Orbiting Icons */}
            <div className="absolute top-1/4 left-[10%] w-12 h-12 glass-panel border border-border rounded-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
              <Code className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute bottom-1/3 right-[10%] w-10 h-10 glass-panel border border-border rounded-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              <Rocket className="w-4 h-4 text-purple-400" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-[10%] left-[5%] glass-panel border border-border p-4 rounded-2xl shadow-xl flex flex-col gap-1">
              <span className="text-2xl font-black text-primary leading-none">2+</span>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider leading-tight">Years of<br/>Learning &<br/>Growing</span>
            </div>
            
            {/* Decorative orbit paths */}
            <svg className="absolute w-[350px] h-[350px] pointer-events-none opacity-20" viewBox="0 0 100 100">
              <ellipse cx="50" cy="50" rx="48" ry="25" fill="none" stroke="var(--primary)" strokeWidth="0.5" transform="rotate(-30 50 50)" />
              <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="var(--primary)" strokeWidth="0.5" transform="rotate(45 50 50)" />
            </svg>
          </motion.div>

          {/* 3. Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-panel border border-border rounded-3xl p-6 md:p-8"
          >
            <div className="grid grid-cols-2 gap-6 h-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-foreground mb-1">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- BOTTOM ROW --- */}

          {/* 4. My Journey Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 glass-panel border border-border rounded-3xl p-6 md:p-8 relative"
          >
            <h3 className="text-foreground font-bold text-lg mb-8">My Journey</h3>
            
            <div className="relative pl-6">
              {/* Timeline line */}
              <div className="absolute top-2 bottom-6 left-2 w-[1px] bg-border" />
              
              <div className="space-y-8">
                {timelineData.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Node */}
                    <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                    </div>
                    
                    <div className="text-[10px] font-bold text-primary mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">{item.title}</h4>
                    <div className="text-[11px] text-muted-foreground mb-2">{item.institution}</div>
                    
                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed line-clamp-2">
                      {item.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a href="#experience" className="inline-flex items-center gap-2 mt-8 text-[11px] font-bold text-foreground hover:text-primary transition-colors">
              View Full Experience <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* 5. What I Do */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 glass-panel border border-border rounded-3xl p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-foreground font-bold text-lg mb-4">What I Do</h3>
            <p className="text-[11px] text-muted-foreground mb-6 leading-relaxed">
              I help businesses and individuals bring their ideas to life through clean code and intuitive design.
            </p>
            
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-surface/50 border border-transparent hover:border-border transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1">{service.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-primary/80">
              Let's create something amazing together! <Rocket className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* 6. Tech Stack & Beyond Code */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Tech Stack Panel */}
            <div className="glass-panel border border-border rounded-3xl p-6 flex-grow">
              <h3 className="text-foreground font-bold text-sm mb-1">Tech Stack</h3>
              <p className="text-[10px] text-muted-foreground mb-6">Technologies I work with</p>
              
              <div className="grid grid-cols-4 gap-4">
                {allSkills.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center hover:border-primary/40 hover:bg-surface-hover transition-colors">
                      <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain" />
                    </div>
                    <span className="text-[9px] text-foreground font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Code Panel */}
            <div className="glass-panel border border-border rounded-3xl p-6">
              <h3 className="text-foreground font-bold text-sm mb-1">Beyond Code</h3>
              <p className="text-[10px] text-muted-foreground mb-6">Things I enjoy when I'm not coding</p>
              
              <div className="grid grid-cols-5 gap-2">
                {hobbies.map((hobby, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                      <hobby.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[9px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 bg-background px-2 py-1 rounded shadow-lg border border-border z-20 whitespace-nowrap">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;