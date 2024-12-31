import React from 'react';
import { BlogData } from '@/data/Data';
import Image from 'next/image';
import { Button } from '../ui/button';
import { FaArrowRight } from "react-icons/fa";
function Blogs() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col justify-between items-center mb-8">
                <h1 className="text-lg font-bold text-[#EB8D15]">EXPLORE OUR BLOGS</h1>
                <p className="text-gray-600 text-3xl  ">Accelerate Digital Transformation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {BlogData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6">
                        <div className="flex flex-col gap-4">
                            <Image
                                src={item.icon}
                                alt="icon"
                                width={400}
                                height={200}
                            />
                            <div className="flex flex-col items-start">

                                <p className="text-gray-600 text-sm">{item.text}</p>
                                <h3 className="text-lg font-semibold">{item.title}</h3>

                            </div>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.key.map((key, keyIndex) => (
                                    <Button key={keyIndex} className="px-4 py-2 font-bold text-[#503678] bg-[#F9F5FF] hover:bg-[#6e49a6] rounded-md text-sm">
                                        {key}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center items-center my-5'>
                <Button className='text-white bg-[#1C4670] flex justify-center items-center'>Show more blogs <FaArrowRight /> </Button>
            </div>

        </div>
    );
}

export default Blogs;