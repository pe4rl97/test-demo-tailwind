import PopularProductsCard from "../components/PopularProductsCard"
import { popularProducts } from "../constants"

const PopularProducts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-primary text-center">Popular Products</h1>
            <p className="text-center">Lorem ipsum dolor sit</p>
            <hr className="w-20 mt-5 text-primary font-bold border-2 border-primary"/>

            <div className="grid grid-cols-3 gap-10">
                {popularProducts.slice(0, 3).map((product) => (
                    <PopularProductsCard key={product.name} {...product}/>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-10">
                {popularProducts.slice(3).map((product) => (
                    <PopularProductsCard key={product.name} {...product}/>
                ))}
            </div>

            
        </div>
    )
}

export default PopularProducts