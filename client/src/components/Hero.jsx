import React from 'react'
import { categories } from '../utils/constants'

const Hero = () => {
    return (
        <div className='h-auto'>
            <div className='bg-hero-pattern bg-cover bg-center h-[62vh] flex items-center'>
                <div className='flex flex-col h-36 px-5'>
                    <h1 className='text-xl font-bold text-gray-700'>#Big Fashion Sale</h1>
                    <h1 className='font-bold text-3xl tracking-tighter'>Limited Time Offer!</h1>
                    <h1 className='font-bold text-3xl tracking-tighter'>Upto <span className='italic text-pink-500'>50%</span> OFF!</h1>
                    <h1 className='text-xl font-bold text-gray-700'>Redefine Your Everyday Style</h1>
                </div>
            </div>
            <div className='w-full h-[33vh] py-6 px-2 md:h-[175px] flex flex-wrap items-center justify-center md:py-2 md:px-6 overflow-x-auto md:overflow-x-hidden'>
                {categories.map((category) => (
                    <div key={category.name} className='w-[14%] h-[45%] mx-4 md:w-auto md:h-auto md:mx-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
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