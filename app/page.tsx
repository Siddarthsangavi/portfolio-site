'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import { FiChevronDown, FiMapPin, FiCode, FiBook, FiStar, FiHome, FiBookOpen, FiCoffee, FiClock, FiBriefcase, FiCalendar, FiArrowRight, FiPlay } from 'react-icons/fi';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });
  const [showCopied, setShowCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText('siddarthsangavi28@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };
  
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (aboutRef.current) {
        const position = aboutRef.current.getBoundingClientRect();
        if (position.top < window.innerHeight - 200) {
          setAboutVisible(true);
        }
      }
      
      if (experienceRef.current) {
        const position = experienceRef.current.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setExperienceVisible(true);
        }
      }
      
      if (toolsRef.current) {
        const position = toolsRef.current.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setToolsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Calculate experience duration
    const calculateExperience = () => {
      const startDate = new Date(2024, 5, 6); // June 6, 2024 (months are 0-indexed)
      const currentDate = new Date();
      
      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();
      
      if (days < 0) {
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonthDate.getDate();
        months--;
      }
      
      if (months < 0) {
        months += 12;
        years--;
      }
      
      setExperience({ years, months, days });
    };
    
    calculateExperience();
    const intervalId = setInterval(calculateExperience, 1000 * 60 * 60 * 24); // Update daily
    
    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
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
            style={{
              opacity: Math.max(0, 1 - scrollY / 350),
              transform: `
                translateY(${Math.min(scrollY / 15, -30)}px) 
                translateX(${Math.min(scrollY / 8, window.innerWidth > 768 ? 250 : 120)}px) 
                scale(${Math.max(0.6, 1 - scrollY / 500)})
              `,
              transformOrigin: 'left center',
            }}
          >
            <h1 className={`font-bold tracking-tight mb-1 font-['Fira_Code'] ${
              isDarkMode ? 'text-white hero-text' : 'text-black'
            }`}>
              <span 
                className="text-3xl md:text-4xl block mb-2"
                style={{
                  opacity: Math.max(0, 1 - scrollY / 150),
                }}
              >Hello world,</span>
              <span className="text-5xl md:text-7xl">I'm Siddharth Sangavi,</span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
             style={{
               opacity: Math.max(0, 1 - scrollY / 150),
               transform: `translateY(${Math.min(scrollY / 10, 50)}px)`,
             }}
            >
              a Fullstack Engineer
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}
             style={{
                opacity: Math.max(0, 1 - scrollY / 120),
                width: Math.max(32, 32 - scrollY / 5),
                transform: `translateY(${Math.min(scrollY / 10, 30)}px)`,
             }}
            ></div>
          </div>
          
          <div 
            className={`mb-6 flex items-center transform transition-all duration-1000 delay-200 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              opacity: Math.max(0, 1 - scrollY / 120),
              transform: `translateY(${Math.min(scrollY / 6, 80)}px)`,
            }}
          >
            <div className={`font-mono text-sm md:text-base px-4 py-2 rounded-md ${
              isDarkMode ? 'bg-white/5 text-green-400' : 'bg-black/5 text-green-600'
            }`}>
              <div className="flex items-center">
                <FiCoffee className="mr-2" />
                <span>
                  <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>while</span>
                  <span className={isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}>(</span>!coffee.isEmpty()
                  <span className={isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}>)</span> 
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>{' {'}</span> code<span className={isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}>( )</span><span className={isDarkMode ? 'text-white' : 'text-black'}>; {'}'}</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Social Links and Resume Download */}
          <div 
            className={`mb-8 flex flex-col sm:flex-row items-start sm:items-center transform transition-all duration-1000 delay-300 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              opacity: Math.max(0, 1 - scrollY / 120),
              transform: `translateY(${Math.min(scrollY / 5, 100)}px)`,
            }}
          >
            <div className="flex items-center space-x-4 mb-4 sm:mb-0 sm:mr-6">
              <a 
                href="https://github.com/Siddarthsangavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/5 text-white hover:bg-white/10 social-icon-glow' 
                    : 'bg-black/5 text-gray-700 hover:bg-black/10'
                }`}
                aria-label="GitHub Profile"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/siddarth-sangavi-526232204/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/5 text-white hover:bg-white/10 social-icon-glow' 
                    : 'bg-black/5 text-gray-700 hover:bg-black/10'
                }`}
                aria-label="LinkedIn Profile"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <button 
                onClick={copyEmail}
                className={`px-3 py-1.5 rounded-md transition-all duration-300 flex items-center ${
                  isDarkMode 
                    ? 'bg-white/5 text-white hover:bg-white/10 social-icon-glow' 
                    : 'bg-black/5 text-gray-700 hover:bg-black/10'
                }`}
                aria-label="Copy Email"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4 mr-2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span className="text-xs font-mono">siddarthsangavi28@gmail.com</span>
                {showCopied && (
                  <span className={`ml-2 px-1.5 py-0.5 text-xs rounded ${
                    isDarkMode ? 'bg-indigo-500/50 text-white' : 'bg-indigo-100 text-indigo-700'
                  }`}>
                    Copied!
                  </span>
                )}
              </button>
            </div>
            
            <a 
              href="/Sid_resume.pdf" 
              download
              className={`px-4 py-2 rounded-md flex items-center border-2 transition-all duration-300 ${
                isDarkMode 
                  ? 'border-indigo-500 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200 resume-btn-glow' 
                  : 'border-indigo-600 text-indigo-600 hover:border-indigo-700 hover:text-indigo-700'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
          
          <div 
            className={`mt-24 flex flex-col items-center w-full transform transition-all duration-1000 delay-300 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              opacity: Math.max(0, 1 - scrollY / 100),
              transform: `translateY(${Math.min(scrollY / 4, 120)}px)`,
            }}
          >
            <p className={`text-xl font-medium mb-6 text-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Scroll down to know about me and my journey
            </p>
            
            <button 
              onClick={scrollToAbout}
              className="animate-bounce focus:outline-none"
              aria-label="Scroll to about section"
            >
              <FiChevronDown className={`w-10 h-10 ${
                isDarkMode ? 'text-white scroll-icon-glow' : 'text-black'
              }`} />
            </button>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section 
        ref={aboutRef}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className={`transform transition-all duration-1000 ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                About Me
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`mr-4 p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <FiHome className={`w-6 h-6 ${isDarkMode ? 'glow-icon' : ''}`} />
                </div>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-bold">I'm from North Karnataka,</span> where I completed my schooling. I moved to Hubli for my pre-university studies and then came to Bangalore for my degree in Computer Science Engineering at REVA University.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className={`mr-4 p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <FiCode className={`w-6 h-6 ${isDarkMode ? 'glow-icon' : ''}`} />
                </div>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-bold">Since then, I've focused on Fullstack Engineering,</span> working with both frontend and backend technologies. My passion lies in creating seamless, user-friendly applications backed by robust server-side logic.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className={`mr-4 p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <FiStar className={`w-6 h-6 ${isDarkMode ? 'glow-icon' : ''}`} />
                </div>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-bold">I'm now settled in Bangalore,</span> continuously learning and taking on new challenges in the tech field. I believe in staying current with emerging technologies while mastering the fundamentals that make great software possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline Section */}
      <section 
        ref={experienceRef}
        className="py-24 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-8">
                <FiClock className={`w-8 h-8 mr-3 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`} />
                <h2 className={`text-3xl md:text-4xl font-bold font-['Fira_Code'] ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Code Journey Timeline
                </h2>
              </div>
              
              <p className={`text-lg mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-mono">{`{developer.status = "active"}`}</span> since June 6, 2024
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 experience-card-glow' 
                    : 'bg-black/5 border border-black/10 shadow-sm'
                }`}>
                  <div className={`text-5xl md:text-6xl font-bold mb-1 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {experience.years}
                  </div>
                  <div className={`text-sm font-medium uppercase tracking-wider ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Years
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 experience-card-glow' 
                    : 'bg-black/5 border border-black/10 shadow-sm'
                }`}>
                  <div className={`text-5xl md:text-6xl font-bold mb-1 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {experience.months}
                  </div>
                  <div className={`text-sm font-medium uppercase tracking-wider ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Months
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 experience-card-glow' 
                    : 'bg-black/5 border border-black/10 shadow-sm'
                }`}>
                  <div className={`text-5xl md:text-6xl font-bold mb-1 ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    {experience.days}
                  </div>
                  <div className={`text-sm font-medium uppercase tracking-wider ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Days
                  </div>
                </div>
              </div>
            </div>
            
            {/* Career Path Visualization */}
            <div className="mt-32 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <FiBriefcase className={`w-8 h-8 mr-3 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`} />
                <h2 className={`text-3xl md:text-4xl font-bold font-['Fira_Code'] ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Career Milestones
                </h2>
              </div>
              
              <div className="relative py-8">
                {/* First experience - Intern (Logo on the right) */}
                <div className="flex flex-col md:flex-row items-center mb-10 relative">
                  {/* Content on the left */}
                  <div className={`w-full md:w-3/4 p-6 rounded-lg transform transition-all duration-500 hover:-translate-y-1 ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 shadow-lg shadow-indigo-500/20' 
                      : 'bg-white border border-indigo-100 shadow-lg shadow-indigo-200/30'
                  }`}>
                    <div className={`flex flex-col ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>
                      {/* Company name - larger and bolder */}
                      <div className={`text-2xl md:text-3xl font-extrabold mb-2 ${
                        isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                      }`}>
                        Ford Pro Powered by Electriphi
                      </div>
                      
                      {/* Role - medium and bold */}
                      <h3 className={`text-lg font-bold mb-2 font-['Fira_Code'] ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>
                        Fullstack Engineer Intern
                      </h3>
                      
                      {/* Date range */}
                      <div className={`inline-flex items-center text-sm mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <FiCalendar className="mr-2" />
                        <span className="font-mono">Aug 22, 2023 - May 22, 2024</span>
                        <span className={`ml-2 px-2 py-0.5 rounded ${
                          isDarkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                        }`}>9 months</span>
                      </div>
                    </div>
                    
                    <p className={`text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Started my professional journey developing innovative solutions for the electric vehicle charging ecosystem. Worked on both frontend and backend technologies to create seamless user experiences.
                    </p>
                  </div>
                  
                  {/* Logo on the right */}
                  <div className="w-full md:w-1/4 flex justify-center items-center mt-6 md:mt-0 relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-indigo-200 flex items-center justify-center p-3 company-logo-container">
                      <div className="w-full h-full rounded-full flex items-center justify-center logo-inner-container bg-white">
                        <img 
                          src="/ford-pro.png" 
                          alt="Company Logo 1" 
                          className="w-4/5 h-4/5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow indicating progression */}
                <div className="flex justify-center mb-10">
                  <div className={`relative ${
                    isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    <FiChevronDown className="w-10 h-10 animate-bounce" />
                    <div className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-mono whitespace-nowrap ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Intern to Full time</div>
                  </div>
                </div>
                
                {/* Second experience - Full time (Logo on the left) */}
                <div className="flex flex-col md:flex-row-reverse items-center relative">
                  {/* Content on the right */}
                  <div className={`w-full md:w-3/4 p-6 rounded-lg transform transition-all duration-500 hover:-translate-y-1 ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 shadow-lg shadow-indigo-500/20' 
                      : 'bg-white border border-indigo-100 shadow-lg shadow-indigo-200/30'
                  }`}>
                    <div className={`flex flex-col ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>
                      {/* Company name - larger and bolder */}
                      <div className={`text-2xl md:text-3xl font-extrabold mb-2 ${
                        isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                      }`}>
                        Ford Motor Company
                      </div>
                      
                      {/* Role - medium and bold */}
                      <h3 className={`text-lg font-bold mb-2 font-['Fira_Code'] ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>
                        Fullstack Engineer
                      </h3>
                      
                      {/* Date range */}
                      <div className={`inline-flex items-center text-sm mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <FiCalendar className="mr-2" />
                        <span className="font-mono">June 6, 2024 - Present</span>
                        <span className={`ml-2 px-2 py-0.5 rounded ${
                          isDarkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                        }`}>{experience.years > 0 ? `${experience.years}y ${experience.months}m` : `${experience.months} months`}</span>
                      </div>
                    </div>
                    
                    <p className={`text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Transitioned to a full-time role where I'm building scalable applications and services. Leveraging modern technologies to drive innovation in automotive software solutions.
                    </p>
                  </div>
                  
                  {/* Logo on the left */}
                  <div className="w-full md:w-1/4 flex justify-center items-center mt-6 md:mt-0 relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-indigo-200 flex items-center justify-center p-3 company-logo-container">
                      <div className="w-full h-full rounded-full flex items-center justify-center logo-inner-container bg-white">
                        <img 
                          src="/ford.png" 
                          alt="Company Logo 2" 
                          className="w-4/5 h-4/5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools & Technologies Section */}
      <section 
        ref={toolsRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            toolsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-16">
                <FiCode className={`w-5 h-5 mr-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`} />
                <h2 className={`text-xl md:text-2xl font-bold font-['Fira_Code'] ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Skills & Technologies
                </h2>
                <div className={`ml-4 h-0.5 flex-grow ${
                  isDarkMode ? 'bg-white/20' : 'bg-black/10'
                }`}></div>
              </div>
              
              {/* Frontend Technologies */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/5 mb-5 md:mb-0">
                    <h3 className={`text-base md:text-lg font-bold font-['Fira_Code'] ${
                      isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                    }`}>
                      Frontend
                    </h3>
                  </div>
                  <div className="w-full md:w-4/5">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                      {[
                        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                        { name: 'SCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
                        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', invertInDark: true },
                      ].map((tech, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`} 
                            className={`w-7 h-7 mb-2 tech-logo ${isDarkMode && tech.invertInDark ? 'filter-invert' : ''}`}
                          />
                          <span className={`text-xs font-medium text-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Backend Technologies */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/5 mb-5 md:mb-0">
                    <h3 className={`text-base md:text-lg font-bold font-['Fira_Code'] ${
                      isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                    }`}>
                      Backend
                    </h3>
                  </div>
                  <div className="w-full md:w-4/5">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                      {[
                        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                        { name: 'NestJS', logo: 'https://raw.githubusercontent.com/nestjs/docs.nestjs.com/master/src/assets/logo-small.svg', invertInDark: false },
                        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invertInDark: true },
                        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                      ].map((tech, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`} 
                            className={`w-7 h-7 mb-2 tech-logo ${isDarkMode && tech.invertInDark ? 'filter-invert' : ''}`}
                          />
                          <span className={`text-xs font-medium text-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* DevOps & Tools */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/5 mb-5 md:mb-0">
                    <h3 className={`text-base md:text-lg font-bold font-['Fira_Code'] ${
                      isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                    }`}>
                      DevOps & Tools
                    </h3>
                  </div>
                  <div className="w-full md:w-4/5">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                      {[
                        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertInDark: true },
                        { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
                        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                        { name: 'ArgoCD', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/argo.svg', invertInDark: true },
                        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                        { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/swagger.svg', invertInDark: true },
                        { name: 'Datadog', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/datadog.svg', invertInDark: true },
                      ].map((tech, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`} 
                            className={`w-7 h-7 mb-2 tech-logo ${isDarkMode && tech.invertInDark ? 'filter-invert' : ''}`}
                          />
                          <span className={`text-xs font-medium text-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Collaboration Tools */}
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/5 mb-5 md:mb-0">
                    <h3 className={`text-base md:text-lg font-bold font-['Fira_Code'] ${
                      isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                    }`}>
                      Collaboration
                    </h3>
                  </div>
                  <div className="w-full md:w-4/5">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                      {[
                        { name: 'Slack', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/slack.svg', invertInDark: true },
                        { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
                        { name: 'Miro', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/miro.svg', invertInDark: true },
                      ].map((tech, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`} 
                            className={`w-7 h-7 mb-2 tech-logo ${isDarkMode && tech.invertInDark ? 'filter-invert' : ''}`}
                          />
                          <span className={`text-xs font-medium text-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VS Code Extensions Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <FiCode className={`w-5 h-5 mr-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`} />
              <h2 className={`text-xl md:text-2xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                VS Code Extensions Created By Me
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {/* Dev Store Extension */}
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=SiddharthSangavi.dev-store" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transform transition-all duration-500 hover:-translate-y-2 p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 hover:border-indigo-500/30' 
                    : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/dev-store.png" 
                    alt="Dev Store Extension" 
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className={`text-lg font-bold mb-2 text-center ${
                    isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>
                    Dev Store
                  </h3>
                  <p className={`text-sm text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your personal command store for VS Code. Organize and quickly access frequently used commands.
                  </p>
                </div>
              </a>
              
              {/* Highlight Buddy Extension */}
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=SiddharthSangavi.highlight-buddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transform transition-all duration-500 hover:-translate-y-2 p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 hover:border-indigo-500/30' 
                    : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/highlight-buddy.png" 
                    alt="Highlight Buddy Extension" 
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className={`text-lg font-bold mb-2 text-center ${
                    isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>
                    Highlight Buddy
                  </h3>
                  <p className={`text-sm text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    A simple and efficient code highlighter with multiple colors and customizable opacity.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
