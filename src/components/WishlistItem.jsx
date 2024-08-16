import React, { useContext } from 'react'
import { FaCartShopping, IoMdClose } from '../utils/constants'
import { CartContext } from '../context/CartContext'
import { toast, ToastContainer } from 'react-toastify'

const WishlistItem = ({ item }) => {

    const { addToCart, removeFromWishlist } = useContext(CartContext)

    const add = (e) => {
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

    const remove = (e) => {
        removeFromWishlist(item.id)
    }

    return (
        <div className='flex items-center justify-between text-sm h-[18vh] py-5 w-full border-b-[1px] border-b-zinc-200'>
            <div className='w-[15%] h-full'>
                <img src={item.image} className='h-full w-[50%]' alt="" />
            </div>
            <p className='w-[35%] px-4'>{item.title}</p>
            <p className='w-[15%] text-center'>$ {item.price}</p>
            <div className='w-[35%] flex items-center justify-center gap-8 pl-8'>
                <button
                    // className='px-6 flex items-center justify-center gap-5 py-3 bg-zinc-800 text-white outline-none hover:bg-black duration-300'
                    className='px-6 flex items-center justify-center gap-5 py-3 border-[1px] font-semibold border-zinc-800 outline-none hover:bg-black hover:text-white duration-300 '
                    onClick={add}
                >
                    <FaCartShopping />
                    <p className='text-xs'>ADD TO CART</p>
                </button>
                <button
                    className='outline-none p-2 rounded-full hover:bg-zinc-800 hover:text-white duration-300'
                    onClick={remove}
                >
                    <IoMdClose />
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default WishlistItem