import React from 'react'
import { Button } from '../ui/button'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Image from 'next/image'
import { RegisterData, CustomerData } from '@/data/Data'
import { Input } from "@/components/ui/input"
import { FaCircleCheck } from "react-icons/fa6";
function ContactPage() {
    return (
        <div>
            <div className="bg-[#1C4670] px-6 py-10 flex flex-col md:flex-row items-center md:items-start h-auto md:h-[400px] overflow-hidden">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Manage Your Services by Your Mobile Phone
                    </h1>
                    <p className="text-white text-base md:text-lg mb-6">
                        Download our app to manage and track your services. Our app enables you
                        to stay in touch with our experts and aids you in tracking your progress.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#d9dadc] flex items-center gap-2">
                            <FaApple color="#A5C937" size={24} />
                            <span>
                                <p className="text-xs sm:text-sm">Get it on</p>
                                <p className="text-xs sm:text-sm">App Store</p>
                            </span>
                        </button>
                        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#d9dadc] flex items-center gap-2">
                            <FaGooglePlay color="#A5C937" size={24} />
                            <span>
                                <p className="text-xs sm:text-sm">Get it on</p>
                                <p className="text-xs sm:text-sm">Play Store</p>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        alt="Mobile App"
                        src="/Contact-App.svg"
                        width={400}
                        height={400}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
            <div className=''>
                <div className="flex flex-col justify-between items-center mb-8">
                    <h1 className="text-lg font-bold text-[#EB8D15]">Why Register karo</h1>
                    <p className="text-gray-900 text-3xl  ">Some Numbers are important</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {RegisterData.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg shadow-md p-6 text-center hover:shadow-lg bg-gradient-to-r from-orange-500 to-[#1C4670] bg-clip-text text-transparent"
                            >
                                <h3 className="text-4xl font-semibold mb-2 ">{item.Number}</h3>
                                <p className="text-gray-600 text-sm">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bg-gradient-to-r from-orange-400 to-[#1C4670] text-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-8">Welcome to your new digital reality. Now.</h1>
                    <p className="text-xl mb-8">1% OF THE INDUSTRY</p>

                    <div className="flex w-full max-w-md mx-auto items-center ">
                        <Input type="email" placeholder="Enter Your Email" className="w-full px-4 py-3" />
                        <Button className="bg-[#FFA229] text-white px-6 py-3 hover:bg-orange-400">
                            Submit
                        </Button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 mt-8">
                        <div className="flex items-center space-x-2">
                            <FaCircleCheck className="text-grey-500" />
                            <span>Instant results</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCircleCheck className="text-grey-500" />
                            <span>User-friendly interface</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCircleCheck className="text-grey-500" />
                            <span>Personalized customization</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full justify-items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white py-20 px-10'>
                {CustomerData.map((item, index) => (
                    <div className='p-8' key={index}>
                        <Image src={item.logo} alt='item' width={200} height={100} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactPage