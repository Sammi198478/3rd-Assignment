import React from 'react'
import { Outlet } from 'react-router-dom';

function Nav2() {

    if(location.pathname === '/restaurants' ){return <Outlet/>};
    
    const Items = [
        {
            img: "/Vector.png",
            des: "All",
        },
        {
            img: "/Vector2.png",
            des: "Restaurants",
        },
        {
            img: "/Vector3.png",
            des: "Hotels",
        },
        {
            img: "/Vector4.png",
            des: "Home services",
        },
        {
            img: "/Vector5.png",
            des: "Shopping",
        },
        {
            img: "/Vector6.png",
            des: "Car location",
        },
        {
            img: "/Vector7.png",
            des: "Beauty & Spa",
        },
        {
            img: "/Vector8.png",
            des: "Park",
        },
        {
            img: "/Vector9.png",
            des: "museum",
        },
        {
            img: "/Vector10.png",
            des: "Car wash",
        },
        {
            img: "/Vector11.png",
            des: "Bars",
        },
        {
            img: "/Vector12.png",
            des: "Gyms",
        },
       
       ];
  return (
    <>
    <div className='max-w-[1440px]'>
    <div className="flex  sm:flex-cols-4 mt-20 mb-16 container mx-auto p-4 gap-5">
        {
           Items.map((item, index)=>(
            <div key={index} className="flex flex-col items-center overflow-hidden ">
                <img className="w-5 h-5 " src={item.img} alt="" />
                <h2 className="text-[#AFAFAF]">{item.des}</h2>
            </div>
           )) 
        }
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Nav2;