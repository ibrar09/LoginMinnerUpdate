import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

import '../../styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (to) => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6 lg:py-6">
        <div className="flex items-center">
          <span className="text-lg font-medium text-gray-900 hover:text-blue-500">LOGICMINNERS</span>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('home')}>
            Home
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('about-us')}>
            About Us
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('services')}>
            Services
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('awards')}>
            Awards
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('our-team')}>
            Our Team
          </RouterLink>
          <RouterLink to="/" className="nav-link" onClick={() => handleNavigation('remote-resources')}>
            <button className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4 sm:mt-0 px-3 py-2 sm:px-2 sm:py-2">
              Remote Resources
            </button>
          </RouterLink>
        </div>

        <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="flex flex-col items-start space-y-4 px-4 py-2">
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('home')}>
            Home
          </RouterLink>
          <RouterLink to="/about-us" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('about-us')}>
            About Us
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('services')}>
            Services
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('awards')}>
            Awards
          </RouterLink>
          <RouterLink to="/" className="nav-link text-sm font-medium text-blue-gray-900" onClick={() => handleNavigation('our-team')}>
            Our Team
          </RouterLink>
          <RouterLink to="/" className="nav-link" onClick={() => handleNavigation('remote-resources')}>
            <button className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4 sm:mt-0 px-3 py-2 sm:px-2 sm:py-2">
              Remote Resources
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
