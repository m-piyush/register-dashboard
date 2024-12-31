import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { ClientData } from '@/data/Data';
function Client() {
    return (
        <>
            <div className=' flex flex-col items-center justify-center p-10'>
                <h1 className='text-3xl font-extrabold '>Our Happy Clients</h1>
                <p className='text-l w-full md:3/4 py-4'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <div className='w-full flex justify-center items-center my-5'>
                    <Image src='/Client.svg' alt='Client' width={1200} height={800} />

                </div>
                <h1 className='flex gap-4 text-gray-700 font-bold'>See More <FaArrowRight /> </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly py-12 px-8 gap-2 w-full bg-[#FFA229]'>

                {
                    ClientData.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#EB5757] rounded-full flex justify-center items-center">
                                <Image src={item.icon} alt="icon" width={32} height={32} />
                            </div>
                            <h1 className="text-[#3C2109] font-bold">{item.text}</h1>
                        </div>
                    ))
}


            </div >
        </>
    )
}

export default Client