import React from 'react'

function DiscoverMore () {
  return (
    <>
    <section className='max-w-[1440px]'>
        <div className='mx-auto lg:w-[70%] '>
            <h1 className='text-2xl text-[#1E1E1E] text-center font-bold mb-4'>Discover more cool restaurants</h1>
            <button className='bg-primary text-white px-5 py-2 rounded-full items-center mx-auto flex justify-center mb-20'>Show more</button>
            {/* left side */}
            <div className='flex flex-col lg:flex-row sm:flex-cols-1 justify-between items-center  '>
            <div className=''>
                <h2 className='text-xl text-[#1E1E1E] lg:w-[50%] leading-tight font-semibold mb-5'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
                <p className='text-sm text-[#5E5E5E] mb-5 lg:w-[50%]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <button className=' text-white px-5 py-2 rounded-full items-center  flex justify-center mb-20 bg-secondary'>Explore MyFeedback business</button>

            </div>
            <div>
                <img className='rounded-2xl object-cover w-full h-auto' src="/DiscoverMore .png" alt="" />
            </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default DiscoverMore ;