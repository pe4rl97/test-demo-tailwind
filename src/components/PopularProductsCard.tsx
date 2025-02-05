import { FaHeart } from "react-icons/fa6";
import { Product } from "../constants";

const PopularProductsCard = ({ imageUrl, category, name, address, extraHeight=false }: Product & { extraHeight?: boolean}) => {
    return (
        <div 
            className="bg-cover bg-center rounded bg-black/30 bg-blend-soft-light flex flex-col justify-end p-5" 
            style={{ backgroundImage: `url(${imageUrl})`, height: `${extraHeight ? '25rem' : '14rem'}` }}
        >
            <p><span className="bg-primary rounded-full text-white text-xs font-semibold h-7 px-3 py-1">{category}</span></p>
            <h3 className="text-white text-xl mt-3">{name}</h3>
            <div className="flex justify-between">
                <h4 className="text-gray-300 text-sm">{address}</h4>
                <span className="bg-white/40 rounded-full p-2"><FaHeart className="text-white"/></span>
            </div>
        </div>
    );
}

export default PopularProductsCard;