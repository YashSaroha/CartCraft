import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components';
import EmptyCart from '../pages/EmptyCart'

const Cart = () => {

    const { cart } = useContext(CartContext)
    // console.log(cart)
    if (cart.length === 0) return <EmptyCart />

    const [subtotal, setSubtotal] = useState(0)
    const [delivery, setDelivery] = useState(10)
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            sum += element.price * element.quantity
        }
        setSubtotal(Number(sum.toFixed(2)))

        setTax(Number((subtotal / 10).toFixed(2)))
        if (subtotal < 50) setTotal(Number(subtotal + delivery + tax))
        else {
            setDelivery('Free')
            setTotal(Number(subtotal + tax))
        }
    })

    return (
        <div className='w-full h-auto md:h-[89vh] flex flex-col md:flex-row p-4 pb-8 md:pb-10 md:p-10 bg-zinc-100'>
            <div className='w-full md:w-[60%] h-fit md:h-full px-4 md:px-8 pt-4 flex flex-col justify-start items-start bg-white'>
                <h1 className='font-semibold w-full text-lg text-center md:text-2xl md:text-start mb-3 text-gray-800'>MY <span className='text-purple-700'>CART</span></h1>
                <div className='w-full h-fit md:max-h-[85%] md:overflow-y-scroll'>
                    {cart.map((cartProduct) => (
                        <div key={cartProduct.id} className='w-full'>
                            <CartItem cartProduct={cartProduct} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full md:w-[40%] h-[40%] md:h-full pt-4 px-4 md:px-16'>
                <div>
                    <h1 className='font-semibold text-lg md:text-2xl mb-6 text-gray-800'>Summary</h1>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600 text-xs md:text-base'>
                        <p>Subtotal</p>
                        <p>$ {subtotal}</p>
                    </div>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600 text-xs md:text-base'>
                        <p>Estimated Delivery & Handling</p>
                        <p>{subtotal < 50 ? `$ ${delivery}` : 'Free'}</p>
                    </div>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600 text-xs md:text-base'>
                        <p>Estimated Taxes</p>
                        <p>$ {tax}</p>
                    </div>
                </div>
                <div className='flex flex-col mt-7 md:mt-14'>
                    <div className='flex justify-between font-semibold text-xl mb-3 md:mb-6'>
                        <p>Total</p>
                        <p>$ {total.toFixed(2)}</p>
                    </div>
                    <button className='bg-zinc-800 text-white rounded-lg md:rounded-full py-2 hover:bg-black duration-200 outline-none'>Checkout</button>
                    <button className='border-2 border-zinc-800 rounded-lg md:rounded-full py-2 outline-none mt-2'>Paypal</button>
                </div>
            </div>
        </div>
    )
}

export default Cart