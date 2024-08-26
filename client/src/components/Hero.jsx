import React from 'react'
import { categories } from '../utils/constants'

const Hero = () => {
    return (
        <div className='h-auto'>
            <div className="bg-hero_2 bg-cover bg-center h-[67vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
                <div className='relative h-full w-full flex flex-col items-start justify-center px-5'>
                    <h1 className='text-xl font-semibold text-gray-300 mb-2'>#Big Fashion Sale</h1>
                    <h1 className='font-semibold text-3xl tracking-tighter text-white'>Limited Time Offer!</h1>
                    <h1 className='font-semibold text-3xl tracking-tighter text-white'>Upto <span className='italic text-pink-500'>50%</span> OFF!</h1>
                    <h1 className='text-xl font-semibold text-gray-300 mt-6'>Redefine Your Everyday Style</h1>
                </div>
            </div>
            <div className='w-full h-[30vh] py-4 px-2 md:h-[145px] flex flex-wrap items-center justify-center md:py-2 md:px-6 overflow-x-auto md:overflow-x-hidden'>
                {categories.map((category) => (
                    <div key={category.name} className='w-[14%] h-[30%] mx-4 md:w-auto md:h-auto md:mx-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
                        <span className='p-3 md:w-16 md:h-16 md:p-4 bg-zinc-200 hover:-translate-y-2 duration-200 rounded-full'>
                            <img src={category.img} className='w-full h-full' />
                        </span>
                        <h1 className='text-xs md:text-base text-center h-fit font-bold'>{category.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero