import React from 'react'
import cart_img from '../assets/cart-2.png'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='w-full h-[85vh] flex flex-col justify-center items-center'>
            <div className='w-[200px] h-[200px] p-8 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_10px_30px]'>
                {/* <img src={cart_img} className='' /> */}
                <lord-icon
                    src="https://cdn.lordicon.com/odavpkmb.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#1f2937,secondary:#1f2937"
                    style={{ width: "250px", height: "250px" }}>
                </lord-icon>
            </div>

            <h1 className='font-semibold text-3xl mt-12 mb-3 text-gray-700 px-16'>
                Your Cart is
                <span className='text-blue-800 ml-2'>
                    Empty
                </span>
            </h1>

            <p>Looks like you have not made a choice yet.</p>

            <Link to={`/`}>
                <button className='mt-8 font-semibold gap-3 px-8 py-3 rounded-lg bg-gray-800 text-white outline-none hover:bg-gray-900 duration-300'>
                    Shop Now
                </button>
            </Link>
        </div>
    )
}

export default EmptyCart