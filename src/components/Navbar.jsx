import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import { FaCartShopping, IoHeartSharp, FaUserCircle } from "../utils/constants";
import { SearchBar } from './index'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Navbar = () => {
    const { cart, wishlist } = useContext(CartContext)

    return (
        <div className='flex items-center justify-between w-full h-[11vh] py-2 px-6'>

            {/* Logo and Title */}
            <div className='w-[30%] flex items-center justify-start font-semibold'>
                <Link to={`/`}><img src={logo} alt="" className='w-[105px]' /></Link>
                <Link to={`/`}><p className='-ml-4'>Cart Craft</p></Link>
            </div>

            {/* Search Bar */}
            <div className='w-[60%] h-full p-2'>
                <SearchBar />
            </div>

            {/* Buttons */}
            <div className='w-[30%] flex items-center justify-end gap-6 py-1 mr-6'>
                <Link to={`/cart`}>
                    <button className='rounded-full w-10 h-10 p-3 border border-gray-600 hover:bg-zinc-100 relative'>
                        <FaCartShopping />
                        <span className='h-4 w-4 text-[10px] absolute -top-1 -right-2 flex items-center justify-center bg-purple-800 text-white rounded-full'>
                            {cart.length}
                        </span>
                    </button>
                </Link>
                <Link to={`/wishlist`}>
                    <button className='rounded-full w-10 h-10 p-[9px] border border-gray-600 hover:bg-zinc-100 relative'>
                        <IoHeartSharp className='w-full h-full' />
                        <span className='h-4 w-4 text-[10px] absolute -top-1 -right-2 flex items-center justify-center bg-purple-800 text-white rounded-full'>
                            {wishlist.length}
                        </span>
                    </button>
                </Link>
                <button className='rounded-full w-10 h-10 p-[9px] border border-gray-600 hover:bg-zinc-100'>
                    <FaUserCircle className='w-full h-full' />
                </button>
            </div>
        </div>
    )
}

export default Navbar