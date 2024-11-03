import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Components/ContactUs/ContactUs';

const MobileAppsDevelopment = () => {
  return (
    <div>
    <div className="flex flex-col justify-evenly pt-20 px-4 sm:px-6 lg:px-44 lg:pt-32">
      <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Mobile Apps Development
      </h1>
      <div className="font-normal">
        <p className="sm:text-lg lg:text-xl text-gray-700 mb-6">
          The mobile apps development landscape is expanding rapidly, with a growing number of applications emerging on popular platforms like Android, iOS, and Windows. As a forward-thinking business, capturing this dynamic market is crucial. Mobile devices are increasingly being used to access a wide range of information, making it essential to stay ahead of the trends.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          At <span className="font-semibold text-blue-600">LogicMinners</span>, we are committed to developing high-quality mobile applications using the latest techniques and trends. Our expert team stays up-to-date with industry advancements to ensure that your apps reach a global audience efficiently and effectively.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          We focus on simplifying users' daily routines by delivering essential, high-quality applications. Our portfolio includes top-rated apps available on Google Play and the App Store, with over 55 million global users.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our expertise spans native Android and iOS development, hybrid and cross-platform solutions, and more. We offer services such as:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Greenfield mobile app development for Android & iOS</li>
          <li>Latest upgrades and app optimization</li>
          <li>Interactive UI/UX design services</li>
          <li>Android widget development</li>
          <li>Server-side APIs</li>
          <li>Legacy app modernization</li>
          <li>Testing and quality assurance</li>
        </ul>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          We excel in developing a variety of app types, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Finance and gaming apps</li>
          <li>mCommerce, telemedicine, and mHealth apps</li>
          <li>Conferencing and social media apps</li>
          <li>Lifestyle and utility apps</li>
          <li>Kids’ entertainment and educational apps</li>
        </ul>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Awards and Recognitions:
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Our notable achievements include the development of a Universal TV Remote app, compatible with both iOS and Android, which boasts a network of over 120 million users worldwide. Additionally, our CV Maker resume builder, fundraising record keeper, and auto-silence at prayer time apps have garnered significant acclaim in the tech industry.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">LogicMinners</span> has been honored with Top App Development Agency awards from Payoneer, Huawei, PIPC, and the KP Minister of ST and IT, reflecting our commitment to excellence in mobile app development.
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

export default MobileAppsDevelopment;
