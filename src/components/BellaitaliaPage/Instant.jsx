import React, { useState } from 'react'
import {Modal, ModalContent,  ModalBody, Button,} from "@nextui-org/react";
import {Input} from "@nextui-org/input";





function Instant() {
    const[isOpen, setIsOpen] = useState(false);
    const handleOpen = ()=>{ 
        setIsOpen(true)
    };
    const HandleClose = ()=>{
        setIsOpen(false)
    };
  return (
    <>
    <section>
        <div className='flex flex-wrap gap-3'>
            <Button variant='flat' onPress={handleOpen} className='bg-primary ml-10'>
                
                View all photos (7)
            </Button>
        </div>
        <Modal isOpen={isOpen} backdrop='blur' onClose={HandleClose} size='5xl' placement='top'>
            <ModalContent>
                <ModalBody className='px-0 py-0 mt-28'>
                    <div className='flex flex-col  w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible'>

                        {/* left side */}
                        <div className='bg-[url("")] flex flex-col bg-contain bg-no-repeat bg-center  w-full  p-8'>
                        <img className='w-full h-[400px]' src="/bellaitalia1.png" alt="" />
                        </div>
                        <div className='flex lg:flex-row-7 sm:flex-cols-1 gap-3'>
                            <img className='w-[200px] h-[200px] rounded-xl' src="/bellaitalia2.png" alt="" />
                            <img className='w-[200px] h-[200px] rounded-xl' src="/bellaitalia3.png" alt="" />
                            <img className='w-[200px] h-[200px] rounded-xl' src="/bellaitalia4.png" alt="" />
                            <img className='w-[200px] h-[200px] rounded-xl' src="/bellaitalia6.png" alt="" />
                            <img className='w-[200px] h-[200px] rounded-xl' src="/trends7.png" alt="" />
                        </div>

                       

                    </div>

                </ModalBody>
            </ModalContent>
        </Modal>
    </section>
    </>
  );
};

export default Instant;