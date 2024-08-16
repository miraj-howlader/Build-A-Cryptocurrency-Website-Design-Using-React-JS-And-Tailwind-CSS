import React from 'react';

import Image from '../assets/img/hero-img.png'
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return <section>
    <div className="container mx-auto">
      <div className=' flex flex-col items-center lg:flex-row'>
        {/* hero text  */}
        
        <div className=' flex-1'>
          {/* badge text  */}
          <div className=' bg-white/10 p-1 mb-6 rounded-full
           pl-1 pr-3 max-w-[365px]'
           data-aos='fade-down'
           data-aos-delay='400'
           >
            <div className=' flex items-center justify-between text-sm
             lg:text-base'>
              <div className=' bg-white text-darkblue
               rounded-full font-medium py-1 px-4'>75% SAVE</div>
              <div>For the Block Friday Weekend</div>
            </div>
          </div>
          <h1
           data-aos='fade-down'
           data-aos-delay='400'
           className='text-[32px] lg:text-[64px] font-bold
           leading-tight mb-6'>Fastest & secure platform to invest in crypto.</h1>
          <p
           data-aos='fade-left'
           data-aos-delay='600'
           className=' max-w-[440px] leading-relaxed mb-8'>Buy and sell cryptocurrencies, trusted my 10M
             Wallets with over $30 billion in transactions.
          </p>
          <button
           data-aos='fade-right'
           data-aos-delay='400'
           className='btn gap-x-6'>Try fro free
            <FaArrowRight className=' text-2xl lg:text-3xl
            ' />
          </button>
        </div>
        {/* hero img  */}
        <div
         data-aos='fade-left'
           data-aos-delay='400'
         className=' flex-1'>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
