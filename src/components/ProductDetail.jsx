import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { FaCartShopping, FaTags, IoHeartSharp, TbTruckDelivery } from "../utils/constants";
import { Cart, Counter } from './index';
import { CartContext } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';

const ProductDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetchFromApi(`products/${id}`)
            .then((data) => setProduct(data))
    }, [id])
    // console.log(product)

    const { cart, addToCart, addToWishlist } = useContext(CartContext)

    const add = (e) => {
        e.preventDefault()
        addToCart(product, 1)
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

    const wishlist = (e) => {
        e.preventDefault()
        addToWishlist(product)
        toast('✅ Product added to wishlist!', {
            position: "bottom-right",
            autoClose: 1499,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            limit: 1,
            hideProgressBar: true,
            style: { width: "250px" }
            // transition: Bounce,
        });
    }

    return (
        <div className='h-[89vh] w-full bg-zinc-200 flex gap-8 py-12 px-16'>
            <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                <div className='h-[78%] w-full rounded-xl bg-white p-8 flex items-center justify-center'>
                    <img src={product.image} className='h-full w-[70%] hover:scale-105 transition duration-300' />
                </div>
                <div className='flex gap-5 h-[18%] w-full px-6'>
                    <span className='h-full w-1/4 rounded-lg p-4 bg-white hover:scale-105 transition duration-300'><img src={product.image} className='h-full w-full' /></span>
                    <span className='h-full w-1/4 rounded-lg p-4 bg-white hover:scale-105 transition duration-300'><img src={product.image} className='h-full w-full' /></span>
                    <span className='h-full w-1/4 rounded-lg p-4 bg-white hover:scale-105 transition duration-300'><img src={product.image} className='h-full w-full' /></span>
                    <span className='h-full w-1/4 rounded-lg p-4 bg-white hover:scale-105 transition duration-300'><img src={product.image} className='h-full w-full' /></span>
                </div>
            </div>
            <div className='w-1/2 px-12 flex flex-col justify-center'>
                <span className='flex items-center gap-2'>
                    <FaTags className='rotate-90 text-zinc-600' />
                    <p className='font-semibold text-sm text-zinc-600 [word-spacing:5px]'>{product?.category?.toUpperCase()}</p>
                </span>
                <h1 className='text-2xl font-bold mt-3'>{product?.title}</h1>
                <p className='text-xs'>Rating: {product?.rating?.rate}</p>
                <p className='mt-3'>{product?.description}</p>
                <h1 className='font-bold text-3xl mt-8'>$ {product?.price}</h1>
                <div>
                    {/* <Counter /> */}
                </div>

                <div className='flex gap-4'>
                    <button
                        className='px-6 mt-8 flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 text-white outline-none hover:bg-black hover:-translate-y-1 duration-300'
                        onClick={add}
                    >
                        <FaCartShopping />
                        <p>Add To Cart</p>
                    </button>

                    <button
                        className='px-4 mt-8 flex items-center justify-center gap-3 py-2 border-2 border-gray-800 rounded-lg outline-none hover:bg-zinc-300 hover:-translate-y-1 duration-300'
                        onClick={wishlist}
                    >
                        <IoHeartSharp />
                        <p className='font-semibold'>Add To Wishlist</p>
                    </button>
                </div>

                <span className='mt-2 flex items-center gap-2'>
                    <TbTruckDelivery />
                    <p className='text-xs font-semibold'>Free delivery on orders above $50</p>
                </span>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductDetail