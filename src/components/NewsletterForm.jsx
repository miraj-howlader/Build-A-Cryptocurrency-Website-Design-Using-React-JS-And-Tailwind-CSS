import React from 'react';

const NewsletterForm = () => {
  return <form  className=' flex-1 flex flex-col items-start w-full
   gap-y-6 lg:flex-row lg:gap-x-10'>
    <input className=' input text-base text-white
     placeholder:text-white placeholder:text-base' type="text" placeholder='Enter your email' />
    <button className='btn bg-white text-darkblue
     hover:bg-white/70'>Subscribe</button>
  </form>;
};

export default NewsletterForm;
