import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import EmptyWishlist from './EmptyWishlist'
import WishlistItem from './WishlistItem'

const Wishlist = () => {

    const { wishlist } = useContext(CartContext)
    if (wishlist.length === 0) return <EmptyWishlist />

    return (
        <div className='h-[89vh] w-full py-7 px-20 bg-zinc-100'>
            <div className='h-[90%] w-[90%] mx-auto bg-white p-8'>

                <h1 className='font-semibold text-lg mb-3 text-gray-700'>
                    Your <span className='text-blue-800 ml-1'>WISHLIST</span>
                </h1>
                {/* <div className='flex flex-row items-center justify-start gap-8 flex-wrap'>
                {wishlist.map((item) => (
                    <div key={item.id} className="bg-white flex flex-col items-start h-[70vh] w-[20%] rounded-lg">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div> */}
                <div className='flex border-b-[1px] border-b-gray-300 items-center justify-around py-4 font-medium text-center'>
                    <p className='grow'></p>
                    <p className='grow-[2]'>Title</p>
                    <p className='grow'>Unit Price</p>
                    <p className='grow'>Actions</p>
                    <p className='grow'>Remove</p>
                </div>
                {wishlist.map((item) => (
                    <div key={item.id} className='w-full flex flex-col'>
                        <WishlistItem item={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Wishlist