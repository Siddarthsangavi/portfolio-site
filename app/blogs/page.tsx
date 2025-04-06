'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import { FiBookOpen, FiExternalLink, FiArrowRight, FiClock } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const Blogs = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const isDarkMode = theme === 'dark';
  
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
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 flex flex-col items-start max-w-5xl relative z-10">
          <div 
            className={`transform transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <h1 className={`font-bold tracking-tight mb-1 font-['Fira_Code'] ${
              isDarkMode ? 'text-white hero-text' : 'text-black'
            }`}>
              <span className="text-3xl md:text-4xl block mb-2">My Blog</span>
              <span className="text-5xl md:text-7xl">Developer Insights</span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Sharing knowledge and experiences from my development journey
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Blog Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <FiBookOpen className={`w-8 h-8 mr-3 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`} />
              <h2 className={`text-3xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Featured Blog Posts
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>

            {/* Blog Post Card */}
            <div className={`mb-12 rounded-xl overflow-hidden ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100 shadow-lg'
            }`}>
              {/* Blog Card Content */}
              <div className={`p-6 ${
                isDarkMode ? 'border-white/10' : 'border-gray-100'
              }`}>
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Local and Session Storage | Uncommon Insights into Developer Basics
                </h3>
                <div className={`flex items-center mb-6 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <FiClock className="mr-1" />
                  <span>5 min read • Published on Medium • April 2023</span>
                </div>
                
                <div className="flex">
                  <Link 
                    href="https://medium.com/@siddarthsangavi28/local-and-session-storage-uncommon-insights-into-developer-basics-c61a287f193b" 
                    target="_blank"
                    className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500' 
                        : 'bg-indigo-500 text-white hover:bg-indigo-600'
                    }`}
                  >
                    <FiExternalLink className="mr-2" /> Read on Medium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 