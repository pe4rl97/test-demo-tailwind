import PopularProductsCard from "../components/PopularProductsCard"
import { popularProducts } from "../constants"

const PopularProducts = () => {
    return (
        <div className="flex flex-col justify-center items-center max-container">
            <h1 className="text-4xl font-semibold text-primary text-center">Popular Products</h1>
            <p className="text-center text-gray-400 mt-3">Lorem ipsum dolor sit amet</p>
            <hr className="w-20 mt-4 text-primary font-bold border-2 border-primary"/>

            <div className="relative mt-10 w-full">
                <div className="grid grid-cols-3 gap-6 w-full max-md:hidden">
                    {popularProducts.slice(0, 3).map((product) => (
                        <PopularProductsCard key={product.name} {...product}/>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6 w-full max-md:hidden">
                    {popularProducts.slice(3).map((product) => (
                        <PopularProductsCard key={product.name} {...product} extraHeight={true}/>
                    ))}
                </div>

                <div className="hidden max-md:grid grid-cols-1 gap-6 mt-6 w-full">
                    {popularProducts.map((product, index) => (
                        <PopularProductsCard key={product.name+index} {...product} extraHeight={true}/>
                    ))}
                </div>

            </div>


            
        </div>
    )
}

export default PopularProducts