import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    // console.log(product)

    return (
        <Link to={`/products/${product.id}`} className='h-full w-full'>
            <div className='h-full w-full rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                <img src={product?.image} className='w-[20vw] h-[60%] bg-transparent p-10 hover:scale-90 transition duration-300' />
                <div className='p-5 relative bg-zinc-900 w-full h-[40%] rounded-b-lg overflow-hidden'>
                    <h1 className='font-semibold text-md text-zinc-400'>{product?.title.slice(1, 50) + '...'}</h1>
                    <h1 className='font-bold text-xl mt-2 text-white'>$ {product?.price}</h1>
                    <div className='w-full px-5 flex justify-between absolute bottom-4 left-0 right-0 text-gray-500'>
                        <h1 className=''>Rating: {product?.rating?.rate}</h1>
                        <h1 className=''>{product?.rating?.count} Sales</h1>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard