import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';

const Cloud = () => {
  return (
     <div>
    <div className="flex flex-col justify-evenly px-4 sm:px-6 pt-20 lg:pt-32 lg:px-44 lg:pt-32">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Cloud Services
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">LogicMinners</span>, we offer comprehensive cloud services designed to enhance your business's efficiency, scalability, and flexibility. Our expert team leverages cutting-edge cloud technologies to deliver solutions that meet your specific needs. We specialize in:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Cloud Infrastructure: Designing and managing scalable and secure cloud environments tailored to your business requirements.</li>
          <li>Cloud Migration: Seamlessly transitioning your existing systems and data to the cloud with minimal disruption.</li>
          <li>Cloud Optimization: Enhancing the performance and cost-efficiency of your cloud infrastructure through best practices and continuous monitoring.</li>
          <li>Managed Cloud Services: Offering ongoing management and support for your cloud infrastructure, ensuring optimal performance and security.</li>
        </ul>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our team at <span className="font-semibold text-blue-600">LogicMinners</span> is dedicated to providing robust cloud solutions that drive innovation and business growth.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">LogicMinners</span> excels in various aspects of cloud services, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Public, Private, and Hybrid Cloud Solutions</li>
          <li>Cloud Security and Compliance</li>
          <li>Disaster Recovery and Backup Solutions</li>
          <li>DevOps and Continuous Integration/Continuous Deployment (CI/CD)</li>
          <li>Cloud Cost Management and Optimization</li>
          <li>Application Hosting and Management</li>
        </ul>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          We utilize leading cloud platforms such as AWS, Microsoft Azure, and Google Cloud to deliver reliable and scalable solutions tailored to your needs. Our expertise spans across various industries, ensuring we provide solutions that align with your business goals.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Partner with <span className="font-semibold text-blue-600">LogicMinners</span> to harness the power of the cloud and drive your business forward with agile and innovative solutions.
        </p>
      </div>
      <button
        className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 px-3 py-2 sm:px-2 sm:py-2"
        type="button"
      >
        <Link to="/contactus">
          Get Our Services
        </Link>
      </button>
    </div>
     <div>
      <ContactUs/>
     </div>
     </div>
    
  );
};

export default Cloud;
