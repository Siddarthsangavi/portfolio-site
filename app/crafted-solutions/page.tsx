'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiExternalLink, FiInfo, FiSettings, FiDownload } from 'react-icons/fi';
import Image from 'next/image';

export default function CraftedSolutionsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const isDarkMode = theme === 'dark';
  const [selectedTab, setSelectedTab] = useState('demo');
  const [devStoreTab, setDevStoreTab] = useState('demo');
  
  // Refs for sections
  const heroRef = useRef<HTMLElement>(null);
  const extensionRef = useRef<HTMLElement>(null);
  
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
              <span className="text-3xl md:text-4xl block mb-2">Crafted Solutions</span>
              <span className="text-5xl md:text-7xl">Tools for Developers</span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 font-['Fira_Code'] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Creating extensions, packages, and utilities that enhance developer productivity
            </p>
            <div className={`h-1 w-32 mb-8 ${
              isDarkMode ? 'bg-white/30' : 'bg-black/20'
            }`}></div>
          </div>
        </div>
      </section>
      
      {/* VS Code Extensions Heading */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-5xl font-bold mb-4 text-center font-['Fira_Code'] ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              VS Code Extensions
            </h2>
            <p className={`text-xl mb-12 text-center max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Powerful tools to enhance your development workflow in Visual Studio Code
            </p>
          </div>
        </div>
      </section>
      
      {/* VS Code Extension Showcase - Dev Store */}
      <section className="min-h-screen py-8 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <FiSettings className={`w-8 h-8 mr-3 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`} />
              <h2 className={`text-3xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Dev Store Extension
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>

            {/* Dev Store Extension Interactive Demo */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main VS Code container */}
              <div className="lg:w-4/5">
                <div 
                  className={`rounded-xl transform transition-all duration-500 h-full ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 hover:border-indigo-500/30 shadow-xl' 
                      : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-xl'
                  }`}
                >
                  {/* VS Code-like header with tabs */}
                  <div className={`flex items-center px-4 py-2 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    {/* Tabs for different content */}
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setDevStoreTab('demo')}
                        className={`px-3 py-1 rounded-t-md text-sm font-mono ${
                          devStoreTab === 'demo' 
                            ? isDarkMode
                              ? 'bg-gray-800 text-white border-t border-l border-r border-gray-700'
                              : 'bg-white text-gray-800 border-t border-l border-r border-gray-200'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        Live Demo
                      </button>
                      <button 
                        onClick={() => setDevStoreTab('tutorial')}
                        className={`px-3 py-1 rounded-t-md text-sm font-mono ${
                          devStoreTab === 'tutorial' 
                            ? isDarkMode
                              ? 'bg-gray-800 text-white border-t border-l border-r border-gray-700'
                              : 'bg-white text-gray-800 border-t border-l border-r border-gray-200'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        How to Use
                      </button>
                    </div>
                  </div>
                  
                  {/* Content based on selected tab */}
                  <div className="overflow-visible">
                    {devStoreTab === 'demo' && (
                      <div className="p-6">
                        {/* Video Showcase - Interactive Preview */}
                        <div className="mb-6">
                          <h3 className={`text-xl font-bold mb-3 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>Dev Store in Action</h3>
                          
                          <div 
                            className={`relative aspect-[16/9] w-full rounded-lg overflow-hidden group cursor-pointer ${
                              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}
                            onClick={(e) => {
                              const target = e.currentTarget;
                              const video = target.querySelector('video');
                              if (video) {
                                target.classList.add('active-video');
                                video.style.display = 'block';
                                video.controls = true;
                                video.play();
                              }
                            }}
                          >
                            {/* Video Overlay */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center ${
                              isDarkMode ? 'bg-gray-800/90' : 'bg-gray-100/90'
                            } group-[.active-video]:opacity-0 group-[.active-video]:pointer-events-none transition-opacity duration-300`}>
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                                isDarkMode ? 'bg-indigo-600/40' : 'bg-indigo-500/20'
                              } group-hover:scale-110 transition-transform duration-300`}>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-10 w-10 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`} 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                                  />
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                  />
                                </svg>
                              </div>
                              <p className={`text-base font-medium ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                              }`}>
                                Click to watch Dev Store in action
                              </p>
                              <p className={`text-xs mt-1 max-w-xs text-center ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                See how to manage and run commands across different projects
                              </p>
                            </div>
                            
                            {/* Hidden Video */}
                            <video 
                              className="w-full h-full object-cover hidden"
                              preload="none"
                            >
                              <source src="/videos/dev-store-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <h3 className={`text-xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Key Features</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Command Organization
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Create sections for different repositories/projects and add commands with descriptive labels for better organization.
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Quick Actions
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Copy commands to clipboard with one click or run commands directly in the integrated terminal with intuitive controls.
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              File Placeholders
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Use special placeholders like {'{filename}'} and {'{filepath}'} that automatically get replaced with the active file information.
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Environment Variables
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Access environment variables with {'{env:VARIABLE_NAME}'} syntax for even more powerful and flexible commands across projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {devStoreTab === 'tutorial' && (
                      <div className="p-6">
                        <div className={`p-4 mb-6 rounded-md ${
                          isDarkMode ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          <h3 className="text-lg font-semibold mb-2">Installation Guide</h3>
                          <ol className="list-decimal pl-5 space-y-4">
                            <li>
                              <strong>Method 1: VS Code Marketplace</strong>
                              <p className="mt-1">Open VS Code, go to Extensions (Ctrl+Shift+X), search for &quot;Dev Store&quot; and click Install.</p>
                            </li>
                            <li>
                              <strong>Method 2: VSIX File</strong>
                              <p className="mt-1">Download the VSIX file using the button on the right, then install in VS Code via &quot;Install from VSIX...&quot; option in the Extensions view.</p>
                            </li>
                            <li>
                              <strong>Method 3: Direct Download</strong>
                              <p className="mt-1">Download the VSIX file directly from this website and install it manually in VS Code.</p>
                            </li>
                          </ol>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>How to Use Dev Store</h3>
                        
                        <div className={`p-4 rounded-lg mb-6 ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Getting Started
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li>Click the Dev Store icon in the activity bar to open the sidebar</li>
                            <li>Click the &quot;+&quot; button to create a new section for your repository</li>
                            <li>Select a section and click the &quot;+&quot; button to add a command</li>
                            <li>Give your command a descriptive label and enter the command</li>
                          </ol>
                        </div>
                        
                        <div className={`p-4 rounded-lg mb-6 ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Using File Placeholders
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li>When creating commands, use these special placeholders:</li>
                            <li className="ml-6"><code className="bg-gray-800 text-white px-1 rounded">{'{filename}'}</code> - The filename with extension (e.g., &quot;app.js&quot;)</li>
                            <li className="ml-6"><code className="bg-gray-800 text-white px-1 rounded">{'{filepath}'}</code> - Full file path of active editor</li>
                            <li>Example: <code className="bg-gray-800 text-white px-1 rounded">npm test {'{filepath}'}</code></li>
                            <li>The placeholders will be automatically replaced when you run the command</li>
                          </ol>
                        </div>
                        
                        <div className={`p-4 rounded-lg ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Using Environment Variables
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li>Environment variables follow this syntax: <code className="bg-gray-800 text-white px-1 rounded">{'{env:VARIABLE_NAME}'}</code></li>
                            <li>Example: <code className="bg-gray-800 text-white px-1 rounded">node server.js --port {'{env:PORT}'}</code></li>
                            <li>The extension will look for a .env file in your workspace root</li>
                            <li>Variables will be replaced with values from the .env file</li>
                            <li>You&apos;ll see a warning if a referenced environment variable is not found</li>
                          </ol>
                        </div>
                      </div>
                    )}
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
                    Dev Store
                  </h3>
                  
                  {/* Extension image */}
                  <div className="mb-4 max-w-[120px] mx-auto">
                    <Image 
                      src="/dev-store.png" 
                      alt="Dev Store VS Code Extension"
                      width={120}
                      height={120}
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mb-6">
                    <a 
                      href="https://github.com/SiddarthSangavi/Dev-Store" 
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
                      href="https://marketplace.visualstudio.com/items?itemName=SiddarthSangavi.dev-store" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-indigo-600/70 text-indigo-300 hover:bg-indigo-500/70' 
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                    >
                      <FiExternalLink className="mr-2" /> VS Code Marketplace
                    </a>
                    <a 
                      href="/downloads/dev-store-2.0.0.vsix" 
                      download
                      className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-green-700/70 text-green-300 hover:bg-green-600/70' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      <FiDownload className="mr-2" /> Download VSIX (v2.0.0)
                    </a>
                  </div>
                  
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A powerful VS Code extension for organizing and accessing frequently used commands for different repositories. Perfect for developers who work across multiple projects with specific command needs.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Key Features
                    </h4>
                    <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Repository-based command organization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Run commands directly in terminal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Supports file and environment placeholders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Rich command display with labels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col gap-3">
                      <div className={`flex items-center mt-4 px-3 py-2 rounded-md text-xs ${
                        isDarkMode ? 'bg-gray-900/80 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <FiInfo className="mr-2 flex-shrink-0" /> 
                        <span>Perfect for developers who frequently switch between multiple projects and need quick access to common commands.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VS Code Extension Showcase Section */}
      <section ref={extensionRef} className="min-h-screen py-8 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <FiSettings className={`w-8 h-8 mr-3 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`} />
              <h2 className={`text-3xl font-bold font-['Fira_Code'] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Highlight Buddy Extension
              </h2>
              <div className={`ml-4 h-0.5 flex-grow ${
                isDarkMode ? 'bg-white/20' : 'bg-black/10'
              }`}></div>
            </div>

            {/* VS Code Extension Interactive Demo */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main VS Code container */}
              <div className="lg:w-4/5">
                <div 
                  className={`rounded-xl transform transition-all duration-500 h-full ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 hover:border-indigo-500/30 shadow-xl' 
                      : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-xl'
                  }`}
                >
                  {/* VS Code-like header with tabs */}
                  <div className={`flex items-center px-4 py-2 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    {/* Tabs for different content */}
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedTab('demo')}
                        className={`px-3 py-1 rounded-t-md text-sm font-mono ${
                          selectedTab === 'demo' 
                            ? isDarkMode
                              ? 'bg-gray-800 text-white border-t border-l border-r border-gray-700'
                              : 'bg-white text-gray-800 border-t border-l border-r border-gray-200'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        Live Demo
                      </button>
                      <button 
                        onClick={() => setSelectedTab('tutorial')}
                        className={`px-3 py-1 rounded-t-md text-sm font-mono ${
                          selectedTab === 'tutorial' 
                            ? isDarkMode
                              ? 'bg-gray-800 text-white border-t border-l border-r border-gray-700'
                              : 'bg-white text-gray-800 border-t border-l border-r border-gray-200'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        How to Use
                      </button>
                    </div>
                  </div>
                  
                  {/* Content based on selected tab */}
                  <div className="overflow-visible">
                    {selectedTab === 'demo' && (
                      <div className="p-6">
                        {/* Video Showcase - Interactive Preview */}
                        <div className="mb-6">
                          <h3 className={`text-xl font-bold mb-3 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>Highlight Buddy in Action</h3>
                          
                          <div 
                            className={`relative aspect-[16/9] w-full rounded-lg overflow-hidden group cursor-pointer ${
                              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}
                            onClick={(e) => {
                              const target = e.currentTarget;
                              const video = target.querySelector('video');
                              if (video) {
                                target.classList.add('active-video');
                                video.style.display = 'block';
                                video.controls = true;
                                video.play();
                              }
                            }}
                          >
                            {/* Video Overlay */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center ${
                              isDarkMode ? 'bg-gray-800/90' : 'bg-gray-100/90'
                            } group-[.active-video]:opacity-0 group-[.active-video]:pointer-events-none transition-opacity duration-300`}>
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                                isDarkMode ? 'bg-indigo-600/40' : 'bg-indigo-500/20'
                              } group-hover:scale-110 transition-transform duration-300`}>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-10 w-10 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`} 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                                  />
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                  />
                                </svg>
                              </div>
                              <p className={`text-base font-medium ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                              }`}>
                                Click to watch Highlight Buddy in action
                              </p>
                              <p className={`text-xs mt-1 max-w-xs text-center ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                See code highlighting with custom colors and intuitive controls
                              </p>
                            </div>
                            
                            {/* Hidden Video */}
                            <video 
                              className="w-full h-full object-cover hidden"
                              preload="none"
                            >
                              <source src="/videos/highlight-buddy-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <h3 className={`text-xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Key Features</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Multiple Color Options
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Choose from Blue, Red, Green, Purple, and customize with adjustable opacity levels (0.2 to 1.0).
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Intuitive Management
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Hover menu for quick actions, change colors on the fly, and remove highlights with simple shortcuts.
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Persistent Highlights
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Highlights persist between VS Code sessions and work across all file types, perfect for long-term code reviews and study sessions.
                            </p>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                          }`}>
                            <h4 className={`text-lg font-semibold mb-2 ${
                              isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                            }`}>
                              Advanced Capabilities
                            </h4>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Supports multiple overlapping highlights, full line highlighting, and shows highlights in the minimap for easy navigation.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedTab === 'tutorial' && (
                      <div className="p-6">
                        <div className={`p-4 mb-6 rounded-md ${
                          isDarkMode ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          <h3 className="text-lg font-semibold mb-2">Installation Guide</h3>
                          <ol className="list-decimal pl-5 space-y-4">
                            <li>
                              <strong>Method 1: VS Code Marketplace</strong>
                              <p className="mt-1">Open VS Code, go to Extensions (Ctrl+Shift+X), search for &quot;Highlight Buddy&quot; and click Install.</p>
                            </li>
                            <li>
                              <strong>Method 2: VSIX File</strong>
                              <p className="mt-1">Download the VSIX file using the button on the right, then install in VS Code via &quot;Install from VSIX...&quot; option in the Extensions view.</p>
                            </li>
                            <li>
                              <strong>Method 3: Direct Download</strong>
                              <p className="mt-1">Download the VSIX file directly from this website and install it manually in VS Code.</p>
                            </li>
                          </ol>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>How to Use Highlight Buddy</h3>
                        
                        <div className={`p-4 rounded-lg mb-6 ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Basic Usage
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li>Select text you want to highlight (or place cursor on a line)</li>
                            <li>Press <kbd className="px-2 py-1 rounded bg-gray-700 text-white text-xs">Shift+Cmd+K</kbd> (Mac) or <kbd className="px-2 py-1 rounded bg-gray-700 text-white text-xs">Ctrl+Alt+K</kbd> (Windows/Linux)</li>
                            <li>If no text is selected, the entire line will be highlighted</li>
                            <li>Hover over any highlighted text to see options for changing color or removing highlight</li>
                          </ol>
                        </div>
                        
                        <div className={`p-4 rounded-lg mb-6 ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Using Different Colors
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li>Via Command Palette (<kbd className="px-2 py-1 rounded bg-gray-700 text-white text-xs">Cmd+Shift+P</kbd>):</li>
                            <li className="ml-6">&quot;Highlight Buddy: Highlight Selection (Red)&quot;</li>
                            <li className="ml-6">&quot;Highlight Buddy: Highlight Selection (Blue)&quot;</li>
                            <li className="ml-6">&quot;Highlight Buddy: Highlight Selection (Green)&quot;</li>
                            <li className="ml-6">&quot;Highlight Buddy: Highlight Selection (Purple)&quot;</li>
                            <li>Or use hover menu to change colors of existing highlights</li>
                          </ol>
                        </div>
                        
                        <div className={`p-4 rounded-lg ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-sm border border-gray-100'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            Advanced Features
                          </h4>
                          <ol className={`list-decimal pl-5 space-y-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <li><strong>Multiple Overlapping Highlights:</strong> You can highlight code that&apos;s already highlighted</li>
                            <li><strong>Customizing Opacity:</strong> Use Command Palette and select &quot;Highlight Buddy: Highlight Selection with Opacity&quot;</li>
                            <li><strong>Full Line Highlighting:</strong> Place cursor anywhere in a line (no selection needed) and use the highlight shortcut</li>
                            <li><strong>Clearing All Highlights:</strong> Via Command Palette, select &quot;Highlight Buddy: Clear All Highlights&quot;</li>
                            <li><strong>Minimap Integration:</strong> Highlights are visible in the minimap for easy navigation</li>
                          </ol>
                        </div>
                      </div>
                    )}
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
                    Highlight Buddy
                  </h3>
                  
                  {/* Extension image */}
                  <div className="mb-4 max-w-[120px] mx-auto">
                    <Image 
                      src="/highlight-buddy.png" 
                      alt="Highlight Buddy Extension in action"
                      width={120}
                      height={68}
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mb-6">
                    <a 
                      href="https://github.com/Siddarthsangavi/vscode-code-colorizer" 
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
                      href="https://marketplace.visualstudio.com/items?itemName=SiddarthSangavi.highlight-buddy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-indigo-600/70 text-indigo-300 hover:bg-indigo-500/70' 
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                    >
                      <FiExternalLink className="mr-2" /> VS Code Marketplace
                    </a>
                    <a 
                      href="/downloads/highlight-buddy-1.2.2.vsix" 
                      download
                      className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-green-700/70 text-green-300 hover:bg-green-600/70' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      <FiDownload className="mr-2" /> Download VSIX (v1.2.2)
                    </a>
                  </div>
                  
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A powerful VS Code extension for code highlighting with multiple colors, customizable opacity, and intuitive management features. Perfect for code reviews, presentations, or personal reference.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Features
                    </h4>
                    <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Multiple color options (Blue, Red, Green, Purple)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Adjustable opacity levels (0.2 to 1.0)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Quick highlighting with keyboard shortcuts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Hover menu for quick actions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col gap-3">
                      <div className={`flex items-center mt-4 px-3 py-2 rounded-md text-xs ${
                        isDarkMode ? 'bg-gray-900/80 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <FiInfo className="mr-2 flex-shrink-0" /> 
                        <span>For the full experience, install the extension directly in Visual Studio Code.</span>
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