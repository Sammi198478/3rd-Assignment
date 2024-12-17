import React from 'react'

function Filter() {
    const Items = [
        {
            img: "/user.png",
            title: "Wei Jie",
            Aria: "Singapore, Little india",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Mei Ling",
            Aria: "Singapore, Orchad boulevard",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Wei Ting",
            Aria: "Singapore, Toa Payoh",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Wei Xiong",
            Aria: "Singapore, Takashimaya",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Ming Wei",
            Aria: "Singapore, Little india",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Xin Yi",
            Aria: "Singapore, Zen rooms",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Zhi Hao",
            Aria: "Singapore, Boon Keng",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Li Hua",
            Aria: "Singapore, DLLM loklok",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },
        {
            img: "/user.png",
            title: "Si Ying",
            Aria: "Singapore, Bedemeer",
            imgSrc: "/Group1.png",
            para: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",

        },


    ]
  return (
    <>
    <section>
        <div className='flex lg:flex-row sm:flex-cols-1 container mx-auto lg:w-[80%] mt-24 shadow-2xl gap-6 border'>
            <div >
                {Items.map((item, i)=>(
                    <div key={i}>
                        <img className='mb-3 flex items-start' src={item.img} alt="" />
                        <div>
                            <h6 className='text-2xl font-bold text-[#232323]'>{item.title}</h6>
                            <span className='mb-3'>{item.Aria}</span>
                            <img className='mt-3 mb-3' src={item.imgSrc} alt="" />
                            <p className='text-sm lg:w-[50%] mb-4'>{item.para}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
        <button className='bg-primary text-white px-10 py-2 rounded-2xl flex justify-center items-center mt-16 mx-auto'>Show more reviews</button>
    </section>
    </>
  )
}

export default Filter;