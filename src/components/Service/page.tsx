import React from 'react'
import { ServiceData } from "@/data/Data"
import Image from 'next/image'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Service() {
  return (
    <div>
      <div className='flex items-center w-full flex-col my-5'>
        <h1 className='text-[#FFA229] font-bold'>WELCOME TO REGISTERKARO.IN</h1>
        <h1 className='text-gray-950 text-3xl font-extrabold'>Explore Our Services</h1>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center justify-items-center">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] md:w-[350px] h-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-gray-950 text-xl font-extrabold mb-2">{item.title}</h1>
              <p className="text-gray-600 text-base mb-4">{item.description}</p>
              <h1 className="flex gap-4 items-center justify-center text-gray-600 text-sm font-bold cursor-pointer hover:text-blue-600 transition-colors duration-200">
                Learn more <FaRegArrowAltCircleRight />
              </h1>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Service
