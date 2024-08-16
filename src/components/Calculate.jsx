import React from 'react';

import CalcForm from '../components/CalcForm'
const Calculate = () => {
  return <section className='section'>
    <div className="container mx-auto">
      {/* text  */}
      <div className=' text-center'>
        <h2
        data-aos='fade-up'
        data-aos-delay='450'
         className='section-title'>Check how much you can earn</h2>
        <p
        data-aos='fade-right'
        data-aos-delay='450'
         className='section-subtitle text-lg mb-16
         max-w-[622px] mx-auto'>Let's check your hash rate to see how much you
          will earn today.
        </p>
      </div>
      {/* form  */}
      <CalcForm />
    </div>

  </section>;
};

export default Calculate;
