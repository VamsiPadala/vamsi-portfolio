import React, { useState } from 'react';
import { Trophy, Medal, Star, Users, Github, TrendingUp, GraduationCap, Edit3, Code, ChevronRight, ArrowRight, Calendar, Award, Rocket } from 'lucide-react';
import { portfolioData } from '../mock';
import { motion } from 'framer-motion';

const HexagonIcon = ({ icon: Icon, colorClass, glowClass }) => (
  <div className={`relative flex items-center justify-center w-16 h-16 flex-shrink-0 ${colorClass}`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_currentColor]">
      <polygon 
        points="50 5 93 30 93 70 50 95 7 70 7 30" 
        fill="currentColor" 
        fillOpacity="0.1"
        stroke="currentColor" 
        strokeWidth="2"
      />
    </svg>
    <Icon className="w-6 h-6 relative z-10" />
    <div className={`absolute inset-0 blur-xl opacity-30 ${glowClass}`} />
  </div>
);

const Achievements = () => {
  const { achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Competitions', 'Recognitions', 'Communities', 'Milestones'];

  // Combine real achievements with mock padding to fill the grid
  const allAchievements = [
    // Real Data Mapped
    ...(achievements?.length > 0 ? achievements.map((ach, i) => ({
      id: `real-${i}`,
      title: ach.title,
      description: ach.description,
      date: 'Recent',
      tag: 'Milestone',
      tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      icon: Rocket,
      color: 'text-blue-500',
      glow: 'bg-blue-500',
      link: ach.link
    })) : []),
    
    // Mock Padding to match screenshot density
    {
      id: 1,
      title: 'Winner - CodeSprint 2024',
      emoji: '🏆',
      description: 'Secured 1st place in a national-level coding competition among 500+ participants.',
      date: 'Apr 2024',
      tag: 'Competition',
      tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      icon: Code,
      color: 'text-purple-500',
      glow: 'bg-purple-500'
    },
    {
      id: 2,
      title: 'Top Performer – DevFest',
      emoji: '🌟',
      description: 'Recognized as a top performer for contributions to DevFest 2023 community event.',
      date: 'Dec 2023',
      tag: 'Recognition',
      tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: Code,
      color: 'text-emerald-500',
      glow: 'bg-emerald-500'
    },
    {
      id: 3,
      title: 'Community Leader',
      emoji: '👑',
      description: 'Appointed as a community leader at Google Developer Student Clubs.',
      date: 'Sep 2023',
      tag: 'Community',
      tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      icon: Users,
      color: 'text-orange-500',
      glow: 'bg-orange-500'
    },
    {
      id: 4,
      title: 'GitHub Star',
      emoji: '⭐',
      description: 'Reached 100+ stars across my open-source repositories.',
      date: 'Aug 2023',
      tag: 'Milestone',
      tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      icon: Github,
      color: 'text-blue-500',
      glow: 'bg-blue-500'
    },
    {
      id: 5,
      title: '5K+ Profile Views',
      emoji: '📈',
      description: 'My GitHub profile crossed 5,000 views.',
      date: 'Jul 2023',
      tag: 'Milestone',
      tagColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
      icon: TrendingUp,
      color: 'text-pink-500',
      glow: 'bg-pink-500'
    },
    {
      id: 6,
      title: 'Dean\'s List',
      emoji: '🎓',
      description: 'Awarded Dean\'s List for academic excellence for 2 consecutive years.',
      date: 'May 2023',
      tag: 'Recognition',
      tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      icon: GraduationCap,
      color: 'text-purple-500',
      glow: 'bg-purple-500'
    },
    {
      id: 7,
      title: 'Runner Up – HackX 2022',
      emoji: '🥈',
      description: 'Secured 2nd place in HackX 2022 hackathon organized by ACME Developers.',
      date: 'Oct 2022',
      tag: 'Competition',
      tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      icon: Medal,
      color: 'text-orange-500',
      glow: 'bg-orange-500'
    },
    {
      id: 8,
      title: 'Tech Blog Contributor',
      emoji: '✍️',
      description: 'Featured as a top technical writer on Hashnode.',
      date: 'Aug 2022',
      tag: 'Recognition',
      tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: Edit3,
      color: 'text-emerald-500',
      glow: 'bg-emerald-500'
    },
    {
      id: 9,
      title: 'Consistent Contributor',
      emoji: '🔥',
      description: 'Achieved over 50+ contributions in open source consistently.',
      date: 'Jun 2022',
      tag: 'Milestone',
      tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      icon: Star,
      color: 'text-blue-500',
      glow: 'bg-blue-500'
    }
  ];

  // We only show the first 9 items to maintain the strict 3x3 grid look
  const displayAchievements = allAchievements.slice(0, 9);

  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl w-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Milestones & Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              My <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A collection of my key milestones, recognitions, and accomplishments that reflect my journey and passion for growth.
            </p>
          </motion.div>

          {/* 3D Trophy Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center w-72 h-48 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full" />
            <Trophy className="w-32 h-32 text-primary relative z-10 drop-shadow-[0_0_15px_var(--primary)]" />
            {/* Decorative Stars */}
            <Star className="absolute top-4 left-4 w-6 h-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse" />
            <Star className="absolute top-12 right-12 w-4 h-4 text-primary drop-shadow-[0_0_10px_var(--primary)]" />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-border rounded-2xl p-6 mb-12 w-full overflow-x-auto"
        >
          <div className="flex items-center justify-between min-w-[800px]">
            {[
              { icon: Trophy, count: '18+', label: 'Achievements', iconColor: 'text-purple-400 bg-purple-400/10' },
              { icon: Award, count: '6', label: 'Competitions', iconColor: 'text-blue-400 bg-blue-400/10' },
              { icon: Star, count: '12+', label: 'Recognitions', iconColor: 'text-emerald-400 bg-emerald-400/10' },
              { icon: Users, count: '8', label: 'Communities', iconColor: 'text-orange-400 bg-orange-400/10' },
              { icon: Calendar, count: '5+', label: 'Years of Journey', iconColor: 'text-pink-400 bg-pink-400/10' },
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-4 px-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${stat.iconColor}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{stat.count}</div>
                    <div className="text-[11px] text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
                {i < 4 && <div className="w-px h-12 bg-border flex-shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold transition-colors border ${
                  activeTab === tab 
                    ? 'bg-primary/20 text-primary border-primary/40' 
                    : 'bg-transparent text-muted-foreground border-transparent hover:bg-surface-hover hover:border-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            Sort by: <span className="text-foreground font-medium">Latest</span> <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayAchievements.map((ach, idx) => (
            <motion.div 
              key={ach.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
            >
              <a 
                href={ach.link || '#'} 
                target={ach.link ? "_blank" : "_self"} 
                rel="noreferrer"
                className="glass-panel border border-border rounded-2xl p-6 flex gap-5 group hover:border-primary/40 transition-colors h-full block"
              >
                {/* Hexagon Icon */}
                <HexagonIcon icon={ach.icon} colorClass={ach.color} glowClass={ach.glow} />

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {ach.title} {ach.emoji && <span>{ach.emoji}</span>}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {ach.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-muted-foreground">{ach.date}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-sm border ${ach.tagColor}`}>
                      {ach.tag}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">There's more to come!</h3>
              <p className="text-xs text-muted-foreground">I'm constantly learning, building, and achieving new milestones.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 border border-border hover:border-primary/50 hover:bg-surface-hover rounded-full text-[11px] font-bold text-foreground transition-colors whitespace-nowrap group">
            View All Timeline <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;