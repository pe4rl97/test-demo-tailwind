import { FaHeart, FaStar } from "react-icons/fa6"
import { Ad } from "../constants"

const AdsCard = ({imageUrl, category, name, address}: Ad) => {
    return (
        <div className="bg-white shadow-overflow-hidden rounded-lg">
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-50 object-cover rounded-t-lg"
            />
            <div className="p-5">
                <div className="flex flex-row justify-between">
                    <div className="bg-zinc-200 rounded-full h-7 px-5 pt-1">
                        <p className="leading-tight text-sm font-semibold">{category}</p>
                    </div>
                    <div className="bg-very-light-gray p-2 rounded-full cursor-pointer">
                        <span className="text-primary text-xl mt-2"><FaHeart /></span>
                    </div>
                </div>
                <h2 className="text-xl text-primary">{name}</h2>
                <p className="text-slate-500">{address}</p>
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
    )
}

export default AdsCard