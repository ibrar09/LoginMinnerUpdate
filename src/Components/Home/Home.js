import React from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
<div className="relative flex items-center justify-center bg-gray-100  bg-cover bg-center mt-[60px] sm:mt-[60px] lg:mt-[100px] pt-8 sm:pt-12 lg:pt-16">
      <div className="relative z-10 text-center text-gray-800 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          LOGIC MINNERS
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          Mining the Best in Software Solutions
        </p>
        <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
           At LogicMinners, we lead in technological advancement,<br />
          delivering top-tier products and transformative tech services.<br />
          Our commitment to excellence drives us to innovate,
          shaping <br /> the digital landscape and ensuring our clients stay ahead in an evolving world.
        </p>
        <div className='flex flex-col sm:flex-row sm:justify-center sm:space-x-4 pt-8 sm:pt-14'>
          <ScrollLink to="services" smooth={true} duration={500}>
            <button
              className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 px-3 py-2 sm:px-4 sm:py-2"
              type="button"
            >
              VIEW SERVICES
            </button>
          </ScrollLink>
          <button
            className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4 sm:mt-0 px-3 py-2 sm:px-4 sm:py-2"
            type="button"
          >
           <Link to="/contactus">
        CONTACT US
    </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
