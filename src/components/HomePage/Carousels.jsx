import React, { useState } from 'react'
// import { HiArrowSmallLeft,  HiArrowSmallRight } from '@heroicons/react/24/solid'


function Carousels() {

    const CarouselData = [
        {
            id: 1,
            image: "/Bottega.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            SourceImg: "/Group1.png",
        },
        {
            id: 2,
            image: "/Bottega1.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            SourceImg: "/Group1.png",
        },
        {
            id: 3,
            image: "/Bottega2.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            Source: "/Group1.png",
        },
        {
            id: 3,
            image: "/Bottega3.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            Source: "/Group1.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const currentSlider = CarouselData[currentIndex]
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === CarouselData.length - 1 ? 0 : prevIndex - 1
        ))
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
        ))
    };



    return (
        <>
            <section className='grid grid-rows-4 justify-between items-center'>
               
                <div className='w-full max-w-screen-2xl mx-auto'>
                    <div className='flex items-center justify-between'>
                        <button
                            onClick={handlePrev} className='absolute left-0 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12' >
                            {/* <HiArrowSmallLeft/> */}
                        </button>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4 gap-4' >
                            <div className='w-1/4'>
                               
                                <img className='object-cover w-full h-auto' src={currentSlider.image} alt="" />
                               

                                
                                <div className='grid grid-rows-4 items-center justify-between'>
                                    <h2 className='text-2xl lg:text-4xl font-bold lg:w-[50%] leading-tight'>{currentSlider.heading}</h2>
                                    <p className='text-gray-700 lg:w-[50%] text-sm'>{currentSlider.des}</p>

                                    <p><img src={currentSlider.SourceImg} alt="" /></p>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <button onClick={handleNext} className='absolute right-0 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12 mr-20' >
                            {/* < HiArrowSmallRight/> */}
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {CarouselData.map((_, index) => (
                            <button
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                
            </section>
        </>
    )
}

export default Carousels;