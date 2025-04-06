'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiExternalLink, FiCode, FiInfo } from 'react-icons/fi';

export default function Frontend() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDarkMode = theme === 'dark';
  
  // Refs for each section to track active section
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll events
  const handleScroll = () => {
    // Update scroll progress percentage
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    
    // Determine active section based on scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    if (heroRef.current && scrollPosition < heroRef.current.offsetTop + heroRef.current.offsetHeight) {
      setActiveSection(0);
    } else if (portfolioRef.current) {
      setActiveSection(1);
    }
  };

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set positions
    handleScroll();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
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
              <span className="text-3xl md:text-4xl block mb-2">Frontend Development</span>
              <span className="text-5xl md:text-7xl">Building Digital Experiences</span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Crafting responsive, performant, and user-friendly web applications
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section - Full Height */}
      <section ref={portfolioRef} className="min-h-screen py-8 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <FiCode className={`w-8 h-8 mr-3 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`} />
              <h2 className={`text-3xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Interactive Portfolio
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>

            {/* Live Portfolio Container with Side Controls */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main iframe container */}
              <div className="lg:w-4/5">
                <div 
                  className={`rounded-xl transform transition-all duration-500 overflow-hidden h-full ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 hover:border-indigo-500/30 shadow-xl' 
                      : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-xl'
                  }`}
                >
                  {/* Browser header */}
                  <div className={`flex items-center px-4 py-2 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={`flex-1 text-center text-sm font-mono truncate ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      siddarth-sangavi.com
                    </div>
                  </div>
                  
                  {/* Iframe container - fixed height for full screen */}
                  <div style={{ height: "85vh" }} className="w-full">
                    <iframe 
                      src="/" 
                      title="Siddharth Sangavi Portfolio" 
                      className="w-full h-full border-0"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Side information panel */}
              <div className="lg:w-1/5">
                <div className={`rounded-xl p-6 h-full flex flex-col ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white border border-gray-100 shadow-lg'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 font-['Fira_Code'] ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    Portfolio Website
                  </h3>
                  
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A responsive, modern portfolio built with Next.js and TypeScript featuring smooth animations and a dark/light mode toggle.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                      }`}>Next.js</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                      }`}>TypeScript</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                      }`}>Tailwind</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                      }`}>React</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col gap-3">
                      <a 
                        href="https://github.com/Siddarthsangavi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <FiGithub className="mr-2" /> View Source
                      </a>
                      <a 
                        href="/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-indigo-900/70 text-indigo-300 hover:bg-indigo-800/70' 
                            : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                        }`}
                      >
                        <FiExternalLink className="mr-2" /> Open in New Tab
                      </a>
                      <div className={`flex items-center mt-4 px-3 py-2 rounded-md text-xs ${
                        isDarkMode ? 'bg-gray-900/80 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <FiInfo className="mr-2 flex-shrink-0" /> 
                        <span>Interactive demo: Try scrolling, toggling themes, and navigating sections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 