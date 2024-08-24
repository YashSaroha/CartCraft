import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import footer_img from '../assets/footer-1.webp'

const Footer = () => {
    return (
        <div>
            <div>
                <div className='w-[25%] flex items-center justify-start font-semibold'>
                    <Link to={`/`}><img src={logo} alt="" className='w-[105px]' /></Link>
                    <Link to={`/`}><p className='-ml-4'>Cart Craft</p></Link>
                    <p>Specializes in providing high-quality, stylish products for your wardrobe.</p>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='font-semibold text-lg'>Products</h1>
                        <ul className='list-none text-gray-500'>
                            <li>Tshirts</li>
                            <li>Jackets</li>
                            <li>Pants</li>
                            <li>Caps</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='font-semibold text-lg'>Categories</h1>
                        <ul className='list-none text-gray-500'>
                            <li>Electronics</li>
                            <li>Jewelery</li>
                            <li>Mens Clothing</li>
                            <li>Womens Clothing</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='font-semibold text-lg'>Follow Us</h1>
                        <ul className='list-none text-gray-500'>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <h1>Payment Methods</h1>
                    <img src={footer_img} alt="" />
                </div>
            </div>

            <div>Copyright ©️ 2024 CartCraft || All Rights Reserved</div>
        </div>
    )
}

export default Footer