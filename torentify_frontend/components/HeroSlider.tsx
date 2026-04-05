import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px] w-full overflow-hidden bg-gray-900">

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div key={idx} className="min-w-full h-full relative">

            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">

              {current === idx && (
                <div className="max-w-xl md:max-w-2xl text-white">

                  {/* Accent */}
                  <p className="text-blue-400 font-bold uppercase tracking-widest mb-2 sm:mb-3 text-xs sm:text-sm animate-in slide-in-from-left duration-700">
                    {slide.accent}
                  </p>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight animate-in slide-in-from-left duration-1000 delay-200">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6 md:mb-8 animate-in slide-in-from-left duration-1000 delay-400">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 animate-in fade-in duration-1000 delay-700">

                    <button
                      onClick={() => navigate('/jobs')}
                      className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg md:rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg"
                    >
                      View Latest Jobs
                    </button>

                    <button
                      onClick={() => navigate('/about')}
                      className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg md:rounded-xl font-bold border border-white/20 transition-all"
                    >
                      Explore Talents
                    </button>

                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              current === idx
                ? 'w-8 sm:w-10 bg-blue-600'
                : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;