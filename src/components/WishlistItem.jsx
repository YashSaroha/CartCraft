import React, { useContext } from 'react'
import { FaCartShopping, IoMdClose } from '../utils/constants'
import { CartContext } from '../context/CartContext'
import { toast, ToastContainer } from 'react-toastify'

const WishlistItem = ({ item }) => {

    const { addToCart } = useContext(CartContext)

    const add = (e) => {
        e.preventDefault()
        addToCart(item, 1)
        toast('✅ Product added to cart!', {
            position: "bottom-right",
            autoClose: 1499,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            limit: 1,
            hideProgressBar: true,
            style: { width: "250px" }
            // transition: Bounce,
        });
    }

    return (
        <div className='flex items-center justify-around'>
            <div className='w-[18%] h-full'>
                <img src={item.image} className='h-full w-[90%]' alt="" />
            </div>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <button
                className='px-6 mt-8 flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 text-white outline-none hover:bg-black hover:-translate-y-1 duration-300'
                onClick={add}
            >
                <FaCartShopping />
                <p>Add To Cart</p>
            </button>
            <button
                className='px-6 mt-8 flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 text-white outline-none hover:bg-black hover:-translate-y-1 duration-300'
                onClick={add}
            >
                <IoMdClose />
            </button>
            <ToastContainer />
        </div>
    )
}

export default WishlistItem