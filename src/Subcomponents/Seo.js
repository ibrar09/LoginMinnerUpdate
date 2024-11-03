import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';

const Seo = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-evenly py-32 pt-20 px-4 lg:pt-32 sm:px-6 lg:px-44">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Search Engine Optimization (SEO)
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          In the digital era, achieving online visibility is crucial for the success of any business. At <span className="font-semibold text-blue-600">LogicMinners</span>, we offer expert Search Engine Optimization (SEO) services designed to enhance your online presence, drive organic traffic, and improve search engine rankings.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our SEO strategies are tailored to meet the specific needs of your business and target audience. We combine industry best practices with the latest trends to deliver comprehensive SEO solutions that drive results and ensure long-term success.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our SEO services include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Keyword Research: Identifying high-value keywords to target for maximum visibility</li>
          <li>On-Page Optimization: Enhancing website elements such as meta tags, headings, and content for better search engine performance</li>
          <li>Technical SEO: Improving site architecture, loading speed, and mobile-friendliness to boost search rankings</li>
          <li>Content Creation: Developing high-quality, engaging content that attracts and retains visitors</li>
          <li>Link Building: Establishing authoritative backlinks to increase site credibility and search engine trust</li>
          <li>SEO Audits: Conducting thorough evaluations to identify and address potential issues</li>
          <li>Analytics and Reporting: Monitoring performance, tracking progress, and providing actionable insights</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">LogicMinners</span>, our goal is to help you achieve top search engine rankings and reach your target audience effectively. Our dedicated SEO team uses proven techniques and data-driven strategies to deliver measurable results and drive sustainable growth.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Partner with us to elevate your online presence and dominate search engine results with our comprehensive SEO solutions.
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

export default Seo;
