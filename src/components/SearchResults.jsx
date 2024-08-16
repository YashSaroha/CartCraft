import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { ProductCard } from './index'

const SearchResults = () => {

    const { category } = useParams()
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        fetchFromApi(`products/category/${category}`)
            .then((data) => setSearchResult(data))
    })

    return (
        <div className='py-7'>
            <h1 className='font-semibold text-lg mb-3 text-gray-700 px-16'>
                Showing results for <span className='text-blue-800 ml-1'>{category.toUpperCase()}</span>
            </h1>
            <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
                {searchResult.map((item) => (
                    <div key={item.id} className="bg-white flex flex-col items-start h-[70vh] w-[20%] rounded-lg">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults