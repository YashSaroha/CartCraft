import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoInstagram, MdOutlineWhatsapp, MdOutlineEmail } from "../utils/constants";

const Footer = () => {
    return (
        <div className='w-full h-[35vh] md:h-[30vh] mt-5 bg-black text-white flex flex-col items-center justify-center'>
            <div className='w-[75%] gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between text-sm mb-6'>
                <div className='order-2 md:order-1 flex items-center justify-center gap-6 text-zinc-300'>
                    <Link to='/'><p>Products</p></Link>
                    <Link to='/'><p>Categories</p></Link>
                    <Link to='/'><p>Contact</p></Link>
                </div>
                <div className='order-1 py-4 md:py-0 md:order-2 flex flex-col items-center'>
                    <Link to='/'><h1 className='font-bold text-xl'>CartCraft</h1></Link>
                    <p className='text-xs text-zinc-400'>Best Shopping Experience</p>
                </div>
                <div className='order-3 flex items-center justify-center gap-4 text-zinc-300'>
                    <Link to='/'><p>SignUp</p></Link>
                    <Link to='/'><p className='mr-2'>Login</p></Link>
                    <Link to='/'><IoLogoInstagram className='text-lg' /></Link>
                    <Link to='/'><MdOutlineWhatsapp className='text-lg' /></Link>
                    <Link to='/'><MdOutlineEmail className='text-lg' /></Link>
                </div>
            </div>
            <div className='w-[85%] md:w-[75%] text-xs text-zinc-500 flex items-center justify-between'>
                <p className='w-[30%] md:w-[20%]'>Copyright ©️ 2024 CartCraft</p>
                {/* <hr size="2" width="60%" color='red'></hr> */}
                <div className='w-[42%] md:w-[65%] border-b-[1px] border-zinc-700'></div>
                <p className='w-[20%] md:w-[15%] text-end'>Designed by Yash</p>
            </div>
        </div>
    )
}

export default Footer