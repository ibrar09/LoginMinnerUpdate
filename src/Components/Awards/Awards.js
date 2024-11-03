import React from 'react';
import Card1 from './Card1';

function Awards() {
  return (
    <div className='px-8  lg:px-12'>
      <div className='flex flex-col sm:flex-row justify-around lg:px-20 gap-6 lg:pt-16 lg:pb-12 '>
        <div className='flex flex-col mb-8  sm:mb-0'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
            Awards
          </h1>
          <p className='pt-2 text-sm sm:text-base md:text-lg'>
            We have earned a global reputation for our expertise in creating
            high-quality products. Our achievements have been acknowledged with
            prestigious awards from industry leaders, and our Google and App Store-compatible
            Universal TV Remote App is amassing a global user base of over 150 million.
            Likewise, our other fruitful innovations are also consistently
            delivering remarkable results and driving novel growth within the tech industry.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center sm:flex-row gap-4 sm:py-6 lg:pt-10'>
        <Card1 Numb="33" title="NOTHING" />
          <Card1 Numb="33" title="NOTHING" />
          <Card1 Numb="33" title="NOTHING" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
