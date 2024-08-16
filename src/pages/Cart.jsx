import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import { CartItem, EmptyCart } from '../components/index'

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
        <div className='w-full min-h-[85vh] flex px-5'>
            <div className='w-[60%] min-h-full py-8 px-12 flex flex-col justify-start items-start'>
                <h1 className='font-semibold text-2xl mb-3 text-gray-800'>My Cart</h1>
                {cart.map((cartProduct) => (
                    <div key={cartProduct.id} className='w-full'>
                        <CartItem cartProduct={cartProduct} />
                    </div>
                ))}
            </div>

            <div className='w-[40%] py-8 px-12'>
                <div>
                    <h1 className='font-semibold text-2xl mb-6 text-gray-800'>Summary</h1>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600'>
                        <p>Subtotal</p>
                        <p>$ {subtotal}</p>
                    </div>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600'>
                        <p>Estimated Delivery & Handling</p>
                        <p>{subtotal < 50 ? `$ ${delivery}` : 'Free'}</p>
                    </div>
                    <div className='flex justify-between font-medium mb-2 text-zinc-600'>
                        <p>Estimated Taxes</p>
                        <p>$ {tax}</p>
                    </div>
                </div>
                <div className='flex flex-col mt-14'>
                    <div className='flex justify-between font-semibold text-xl mb-6'>
                        <p>Total</p>
                        <p>$ {total.toFixed(2)}</p>
                    </div>
                    <button className='bg-zinc-800 text-white rounded-full py-2 hover:bg-black duration-200 outline-none'>Checkout</button>
                    <button className='border-2 border-zinc-800  rounded-full py-2 outline-none mt-2'>Paypal</button>
                </div>
            </div>
        </div>
    )
}

export default Cart