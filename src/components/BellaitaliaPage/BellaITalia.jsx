import React from 'react'
import Instant from './Instant';

function BellaITalia() {
  return (
    <>
    <section  className='max-w-[1440px]'>
    <p className='text-sm mx-auto flex justify-items-start w-[90%] mt-10'>Home / BellaItalia</p>
        <div  className='bg-[url("/bellaitalia.png")] lg:w-[1000px] lg:h-[400px] bg-cover flex flex-col justify-center mx-auto mt-7 sm-w-[400px]'>
        
            <div className='flex flex-col justify-start items-start  text-[#FFFFFF]'>
                <h1 className='w-[90%] text-2xl font-bold ml-14 mb-4'>Bella italia</h1>
                <img className='mb-4 ml-14' src="/Group1.png" alt="" />
                <p className='text-sm w-[50%] ml-14'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <p className=' flex flex-row ml-14'><img className='w-4 h-4' src="/map.png" alt="" />Singapour, Bishan-Ang Mo Kio Park </p>
                <p className=' flex flex-row ml-14'><img className='w-4 h-4' src="/clock.png" alt="" />7j/7, 08:00 - 22:00 </p>
            </div>
            <img className='mx-auto mb-4 bottom-0' src="/bellaitalia5.png" alt="" />
        </div>

        <div className='mt-24 '> 
          <div>
            <h2 className='text-2xl font-bold sm:text-xl text-[#1E1E1E] mb-3 ml-10'>Discover our magnificent place in photos</h2>
            <p className='text-sm w-[50%] mb-5 ml-10'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
          </div>
          <div className='flex lg:flex-row sm:flex-cols-1 justify-center gap-3 ml-10'>
            <div>
            <img className='rounded-xl h-[550px]' src="bellaitalia1.png" alt="" />
            <button className='bg-white text-black border rounded-full'>View all photos (7)</button>
            </div>
            
            
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 justify-center items-center '>
              
              <img className='rounded-xl' src="bellaitalia6.png" alt="" />
              <img className='rounded-xl' src="bellaitalia2.png" alt="" />
              <img className='rounded-xl' src="bellaitalia3.png" alt="" />
              <img className='rounded-xl' src="bellaitalia4.png" alt="" />
              
            </div>
          </div>
        </div>
        <Instant/>
    </section>
    </>
  )
}

export default BellaITalia;