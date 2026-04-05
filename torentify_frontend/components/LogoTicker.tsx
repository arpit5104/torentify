
import React from 'react';
import { COMPANIES } from '../constants';

const LogoTicker: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-gray-400 dark:text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">
          Empowering teams at the world's most innovative companies
        </p>
      </div>
      <div className="relative flex">
        <div className="flex space-x-20 animate-scroll-left hover:[animation-play-state:paused]">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale opacity-40 dark:opacity-20 hover:grayscale-0 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 transform hover:scale-110">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-8 md:h-10 w-auto object-contain dark:invert dark:brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
