import React from 'react';
import './Team.css';  // Import the CSS file

const TeamCard = ({ image, name, position }) => {
  return (
    <div className='flex flex-col items-center pb-6 bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow-lg p-4'>
      <img className="w-54 h-48 object-cover rounded-t-lg" src={image} alt={name} />
      <div className="text-center mt-4">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">{name}</h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 truncate">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
