import React, { useState } from 'react'
import { Modal, ModalContent, ModalBody, Button, } from "@nextui-org/react";

function Moreinfo() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true)
    };
    const HandleClose = () => {
        setIsOpen(false)
    };
    return (
        <>
            <section className='max-w-[1440px] mx-auto mt-24'>
                <h3 className='text-2xl text-[#1E1E1E] mb-3 font-bold ml-16'>More informations</h3>

                <div className='grid grid-cols-2 mx-auto justify-center items-center lg:w-[80%]'>
                    <div className=' flex lg:flex-cols-1 sm:flex-col '>

                        <Button variant='flat' onPress={handleOpen} >
                            <p className='flex flex-row gap-2 mb-2 mr-72'><img src="/spoon.png" alt="" /><a className='underline' >See the menu</a></p>
                        </Button>

                        <p className='flex flex-row gap-2 mb-2 '><img src="/map1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="/map1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="clock1.png" alt="" />See the menu</p>
                        <p className='flex flex-row gap-2 mb-2'><img src="/Mask.png" alt="" />See the menu</p>
                        <div>
                            <div className='flex flex-row gap-3 mt-4'>
                                <img className='w-6 h-6' src="/facebook.png" alt="" />
                                <img className='w-6 h-6' src="/instagram.png" alt="" />
                                <img className='w-6 h-6' src="/tiktok.png" alt="" />
                                <img className='w-6 h-6' src="/phone.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-[500px] h-[300px]' src="/bellaitaliaMap.png" alt="" />
                    </div>
                </div>



                <Modal isOpen={isOpen} backdrop='blur' onClose={HandleClose} size='5xl' placement='top'>
                    <ModalContent>
                        <ModalBody className='px-0 py-0 mt-28'>
                            <div className='flex flex-col  w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible'>

                                {/* left side */}
                                <div className='flex flex-col bg-contain bg-no-repeat bg-center  w-full  p-8'>
                                    <img className='w-full h-[400px]' src="/menu.png" alt="" />
                                </div>
                                <h1 className='lg:text-3xl sm:text-xl text-[] font-bold flex justify-center items-center mb-4'>Menu Bella Italia</h1>
                                <div className='flex justify-center items-center'>
                                <button className='border border-[#1677BD]  rounded-2xl mb-10 px-8 py-1' >Dowload this menu</button>
                                </div>

                            </div>

                        </ModalBody>
                    </ModalContent>
                </Modal>


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