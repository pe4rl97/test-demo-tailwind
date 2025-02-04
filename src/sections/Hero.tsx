import { FaLocationDot } from "react-icons/fa6"

const Hero = () => {
    return (
        <div className="flex justify-center bg-hero h-screen bg-cover bg-fixed">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl text-center">Largest Classifieds In the World</h1>
                <h4 className="text-zinc-300 text-xl">You can buy, sell anything you want</h4>
                <form>
                    <div className="flex flex-col lg:flex-row mt-5 bg-very-light-gray/40 p-4 rounded-lg">
                        <input
                            name="lookingFor"
                            placeholder="What are you looking for?"
                            className="bg-white p-2.5 px-3 w-60 rounded focus:outline-none me-5 max-lg:mb-3 max-lg:w-full"
                        />
                        <div className="flex flex-wrap items-center bg-white rounded me-5 max-lg:mb-3 max-lg:w-full max-lg:justify-between">
                            <input
                                name="location"
                                placeholder="Location"
                                className="p-2.5 w-30 focus:outline-none px-3"
                            />
                            <span className="p-3"><FaLocationDot /></span>
                        </div>
                        <div>
                            <select
                                name="categories"
                                id="categories"
                                defaultValue={''}
                                className="bg-white me-5 rounded p-2.5 w-50 px-3 text-slate-500 block focus:outline-none max-lg:mb-3 max-lg:w-full cursor-pointer"
                            >
                                <option disabled value=''>All Categories</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <button className="bg-primary rounded w-35 max-lg:w-full max-lg:py-2 cursor-pointer">Search</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Hero