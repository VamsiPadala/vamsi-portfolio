import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const LampToggle = () => {
  const { theme, toggleTheme } = useTheme();
  // State to manage the pull animation
  const [isPulling, setIsPulling] = useState(false);

  const isDark = theme === 'dark';

  const handlePull = () => {
    if (isPulling) return;

    // Start rope pull animation
    setIsPulling(true);

    // Toggle the theme exactly when the rope reaches the bottom (mid-animation)
    setTimeout(() => {
      toggleTheme();
    }, 250);

    // Reset rope state to spring back up
    setTimeout(() => {
      setIsPulling(false);
    }, 500);
  };

  return (
    <div
      className="fixed top-20 right-8 z-[100] drop-shadow-2xl cursor-pointer group"
      onClick={handlePull}
      style={{
        // Optional subtle float for the whole container on hover
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Glow behind the lamp when light theme (or lamp ON) */}
      {!isDark && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#ffcc00] rounded-full blur-[50px] opacity-60 z-0 pointer-events-none transition-opacity duration-500"></div>
      )}

      <div className="relative flex flex-col items-center">
        {/* 
               We will use a highly realistic interactive CSS lamp as a fallback. 
               If the user wishes to use the EXACT images provided, they can 
               replace this block with <img src="/lamp-light.jpg" /> etc.
               But the CSS approach allows the rope to physically animate ("transiation of that roop").
            */}

        {/* The Wall Mount & Arm */}
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#5c4018] shadow-md'} z-20`}></div>
        <div className={`w-1 h-8 ${isDark ? 'bg-[#333]' : 'bg-[#7a5522]'} z-10`}></div>

        {/* Lamp Shade (Trapezoid shape using CSS borders) */}
        <div className="relative flex justify-center w-full z-20" style={{ perspective: '100px' }}>
          <div
            style={{
              borderBottom: `50px solid ${isDark ? '#3b3b3b' : '#fff3d1'}`,
              borderLeft: '18px solid transparent',
              borderRight: '18px solid transparent',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              height: 0,
              width: '80px',
              transition: 'border-bottom-color 0.4s ease, filter 0.3s ease',
              filter: isDark ? 'brightness(0.7)' : 'drop-shadow(0 0 10px rgba(255, 204, 0, 0.5))'
            }}
          >
            {/* The Lightbulb peeking out */}
            <div
              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-300 ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#fffdf0] shadow-[0_0_20px_10px_#ffe066]'
                }`}
              style={{ zIndex: -1 }}
            ></div>
          </div>
        </div>

        {/* Lamp Base Stand below shade */}
        <div className={`w-[45px] h-3 mt-0 rounded-sm ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#4a3211]'} z-30 transition-colors`}></div>
        <div className={`w-[25px] h-6 rounded-b-lg ${isDark ? 'bg-[#222]' : 'bg-[#5c4018]'} z-20 transition-colors`}></div>

        {/* The Pull Rope (Chain) - This animates! */}
        <div
          className="relative z-10 flex flex-col items-center cursor-pointer group-hover:brightness-125"
          style={{
            transform: isPulling ? 'translateY(35px)' : 'translateY(0)',
            transition: isPulling
              ? 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
              : 'transform 0.5s cubic-bezier(0.5, 0, 0.2, 1)',
          }}
        >
          {/* The chain links (using repeating gradient) */}
          <div
            className={`w-[2px] h-20 ${isDark ? 'opacity-50' : 'opacity-100'} transition-opacity`}
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 2px, ${isDark ? '#888' : '#b47b2c'} 2px, ${isDark ? '#444' : '#6b4512'} 5px)`
            }}
          ></div>
          {/* The Chain Knob */}
          <div className={`w-[10px] h-6 rounded-sm shadow-lg border-[0.5px] border-black/20 ${isDark ? 'bg-gradient-to-b from-[#555] to-[#222]' : 'bg-gradient-to-b from-[#d99a4c] to-[#8a5d24]'
            }`}></div>
        </div>
      </div>
    </div>
  );
};

export default LampToggle;
