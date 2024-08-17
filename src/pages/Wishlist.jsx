import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { WishlistItem } from '../components/index'
import EmptyWishlist from '../pages/EmptyWishlist'

const Wishlist = () => {

    const { wishlist } = useContext(CartContext)
    if (wishlist.length === 0) return <EmptyWishlist />

    return (
        <div className='h-[89vh] w-full py-7 px-20 bg-zinc-100'>
            <div className='h-full w-[90%] mx-auto bg-white px-8 pb-10 pt-5'>
                <h1 className='font-semibold text-xl text-gray-700 mb-6 text-center'>
                    MY <span className='text-purple-700 ml-1'>WISHLIST</span>
                </h1>
                <div className='flex w-full border-b-[1px] border-b-gray-300 items-center justify-around py-4 font-medium'>
                    <p className='w-[15%] px-8'>Image</p>
                    <p className='w-[35%] px-10'>Title</p>
                    <p className='w-[15%] text-center'>Unit Price</p>
                    <p className='w-[35%] text-center'>Actions</p>
                </div>
                <div className='w-full max-h-[80%] overflow-y-scroll'>
                    {wishlist.map((item) => (
                        <div key={item.id} className=''>
                            <WishlistItem item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Wishlist