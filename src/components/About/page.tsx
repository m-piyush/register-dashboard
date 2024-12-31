import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function About() {
    return (
        <div className='block md:flex justify-between py-10 px-6 lg:px-20 '>
            <div className='w-full sm:w-1/2  p-4 mx-auto flex flex-col justify-center items-start '>
                <h1 className='text-[#EB8D15]'>WELCOME TO REGISTERKARO.IN</h1>
                <p className='text-2xl font-bold py-4'>About <span className='text-[#EB8D15]'> Register Karo </span></p>
                <p>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.

                    I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                <Button className='bg-[#1C4670] mt-4'>Learn More <FaRegArrowAltCircleRight /> </Button>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center  py-10  md:p-0 '>
                <Image src="About.svg" alt="video" width={500} height={500} />
            </div>

        </div>
    )
}

export default About