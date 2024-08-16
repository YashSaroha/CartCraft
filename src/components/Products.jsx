import { RiFlashlightFill, FaChevronRight, FaChevronLeft } from "../utils/constants";

import { ProductCard } from './index';

const Products = ({ title, products }) => {
    return (
        <section className=' flex flex-col py-10'>
            <div className='w-[80%] mx-auto flex items-center justify-between py-2 mb-5'>
                <div className='h-full flex justify-center items-center'>
                    <span className='h-10 w-10 flex justify-center items-center bg-black text-2xl text-white rounded-full'><RiFlashlightFill /></span>
                    <h1 className='ml-2 text-xl font-bold'>{title}</h1>
                </div>
                <div className='flex items-center justify-center gap-2 w-auto'>
                    <FaChevronLeft className='w-[40px] h-10 p-3 bg-transparent border border-gray-600' />
                    <FaChevronRight className='w-[40px] h-10 p-3 bg-transparent border border-gray-600' />
                </div>
            </div>
            <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
                {products.map((item) => (
                    <div key={item.id} className="bg-white flex flex-col items-start h-[70vh] w-[20%] rounded-lg">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products