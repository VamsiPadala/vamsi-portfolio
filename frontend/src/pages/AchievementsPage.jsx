import React from 'react';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

const AchievementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
};

export default AchievementsPage;
