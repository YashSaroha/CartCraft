import React, { useContext, useState, useEffect } from 'react'
import { FaTags, FaStar, IoHeartOutline, IoHeartSharp, AiOutlineDelete } from "../utils/constants";
import { Counter } from './index';
import { CartContext } from '../context/CartContext';
import { FaBullseye } from 'react-icons/fa';

const CartItem = ({ cartProduct }) => {

    const { wishlist, addToWishlist, removeFromWishlist, removeFromCart } = useContext(CartContext)

    const [isWishlishted, setIsWishlishted] = useState(() => {
        const index = wishlist.findIndex((item) => item.id === cartProduct.id)
        if (index === -1) return false
        else return true
    })

    const handleAddToWishlist = () => {
        setIsWishlishted(!isWishlishted)
    }
    const handleRemoveFromCart = () => {
        removeFromCart(cartProduct.id)
    }
    useEffect(() => {
        if (isWishlishted) {
            addToWishlist(cartProduct)
            console.log(wishlist)
        } else {
            removeFromWishlist(cartProduct.id)
            console.log(wishlist)
        }
    }, [isWishlishted])

    return (
        <div className='flex items-start justify-start h-[23vh] py-5 w-full border-b-[1px] border-b-gray-300'>
            <div className='w-[18%] h-full'>
                <img src={cartProduct.image} className='h-full w-[90%]' />
            </div>
            <div className='w-[62%] h-full pl-6 pr-10 flex flex-col justify-start'>
                <h1 className='font-semibold text-lg leading-6'>{cartProduct.title}</h1>
                <span className='flex items-center gap-2 mt-3'>
                    <FaStar className='text-zinc-400' />
                    <p className='font-semibold text-xs text-zinc-400 [word-spacing:3px]'>Rating: {cartProduct.rating.rate}</p>
                </span>
                <span className='flex items-center gap-2 mt-1'>
                    <FaTags className='rotate-90 text-zinc-400' />
                    <p className='font-semibold text-xs text-zinc-400 [word-spacing:3px]'>{cartProduct.category.toUpperCase()}</p>
                </span>
            </div>
            <div className='w-[20%] h-full flex flex-col items-center justify-between'>
                <h1 className='font-bold text-xl'>$ {cartProduct.price * cartProduct.quantity}</h1>
                <div className='flex items-center justify-center gap-2'>

                    <button
                        className='rounded-full w-8 h-8 p-[7px] border bg-zinc-100 hover:bg-zinc-200'
                        onClick={handleAddToWishlist}
                    >
                        {isWishlishted ? <IoHeartSharp className='w-full h-full' /> : <IoHeartOutline className='w-full h-full' />}
                        {/* <FaHeart className='h-full w-full' /> */}
                    </button>

                    <button
                        className='rounded-full w-8 h-8 p-[7px] border bg-zinc-100 hover:bg-zinc-200'
                        onClick={handleRemoveFromCart}
                    >
                        <AiOutlineDelete className='h-full w-full' />
                    </button>

                </div>
                {/* <Counter padding={2} prodQuantity={cartProduct.quantity} /> */}
            </div>
        </div>
    )
}

export default CartItem