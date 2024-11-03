import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';


const DigitalMarketing = () => {
  return (
    <div className="flex flex-col justify-evenly px-4 sm:px-6 lg:px-44 pt-20  lg:pt-32 bg-gray-100">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Digital Marketing
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">Logicpulse</span>, we excel in delivering comprehensive digital marketing solutions designed to elevate your brand's online presence. Our team of marketing experts specializes in creating targeted strategies to drive engagement, conversions, and growth. We offer:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Search Engine Optimization (SEO): Enhancing your website’s visibility and ranking on search engines.</li>
          <li>Content Marketing: Crafting compelling content that resonates with your audience and boosts your brand’s authority.</li>
          <li>Social Media Marketing: Leveraging social platforms to engage with your audience and drive brand awareness.</li>
          <li>Pay-Per-Click (PPC) Advertising: Creating effective ad campaigns to drive targeted traffic and achieve measurable results.</li>
          <li>Email Marketing: Designing personalized email campaigns that nurture leads and foster customer loyalty.</li>
          <li>Analytics and Reporting: Providing insights into campaign performance and optimizing strategies for better results.</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our dedicated team at <span className="font-semibold text-blue-600">Logicpulse</span> is committed to helping your business reach its digital marketing goals with precision and creativity.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          We utilize advanced tools and techniques to deliver results that drive growth and improve ROI. Our digital marketing services include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Market Research and Strategy Development</li>
          <li>Brand Development and Positioning</li>
          <li>Campaign Management and Optimization</li>
          <li>Lead Generation and Conversion Optimization</li>
          <li>Customer Journey Mapping and Personalization</li>
          <li>Comprehensive Reporting and Analysis</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Partner with <span className="font-semibold text-blue-600">Logicpulse</span> to unlock the full potential of digital marketing and drive impactful results for your business.
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
      <ContactUs/>
    </div>
  );
};

export default DigitalMarketing;
