import React from 'react'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "../utils/constants";

const Quote = () => {
    return (
        <div className='h-[30vh] flex items-center justify-center'>
            <BiSolidQuoteLeft className='h-32 w-32 text-gray-400' />
            <p className='text-xl mx-7 font-bold tracking-wide [word-spacing:7px]'>Where innovation meets convenience — your style is just a click away.</p>
            <BiSolidQuoteRight className='h-32 w-32 text-gray-400' />
        </div>
    )
}

export default Quote