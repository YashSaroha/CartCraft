import React, { useContext } from 'react'
import { ShippingForm, CartItem, CartSummary } from '../components'
import { CartContext } from '../context/CartContext'

const Checkout = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className='w-full min-h-[83vh] h-fit md:h-[89vh] flex flex-col md:flex-row justify-center gap-6 p-4 pb-8 md:pb-10 md:p-10 bg-zinc-100'>
            <div className='w-full md:w-[55%] h-fit md:h-full px-4 md:px-8 pt-4 flex flex-col justify-start items-start bg-white'>
                <h1 className='font-semibold text-lg md:text-xl text-gray-700 md:mb-6'>
                    Delivery <span className='text-purple-700'>Address</span>
                </h1>
                <div className='w-full pt-5 md:pt-3'>
                    <ShippingForm />
                </div>
            </div>
            <div className='w-full h-full md:w-[35%] p-4 bg-white flex flex-col'>
                <h1 className='font-semibold text-lg md:text-xl text-gray-700 md:mb-2'>
                    Order <span className='text-purple-700'>Summary</span>
                </h1>
                <div className='h-[60%] overflow-y-auto'>
                    {cart.map((cartProduct) => (
                        <div key={cartProduct.id} className='w-full'>
                            <CartItem cartProduct={cartProduct} />
                        </div>
                    ))}
                </div>
                <div className='h-[40%] pt-4 border-t-[1px] border-t-zinc-400'>
                    <CartSummary />
                    <button className='bg-zinc-800 mt-2 w-full text-white rounded-lg py-2 hover:bg-black duration-200 outline-none'>
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout