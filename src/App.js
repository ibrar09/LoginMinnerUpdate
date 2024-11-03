import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Awards from './Components/Awards/Awards';
import RemoteResources from './Components/RemoteResources/RemoteResources';
import Footer from './Components/Footer/Footer';
import WebDevelopment from './Subcomponents/Webdevelopment';
import AppDevelopment from './Subcomponents/Appdevelopment';
import SEO from './Subcomponents/Seo';
import DigitalMarketing from './Subcomponents/DigitalMarketing';
import AI from './Subcomponents/Ai';
import Cloud from './Subcomponents/Cloud';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUsComponent from './Components/AboutUs/AboutUs'; // Added import

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="home">
                <Home />
              </Element>
              <Element name="about-us">
                <AboutUs />
              </Element>
              <Element name="services">
                <Services />
              </Element>
              <Element name="awards">
                <Awards />
              </Element>
              <Element name="our-team">
                <Team />
              </Element>
              <Element name="remote-resources">
                <RemoteResources  />
              </Element>
              <Footer />
            </>
          }
        />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutuscomponent" element={<AboutUsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
