import { FaHeart, FaStar } from "react-icons/fa6"
import { Trending } from "../constants"

const TrendingCard = ({ imageUrl, category, name, address}: Trending) => {
    return (
        <div className="w-full bg-white drop-shadow h-60 rounded-lg max-md:h-auto">
            <div className="flex justify-between h-full max-md:flex-col">
                <div className="w-100 h-full max-md:h-60 max-md:w-full">
                    <img src={imageUrl} alt={name} className="w-full h-full  object-cover min-md:rounded-s-lg max-md:rounded-t-lg"/>
                </div>
                <div className="flex flex-col w-full py-7 px-8">
                    <div className="flex justify-between">
                        <div className="bg-zinc-200 rounded-full h-8 px-5 pt-1.5">
                            <p className="leading-tight text-sm font-semibold">{category}</p>
                        </div>
                        <div className="bg-very-light-gray p-2 rounded-full cursor-pointer">
                            <span className="text-primary text-xl mt-2"><FaHeart /></span>
                        </div>
                    </div>
                    <h3 className="mt-5 text-primary text-xl">{name}</h3>
                    <h5 className='text-gray-500 text-sm mt-1.5'>{address}</h5>
                    <div className="flex mt-5 gap-1">
                        <FaStar className="text-yellow-400 mt-1"/>
                        <FaStar className="text-yellow-400 mt-1"/>
                        <FaStar className="text-yellow-400 mt-1"/>
                        <FaStar className="text-yellow-400 mt-1"/>
                        <FaStar className="text-gray-500 mt-1"/>
                        <p className="text-slate-500 ms-2">{'(3 Reviews)'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard