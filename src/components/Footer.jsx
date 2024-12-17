import React from 'react'

function Footer() {
  return (
    <>
    <section className='max-w-[1440px]'>
        <div className='flex flex-col lg:flex-row sm:flex-cols-1 justify-between items-center  lg:w-[70%] mx-auto container mt-20 mb-10 shadow-lg border'>
            <div className=''>
                <h3 className='text-[#1E1E1E] text-xl font-bold'>About</h3>
                <span className='text-[#5E5E5E] text-sm'>About MyFeedback</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Investor Relations</span>
            </div>
            <div>
                <h3 className='text-[#1E1E1E] text-xl font-bold'>MyFeedback</h3>
                <span className='text-[#5E5E5E] text-sm'>MyFeedback for business</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Collections</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Talk</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Events</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>MyFeedback blog</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Support</span> <br/>
                <span className='text-[#5E5E5E] text-sm'>Developers</span> <br/>
            </div>
            <div>
                <h3 className='text-[#1E1E1E] text-xl font-bold'>Languages</h3>
                <span className='text-[#5E5E5E] text-sm'>English</span>
                <h4 className='text-[#1E1E1E] text-xl font-bold'>Countries</h4>
                <span className='text-[#5E5E5E] text-sm'>Singapour</span>
            </div>
            
        </div>
        <p className='text-[#1E1E1E] flex justify-center mb-10'>Copyright@ Septembre 2023 myfeedback, designed by scott</p>
    </section>
    </>
  )
}

export default Footer;