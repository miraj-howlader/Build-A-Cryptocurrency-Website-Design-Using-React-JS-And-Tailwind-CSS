import React from 'react';

const CalcForm = () => {
  return <div
  data-aos='fade-right'
  data-aos-delay='400'
   className=' w-full bg-white max-w-[942px] mx-auto rounded-2xl
   text-darkblue p-12 shadow-primary'>
    {/* form  */}
    <form className=' flex flex-col lg:flex-row lg:justify-between
     lg:items-center space-y-12 lg:space-y-0'>
      <input
      className='input placeholder:text-darkblue'
       type="text" placeholder='Enter your hash rate' />
      <select className='select'>
        <option value="">TH/s</option>
        <option value="">H/s</option>
        <option value="">KH/s</option>
        <option value="">MH/s</option>
        <option value="">GH/s</option>
      </select>
      {/* btn  */}
      <button className='btn text-white px-8 flex self-start'>Calculate</button>
    </form>
    <div className=' mt-24'>
      <div className=' text-blue font-medium mb-4'>ESTIMIDED 24 HOUR REVENUE:</div>
      <div className=' text-[32px] font-bold mb-3'>
        0.055 130  ETH <span className=' text-blue'>($1275)</span>
      </div>
      <div className=' text-gray-500 tracking-[1%]'>
        Revenue will change based on mining difficulty and
        Ethereum price
      </div>
    </div>
  </div>;
};

export default CalcForm;
