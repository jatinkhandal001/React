import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Simple visitor counter using localStorage
    const count = localStorage.getItem('visitorCount');
    const currentCount = count ? parseInt(count) + 1 : 1;
    setVisitorCount(currentCount);
    localStorage.setItem('visitorCount', currentCount.toString());
  }, []);

  return (
    <footer className={`py-8 border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`flex items-center justify-center space-x-2 mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Jatin Khandal</span>
          </p>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © 2026 All rights reserved. | Visitors: {visitorCount.toLocaleString()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;