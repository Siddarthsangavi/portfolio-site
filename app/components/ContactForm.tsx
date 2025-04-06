'use client';

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ContactForm() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: error instanceof Error ? error.message : 'An error occurred' 
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label 
          htmlFor="name" 
          className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 rounded-md outline-none transition-all duration-200 ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
              : 'bg-white border border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
          }`}
        />
      </div>
      
      <div>
        <label 
          htmlFor="email" 
          className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 rounded-md outline-none transition-all duration-200 ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
              : 'bg-white border border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
          }`}
        />
      </div>
      
      <div>
        <label 
          htmlFor="message" 
          className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className={`w-full px-4 py-2 rounded-md outline-none transition-all duration-200 ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
              : 'bg-white border border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
          }`}
        />
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status.submitting}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            isDarkMode 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      {status.success && (
        <div className={`p-3 rounded-md ${
          isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
        }`}>
          Your message has been sent successfully!
        </div>
      )}
      
      {status.error && (
        <div className={`p-3 rounded-md ${
          isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'
        }`}>
          {status.error}
        </div>
      )}
    </form>
  );
} 