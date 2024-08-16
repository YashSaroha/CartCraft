import { FaArrowRight } from "../utils/constants";
import hero_img from '../assets/img_2.jpg'

const ImageCard = () => {
    return (
        <div className='flex items-center justify-center w-full h-[40vh] px-28 my-16'>
            <img src={hero_img} className='h-full w-[45%] rounded-l-lg' />
            <div className='h-full w-[55%] flex flex-col items-start justify-center px-14 bg-gray-800 rounded-r-lg'>
                <p className='font-semibold text-gray-400'>LIMITED OFFER</p>
                <h1 className='font-bold text-3xl text-white mt-3'>30% off on this Raksha Bandhan and a special gift</h1>
                <button
                    className='w-1/3 mt-8 font-semibold flex items-center justify-center gap-3 py-3 rounded-lg bg-white text-gray-800 outline-none hover:bg-gray-200 duration-300'
                >
                    <p>Grab it now</p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default ImageCard