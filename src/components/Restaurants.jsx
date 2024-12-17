import { button } from '@nextui-org/react';
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Restaurants() {
    const location = useLocation();
    const Navigate = useNavigate();

    const RestaurantsData = [
        {
            img: "/restaurants.png",
            title: "The snug",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants1.png",
            title: "Bottega",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants2.png",
            title: "Little Shucker",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants3.png",
            title: "Lokma",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants4.png",
            title: "Starbelly",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants5.png",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },
        {
            img: "/restaurants6.png",
            title: "Arabia Nights",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            imgSrc: "/Group1.png",
        },

    ];
    return (
        <>
            <section className='max-w-[1440px] mt-16'>
                <div className='lg:w-[70%] mx-auto '>
                    <p className='text-sm mb-2 '>Home / All restaurants</p>
                    <div className='flex flex-row gap-7'>
                    <h1 className='text-2xl font-bold text-[#1E1E1E] mb-6'>best restaurants in singapore</h1>
                    {location.pathname === '/restaurants' ? (
                            <button onClick={()=> Navigate("/restaurants/bellaitalia")} className='border border-[#5E5E5E] rounded-3xl px-4 py-1'>
                                Sort
                            </button>
                        ) : (
                            <button>Sort</button>
                        )
                    }
                    </div>
                    <div className='flex flex-row justify-between'>
                    <div>
                    {RestaurantsData.map((data, index) => (
                            <div key={index} className='flex flex-row gap-2 mb-3'>
                                <img className='w-52 h-52 ' src={data.img} alt="" />
                                <div>
                                <h2 className='text-xl text-[#1E1E1E] lg:w-[50%] leading-tight font-semibold mb-3'>{data.title}</h2>
                                <p className='text-sm text-[#5E5E5E] mb-3 lg:w-[70%]'>{data.des}</p>
                                <img className='mb-3' src={data.imgSrc} alt="" />
                                </div>
                            </div>
                        ))}
                        <button className='bg-primary text-white px-5 py-2 rounded-full  flex mb-20'>Show more</button>
                        </div> 
                             <div>
                            <img className='w-full h-[1000px] rounded-2xl object-cover' src="/restaurantsImg.png" alt="" />
                        </div>  

                    </div>
                </div>

            </section>
        </>
    )
}

export default Restaurants