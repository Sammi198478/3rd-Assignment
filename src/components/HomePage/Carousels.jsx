import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



function Carousels() {

    const CarouselData = [
        {
            id: 1,
            image: "/Bottega.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            Source: "/Group1.png",
        },
        {
            id: 2,
            image: "/Bottega1.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            Source: "/Group1.png",
        },
        {
            id: 3,
            image: "/Bottega2.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            Source: "/Group1.png",
        },
        {
            id: 3,
            image: "/Bottega3.png",
            heading: "Bottega",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
            <section className='max-w-[1440px] bg-primary mx-auto lg:w-[80%]'>
                <div className='flex items-center justify-between'>
                    <button
                        onClick={handlePrev} className='relative left-0 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12' >
                        <FaChevronLeft />
                    </button>


                    <div className='' >
                        <h1 className='text-2xl text-white font-bold mt-8'>Find Tha Best Restaurent rating below</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4 gap-4 justify-center items-center'>

                            {
                                CarouselData.map((data, index) => (
                                    <div key={index} className=''>
                                        <img className='object-cover w-[400px] h-[200px] rounded-2xl' src={data.image} alt="" />
                                        <div className='bg-white '>
                                            <h2 className='text-xl font-semibold text-black mb-2'>{data.heading}</h2>
                                            <p className='text-gray-700 text-sm mb-2'>{data.des}</p>

                                            <p><img src={data.Source} alt="" /></p>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleNext} className='absolute right-10 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12 mr-24' >
                            <FaChevronRight />
                        </button>
                    </div>
                    
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