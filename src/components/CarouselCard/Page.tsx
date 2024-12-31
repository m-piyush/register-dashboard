import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext
} from "@/components/ui/carousel"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CarouselData } from '@/data/Data'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { Button } from '../ui/button'
function CarouselCard
    () {
    return (
        <>
            <div className='bg-[#1C4670] px-10 py-10'>
                <h1 className='text-white text-xl font-bold my-4'>What peoples says about us </h1>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Image src='/carousel-1.svg' alt='Client' width={500} height={300} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Image src='/carousel-1.svg' alt='Client' width={500} height={300} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Image src='/carousel-1.svg' alt='Client' width={500} height={300} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Image src='/carousel-1.svg' alt='Client' width={500} height={300} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Image src='/carousel-1.svg' alt='Client' width={500} height={300} />
                        </CarouselItem>

                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="container mx-auto px-4 py-16"> {/* Container and padding */}
                <div className="text-center mb-8">
                    <h1 className="text-l font-bold text-[#EB8D15]">FAQ</h1> {/* Title color and size */}
                    <p className="text-gray-900 text-3xl">Frequent Ask Questions</p>
                </div>

                <div className="grid grid-cols-1 w-ful gap-4"> {/* Grid layout for FAQs */}
                    {CarouselData.map((item, index) => (
                        <Collapsible key={index} className='rounded-lg shadow p-2 bg-white'>
                            <CollapsibleTrigger className='flex w-full items-center '>
                                <div className="flex w-full justify-start font-semibold py-4 items-center">
                                    <h1 className='flex justify-between w-full'>{item.title} <FaArrowRight /> </h1>
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p>{item.description}</p>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </div>
                <div className='w-full flex justify-center items-center my-5'>
                    <Button className='text-white bg-[#1C4670] flex justify-center items-center'>Show more <FaArrowRight /> </Button>
                </div>
            </div>

        </>
    )
}

export default CarouselCard
