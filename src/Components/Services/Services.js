import React from 'react';
import Card from '../../Cards';
import web from '../../Images/webdevlopment.jpg';
import app from '../../Images/appdevelopment.jpg';
import AI from '../../Images/Ai.jpg';
import cloud from '../../Images/Cloud.jpg';
import digital from '../../Images/digital.jpg';
import seo from '../../Images/seo.png';


function Services() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-24' style={{ backgroundColor: '#F5F5F5' }}>
      <div className='text-center flex flex-col p-4 sm:p-6'>
        <div className='text-2xl sm:text-3xl font-semibold mb-4'>
          What WE DO
        </div>
        <div className='text-base sm:text-lg'>
          Our mission is to shape the digital future with innovative strategies,
          <br />
          ensuring our clients lead their industries and succeed in a rapidly evolving world.
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-4 sm:gap-6 p-4 sm:p-6'>
        <Card
          image={app}
          title="Mobile App Development"
          description="The mobile apps development landscape is expanding rapidly."
          link="/Appdevelopment"
        />
        <Card
          image={web}
          title="Web Development"
          description="We excel in creating stunning and functional websites tailored to your needs."
          link="/webdevelopment"
        />
        <Card
          image={AI}
          title="Artificial Intelligence"
          description="We are at the forefront of AI development, delivering intelligent solutions."
          link="/ai"
        />
        <Card
          image={seo}
          title="SEO"
          description="In the digital era, achieving online visibility is crucial for success."
          link="/seo"
        />
        <Card
          image={digital}
          title="Digital Marketing"
          description="We excel in delivering comprehensive digital marketing solutions."
          link="/digitalmarketing"
        />
        <Card
          image={cloud}
          title="Cloud Solutions"
          description="We offer comprehensive cloud services to enhance your business."
          link="/cloud"
        />
      </div>
    </div>
  );
}

export default Services;
