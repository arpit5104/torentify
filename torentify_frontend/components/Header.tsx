import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SkillPopup from './SkillPopup';

const Header: React.FC = () => {
  const [isSkillOpen, setIsSkillOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentLocation = searchParams.get('location')? searchParams.get('location')!.toUpperCase(): 'All Countries';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (
      savedTheme === 'dark' ||
      (!savedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLocationChange = (loc: string) => {
    const params = new URLSearchParams(searchParams);

    if (loc === "All Countries") {
      params.delete("location");
      navigate("/jobs");
    } else {
      params.set("location", loc.toLowerCase());
      navigate(`/jobs?${params.toString()}`);
    }

    setIsLocationOpen(false);
  };

  const locations = ["All Countries", "US", "CANADA", "UK"];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 ">
      
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Torentify Logo"
            className="w-9 h-9 md:w-12 md:h-12"
          />
          <span className="text-lg md:text-2xl font-black text-gray-900 dark:text-white">
            Torentify
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold ${
                pathname === link.path
                  ? 'text-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* LOCATION */}
          <div className="relative hidden sm:block">

            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="px-3 py-2 text-sm border rounded-lg bg-white dark:bg-gray-800"
            >
              {currentLocation}
            </button>

            {isLocationOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded-lg shadow-lg">

                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationChange(loc)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {loc}
                  </button>
                ))}

              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">

          <nav className="flex flex-col px-4 py-4 space-y-4">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="text-gray-700 dark:text-gray-300 font-semibold"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE LOCATION */}
            <div className="pt-2 border-t">

              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationChange(loc)}
                  className="block w-full text-left py-2 text-sm"
                >
                  {loc}
                </button>
              ))}

            </div>

          </nav>

        </div>
      )}

      {/* <SkillPopup isOpen={isSkillOpen} onClose={() => setIsSkillOpen(false)} /> */}
    </header>
  );
};

export default Header;