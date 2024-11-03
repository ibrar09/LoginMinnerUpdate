import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';

const Ai = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-evenly py-32 pt-20 px-4 sm:px-6 lg:pt-32 lg:px-44">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        AI Development
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">LogicMinners</span>, we are at the forefront of AI development, delivering intelligent solutions that harness the power of machine learning and artificial intelligence. Our team of experts is proficient in creating innovative AI-driven applications and systems to meet your business needs. We specialize in:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Machine Learning: Developing algorithms and models to enable systems to learn from data and improve over time.</li>
          <li>Natural Language Processing (NLP): Creating systems that understand and respond to human language, enabling applications like chatbots and virtual assistants.</li>
          <li>Computer Vision: Implementing technology that allows computers to interpret and make decisions based on visual data.</li>
          <li>Predictive Analytics: Using data-driven insights to forecast trends and make informed business decisions.</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our team at <span className="font-semibold text-blue-600">LogicMinners</span> is dedicated to transforming your data into actionable insights and providing AI solutions that drive innovation and efficiency.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">LogicMinners</span> excels in various aspects of AI development, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>AI Strategy and Consulting</li>
          <li>Custom AI Solutions</li>
          <li>AI Model Training and Deployment</li>
          <li>Integration with Existing Systems</li>
          <li>AI-Based Data Analysis and Visualization</li>
          <li>Ethical AI and Compliance</li>
        </ul>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          We leverage advanced AI technologies and frameworks such as TensorFlow, PyTorch, and scikit-learn, to build solutions that cater to various industries, including healthcare, finance, retail, and more.
        </p>
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          Partner with <span className="font-semibold text-blue-600">LogicMinners</span> to unlock the potential of AI and achieve remarkable advancements in your business operations.
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

export default Ai;
