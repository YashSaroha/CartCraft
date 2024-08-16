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
            <div className='h-[175px] flex items-center justify-center py-2 px-6 gap-20'>
                {categories.map((category) => (
                    <div key={category.name} className='flex flex-col items-center justify-center rounded-full cursor-pointer'>
                        <img src={category.img} className='h-16 w-16 p-4 rounded-full bg-zinc-200 hover:-translate-y-2 duration-200' />
                        <h1 className='text-center h-fit font-bold'>{category.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero