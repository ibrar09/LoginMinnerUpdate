import React from 'react';
// import online from './Images/transparent.png';
import { Link } from 'react-router-dom';
import online from '../../Images/onlinetransparent.jpg';



const RemoteResources = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-12'>
      <div className='flex flex-col sm:flex-row justify-evenly items-center pt-8 pb-16 bg-gray-100'>
        <img className='bg-transparent w-48 h-48 sm:w-64 sm:h-64 object-cover mb-4 sm:mb-0' src={online} alt="Online Resources" />
        <div className='max-w-lg text-center sm:text-left'>
          <h1 className='text-3xl sm:text-4xl font-semibold mb-4'>Remote Resources</h1>
          <p className='text-base sm:text-lg pb-4'>
            In today's digital age, remote resources have become essential for businesses and individuals alike. 
            Whether you're looking for online tools, cloud services, or virtual teams, remote resources can provide 
            the flexibility and efficiency needed to succeed in a global market. Our platform offers a variety of 
            remote resources designed to help you achieve your goals from anywhere in the world.
          </p>
          <button
          className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 px-3 py-2 sm:px-2 sm:py-2"
          type="button"
        >
          <Link to="/contactus">
       REQUEST NOW
    </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default RemoteResources;
