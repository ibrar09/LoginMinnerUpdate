import React from 'react';
import Slider from 'react-slick';
import TeamCard from './TeamCard';
import Ibrar from '../../Images/Ibrar.png';
import Izhar from '../../Images/Izhar.jpeg';
import Junaid from '../../Images/Junaid.jpeg';
import Faisal from '../../Images/Faisal.jpeg';
import Mohsin from '../../Images/Mohsin.jpeg';
import Hamza from '../../Images/hamza.jpeg';
import Yahya from '../../Images/yahya.jpeg';
import Maaz from '../../Images/Maaz.jpeg';
import Asghar from '../../Images/Asghar.jpeg';
import Majeed from '../../Images/Majeed.jpeg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    { image: Asghar, name: 'Asghar Khan', position: 'Chief Executive Officer (CEO) ' },
    { image: Izhar, name: 'Izhar Yousafzai', position: 'SEO Expert | TeamLead' },
    { image: Faisal, name: 'Faisal Jamal', position: 'Mobile App Developer' },
    { image: Mohsin, name: 'Mohsin Hamza', position: 'Mobile App Developer | Team Lead' },
    { image: Hamza, name: 'Hamza Khan', position: 'Graphic Designer' },
    { image: Junaid, name: 'Junaid Khan', position: 'Web Developer' },
    { image: Yahya, name: 'Yahya Khan', position: 'Web Developer | Co-Founder' },
    { image: Ibrar, name: 'Ibrar Ahmad', position: 'Web Developer | Co-Founder' },
    { image: Maaz, name: 'Maaz Khan', position: 'Web Developer' },
    { image: Majeed, name: 'Member 10', position: 'Digital Marketer' },
  ];

  return (
    <div className='container mx-auto px-4 pb-4 lg:pb-12 lg:pt-12'>
      <h1 className='text-4xl font-bold text-center mb-8'>Team LogicMinners</h1>
      <div className='w-full max-w-5xl mx-auto relative'>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className='p-2'>
              <TeamCard image={member.image} name={member.name} position={member.position} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
