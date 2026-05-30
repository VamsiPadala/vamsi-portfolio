import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import NeuronIntro from './components/NeuronIntro';
import { ThemeProvider } from './contexts/ThemeContext';
import LampToggle from './components/LampToggle';

function App() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    if (window.scrollY > 200) setIntroVisible(false);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {introVisible && <NeuronIntro onComplete={() => setIntroVisible(false)} />}
        <Navbar />
        <LampToggle />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;