import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='container mx-auto p-6 pt-10 lg:px-30 lg:py-12'>
    
      <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:mt-6 lg:mb-6'>
        <div className='w-full lg:w-2/3 lg:pr-8'>
          <div className='text-4xl font-bold mb-6 text-gray-900 text-center lg:text-left'>
            <h1 className=''>About Us</h1>
          </div>
          <p className='text-base lg:text-lg text-center lg:text-left'>
            At <span className="font-semibold text-blue-600">LogicMinners</span>, we lead in technological advancement, delivering top-tier products <br />
            and transformative tech services. Our commitment to excellence drives us to innovate, <br />
            shaping the digital landscape and ensuring our clients stay ahead in an evolving world.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 mt-6 lg:mt-16'>
          <button
            className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 px-3 py-2 sm:px-2 sm:py-2"
            type="button"
          >
            <Link to="/Aboutuscomponent">
              REQUEST NOW
            </Link>
          </button>
        </div>  
      </div>
   
    </div>
  );
}

export default AboutUs;
