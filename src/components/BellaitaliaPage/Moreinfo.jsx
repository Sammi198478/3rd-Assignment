import React from 'react'

function Moreinfo() {
    return (
        <>
            <section className='max-w-[1440px]'>
                <div className='mt-24 lg:w-[80%] mx-auto flex lg:flex-row sm:flex-cols-1 gap-20'>
                    <div>
                        <h3 className='text-2xl text-[#1E1E1E] mb-3 font-bold'>More informations</h3>
                        <p className='flex flex-row gap-2 mb-2'><img src="/spoon.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="/map1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="/map1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="clock1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="/Mask.png" alt="" />See the menu</p>
                        <div className='flex flex-row gap-3 mt-4'>
                            <img className='w-6 h-6' src="/facebook.png" alt="" />
                            <img className='w-6 h-6' src="/instagram.png" alt="" />
                            <img className='w-6 h-6' src="/tiktok.png" alt="" />
                            <img className='w-6 h-6' src="/phone.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <img className='w-[500px] h-[300px]' src="/bellaitaliaMap.png" alt="" />
                    </div>
                </div>
                <div className='flex lg:flex-row sm:flex-cols-1 gap-20 mt-20 lg:w-[80%] mx-auto'>
                    <div>
                        <p className='flex flex-row gap-2 mb-2 text-[#232323] font-semibold'><img className='w-6 h-6' src="/Group.png" alt="" />Overall rating</p>
                        <span>834 Reviews</span>
                        <img className='mt-4 w-24' src="/Group2.png" alt="" />
                    </div>
                    <div>
                        <img src="/Group3.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Moreinfo;