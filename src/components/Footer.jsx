import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoInstagram, MdOutlineWhatsapp, MdOutlineEmail } from "../utils/constants";

const Footer_2 = () => {
    return (
        <div className='w-full h-[30vh] mt-5 bg-black text-white flex flex-col items-center justify-center'>
            <div className='w-[75%] flex items-center justify-between text-sm mb-6'>
                <div className='flex items-center justify-center gap-6 text-zinc-200'>
                    <Link to='/'><p>Products</p></Link>
                    <Link to='/'><p>Categories</p></Link>
                    <Link to='/'><p>Contact</p></Link>
                </div>
                <div className='flex flex-col items-center'>
                    <Link to='/'><h1 className='font-bold text-xl'>CartCraft</h1></Link>
                    <p className='text-xs text-zinc-400'>Best Shopping Experience</p>
                </div>
                <div className='flex items-center justify-center gap-4 text-zinc-200'>
                    <Link to='/'><p>SignUp</p></Link>
                    <Link to='/'><p className='mr-2'>Login</p></Link>
                    <Link to='/'><IoLogoInstagram className='text-lg' /></Link>
                    <Link to='/'><MdOutlineWhatsapp className='text-lg' /></Link>
                    <Link to='/'><MdOutlineEmail className='text-lg' /></Link>
                </div>
            </div>
            <div className='w-[75%] text-xs text-zinc-500 flex items-center justify-between'>
                <p>Copyright ©️ 2024 CartCraft</p>
                {/* <hr size="2" width="60%" color='red'></hr> */}
                <div className='w-[60%] border-b-[1px] border-zinc-700'></div>
                <p>Designed by Yash</p>
            </div>
        </div>
    )
}

export default Footer_2