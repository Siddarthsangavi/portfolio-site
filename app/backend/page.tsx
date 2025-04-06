'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function BackendPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const isDarkMode = theme === 'dark';
  
  // Refs for sections
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    <div className={`transition-colors duration-300 relative overflow-x-hidden ${
      isDarkMode ? 'bg-black bg-gradient-dark' : 'bg-[#f5f5f7] bg-gradient-light'
    }`}>
      {/* Background glow effects */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 flex flex-col items-start max-w-5xl relative z-10">
          <div 
            className={`transform transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <h1 className={`font-bold tracking-tight mb-1 font-['Fira_Code'] ${
              isDarkMode ? 'text-white hero-text' : 'text-black'
            }`}>
              <span className="text-3xl md:text-4xl block mb-2">Backend Development</span>
              <span className="text-5xl md:text-7xl">Powering Digital Solutions</span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Building robust, scalable, and secure APIs and server-side applications
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}></div>
          </div>
        </div>
      </section>
    </div>
  );
} 