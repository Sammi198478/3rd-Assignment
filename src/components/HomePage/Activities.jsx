import React from 'react'

function ActiviTies() {
  const Data = [
    {
      logo: "/user.png",
      heading: "Leslie sakho",
      para: "Canada, toronto",
    }, 
    {
      logo: "/user.png",
      heading: "Chris macari",
      para: "Singapour",
    },
    {
      logo: "/user.png",
      heading: "Jojo alba",
      para: "Kuala lumpur",
    },
  ];


  const Items = [
    {
      img: "/Group1.png",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
      imgSrc: "/avtivities.png",
      title: "Discover",

    },
    {
      img: "/Group1.png",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
      imgSrc: "/avtivities1.png",
      title: "Discover",

    },
    {
      img: "/Group1.png",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
      imgSrc: "/avtivities2.png",
      title: "Discover",

    },
  ];
  return (
    <>
    <section className='max-w-[1440px] mx-auto '>
       <div className='lg:w-[70%] mx-auto'>
        <h3 className='text-2xl font-bold text-[#1E1E1E] mx-auto'>Recents avtivities</h3>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 mb-10 container mx-auto p-4 gap-7 '>
        {Data.map((data, i)=>(
            <div key={i} className='flex flex-row justify-between items-center '>
              <img className='w-3 h-3 gap-2' src={data.logo} alt="" />
              <div className=' container mx-auto  '>
                <h6>{data.heading}</h6>
                <p>{data.para}</p>
              </div>
            </div>
          ))}



          {Items.map((item, index)=>(
            <div key={index}>
              <img className='mb-4' src={item.img} alt="" />
              <p className='mb-4 text-[#5E5E5E] text-sm'>{item.des}</p>
              <p><img className='mb-4' src={item.imgSrc} alt="" /></p>
              <h5 className='text-[#232323] '>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default ActiviTies;