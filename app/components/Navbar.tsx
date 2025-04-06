'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@fontsource/fira-code';
import { useTheme } from '../context/ThemeContext';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isDarkMode: boolean;
}

const NavLink = ({ href, label, isActive, isDarkMode }: NavLinkProps) => {
  return (
    <Link 
      href={href}
      className={`relative px-4 py-2 font-medium tracking-wider transition-colors duration-300
        ${isActive 
          ? isDarkMode ? 'text-white glow-text' : 'text-black font-bold'
          : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
        }`}
    >
      {label}
      {isActive && (
        <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
          isDarkMode ? 'bg-white glow-active' : 'bg-black'
        }`}></span>
      )}
    </Link>
  );
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDarkMode = theme === 'dark';

  // Prevent hydration issues
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full backdrop-blur-sm border-b z-50 bg-black/50 border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-['Fira_Code'] text-xl font-bold tracking-tight text-white glow-text">&lt;Siddharth Sangavi/&gt;</div>
          <div className="flex items-center space-x-2 font-['Fira_Code']">
            <span className="px-4 py-2 text-gray-400">Frontend</span>
            <span className="px-4 py-2 text-gray-400">Backend</span>
            <span className="px-4 py-2 text-gray-400">Crafted Solutions</span>
            <span className="px-4 py-2 text-gray-400">Blogs</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-black/50 border-white/10' : 'bg-white/50 border-black/10'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name/Logo */}
        <Link href="/">
          <div className={`font-['Fira_Code'] text-xl font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-black'
          } glow-text hover:opacity-80 transition-opacity`}>
            &lt;Siddharth Sangavi/&gt;
          </div>
        </Link>
        
        {/* Navigation Links and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 font-['Fira_Code']">
            <NavLink 
              href="/frontend" 
              label="Frontend" 
              isActive={pathname === '/frontend'} 
              isDarkMode={isDarkMode}
            />
            <NavLink 
              href="/backend" 
              label="Backend" 
              isActive={pathname === '/backend'} 
              isDarkMode={isDarkMode}
            />
            <NavLink 
              href="/crafted-solutions" 
              label="Crafted Solutions" 
              isActive={pathname === '/crafted-solutions'} 
              isDarkMode={isDarkMode}
            />
            <NavLink 
              href="/blogs" 
              label="Blogs" 
              isActive={pathname === '/blogs'} 
              isDarkMode={isDarkMode}
            />
          </div>
          
          {/* Theme Toggle */}
          <div className="theme-toggle ml-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
                isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 glow-icon" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 