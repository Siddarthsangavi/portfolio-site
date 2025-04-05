'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import { FiChevronDown, FiMapPin, FiCode, FiBook, FiStar, FiHome, FiBookOpen, FiCoffee } from 'react-icons/fi';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    const handleScroll = () => {
      if (aboutRef.current) {
        const position = aboutRef.current.getBoundingClientRect();
        if (position.top < window.innerHeight - 200) {
          setAboutVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
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
          <div className={`transform transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-3 font-['Fira_Code'] ${
              isDarkMode ? 'text-white hero-text' : 'text-black'
            }`}>
              Hi, I'm Siddharth Sangavi,
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              a Fullstack Engineer
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}></div>
          </div>
          
          <div className={`mb-6 flex items-center transform transition-all duration-1000 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
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
          
          <div className={`mt-2 flex items-center space-x-4 transform transition-all duration-1000 delay-300 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className={`text-xl font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Scroll down to know about me and my journey
            </p>
            
            <button 
              onClick={scrollToAbout}
              className="animate-bounce focus:outline-none"
              aria-label="Scroll to about section"
            >
              <FiChevronDown className={`w-8 h-8 ${
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
    </div>
  );
}
