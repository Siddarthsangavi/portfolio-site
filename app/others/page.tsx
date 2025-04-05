'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function OthersPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDarkMode = theme === 'dark';

  // Render a simpler version during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto pt-24 px-6">
          {/* Placeholder during SSR */}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-[#f5f5f7]'
    }`}>
      <Navbar />
      <div className="container mx-auto pt-24 px-6">
        <h1 className={`text-3xl font-bold mb-6 font-['Fira_Code'] ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Other Projects & Skills
        </h1>
        <p className={`mb-6 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          This section will showcase my additional skills, interests, and miscellaneous projects.
        </p>
        
        {/* Content will be added here later */}
        <div className={`p-6 rounded-lg ${
          isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'
        }`}>
          <p className="text-lg">Coming soon...</p>
        </div>
      </div>
    </div>
  );
} 