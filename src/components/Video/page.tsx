import React from 'react'
import { VideoData } from '@/data/Data'
import Image from 'next/image'
function VideoIntroductions() {
    return (
        <div className='bg-[#1C4670] block lg:flex p-10  md:p-20'>
            <div className='text-white w-full lg:w-1/2   ' >
                <div>
                    <h1 className='text-3xl font-bold'>Our Video Introductions</h1>
                    <p className='w-full md:w-3/4'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                </div>
                <div >
                    {VideoData.map((data, index) => (
                        <div className='flex' key={index}>
                            <Image src={data.icon} alt="icon" width={50} height={50} />
                            <div className='p-4 w-full md:w-3/4'>
                                <h3 className='font-bold text-2xl'>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center items-center  py-10  md:p-0 '>
                <Image src="Video.svg" alt="video" width={500} height={500} />
            </div>


        </div>
    )
}

export default VideoIntroductions
