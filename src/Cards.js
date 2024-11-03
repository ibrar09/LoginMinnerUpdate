import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="w-64  max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  dark:border-gray-700 flex flex-col items-center justify-between p-5">
      <div className="w-full flex justify-center mb-4">
        <img className="rounded-t-lg w-40 h-40 object-cover" src={image} alt={title} />
      </div>
      <div className="text-center flex flex-col items-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
      <Link 
        to={link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
    </div>
  );
};

export default Card;
