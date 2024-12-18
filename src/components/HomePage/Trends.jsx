import React from 'react'

function Trends() {
  const cards = [
    {imgSrc:"/trends.png", title:"Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends1.png", title:"Little Shucker", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",img: "Group1.png"},
    
    {imgSrc:"/trends2.png", title:"Marafuku Ramen",description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png" },
    {imgSrc:"/trends3.png", title:"Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends4.png", title:"Arabia Nights", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends5.png", title:"Lokma", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends6.png", title:"The snug", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends7.png", title:"Starbelly", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." , img: "Group1.png"},
    {imgSrc:"/trends8.png", title:"Iori", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends9.png", title:"Ngalley", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends10.png", title:"diogonal", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    {imgSrc:"/trends11.png", title:"Kitoko", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", img: "Group1.png"},
    
  ]
  return (
    <section className='bg-[#F5FAFF] p-5 max-w-[1440px]'>
     <div className='container mx-auto lg:w-[80%] '>
     <h1 className='text-center lg:text-start text-[#1E1E1E] text-2xl lg:text-4xl font-bold mt-10 mb-8'>The latest trends
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4 gap-4 '>
        {
          cards.map((card, index)=> (
            <div key={index} className='flex flex-col items-center overflow-hidden '>
              <img className='w-full rounded-2xl object-cover h-[200px] ' src={card.imgSrc} alt="" />
              <div>
                  <h2 className='text-[#232323] font-semibold text-xl mt-4 mb-4 '>{card.title}</h2>
                  <p className='text-sm text-[#8F8F8F]'>{card.description}</p>
                  <img className='mt-3 mb-5' src={card.img} alt="" />
              </div>
            </div>
          ))
        }
      </div>
     </div>

    </section>
  )
}

export default Trends;