import React from 'react';

import  FeaturesSection1 from '../components/FeaturesSection1'
import  FeaturesSection2 from '../components/FeaturesSection2'
import  FeaturesSection3 from '../components/FeaturesSection3'
const Features = () => {
  return <section className=' pt-12 lg:pt-24 bg-violet'>
    <div className="container mx-auto">
      <div className=' text-center max-w-[758px] mx-auto mb-24'>
        <h2
        data-aos='fade-up'
        data-aos-offset='400'
         className=' section-title'>Market sentiments, portfolio, and run the infrastructure
          of your choise
        </h2>
      </div>
      <FeaturesSection1 />
      <FeaturesSection2 />
      <FeaturesSection3 />
    </div>
  </section>;
};

export default Features;
