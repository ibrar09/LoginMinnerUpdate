import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';

const Webdevelopment = () => {
  return (
    <div>
    <div className="bg-gray-100 flex flex-col justify-evenly py-12 px-4 lg:pt-32 sm:px-6 lg:px-44">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Web Development
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">LogicMinners</span>, we excel in creating stunning and functional websites tailored to your needs. Our skilled team of designers and developers is adept at leveraging the latest technologies to deliver exceptional web solutions. We specialize in:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Static Websites: Simple, efficient, and ideal for conveying clear messages with minimal interactivity.</li>
          <li>Dynamic Websites: Engaging and interactive, tailored to meet the needs of users and businesses alike.</li>
          <li>E-Commerce Websites: Robust platforms designed for seamless online transactions and enhanced user experience.</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our dedicated team is committed to understanding and addressing your business requirements, providing comprehensive services across both front-end and back-end development.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">LogicMinners</span> is renowned for its all-encompassing web development services, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Web Design</li>
          <li>Repair and Maintenance</li>
          <li>Web API and Integration</li>
          <li>Latest Upgrades</li>
          <li>Technical SEO</li>
          <li>Domain Management</li>
          <li>Web Hosting</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          We pride ourselves on our proficiency in integrating cutting-edge Front-End technologies such as React.js, Vue.js, HTML5, CSS, and TypeScript, along with Back-End technologies like Node.js, Java, and PHP. Our expertise spans across multiple regions, including Canada, the USA, the UK, Bangladesh, Pakistan, and Australia.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700">
          Our team at <span className="font-semibold text-blue-600">LogicMinners</span> is dedicated to providing high-performance, intuitive web solutions that align with your business goals and drive growth.
        </p>
      </div>
      <div className="pt-8 flex justify-center">
        <button
          className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 px-3 py-2 sm:px-2 sm:py-2"
          type="button"
        >
          <Link to="/contactus">
            Get Our Services
          </Link>
        </button>
      </div>
     
    </div>
   
       <ContactUs/>
    </div>
  
  );
};

export default Webdevelopment;
