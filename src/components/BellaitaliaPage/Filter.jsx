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
        <div>
            <div>
                {Items.map((item, i)=>(
                    <div key={i}>
                        <img src={item.img} alt="" />
                        <div>
                            <h6>{item.title}</h6>
                            <span>{item.Aria}</span>
                            <img src={item.imgSrc} alt="" />
                            <p>{item.para}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Filter;