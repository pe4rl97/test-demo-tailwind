import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import AdsCard from "../components/AdsCard"
import { featuredAds } from "../constants"

const FeaturedAds = () => {
    return (
        <div className="max-container">
            <h1 className="text-3xl">
                Featured Ads
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-10">
                {featuredAds.map((ads) => (
                    <AdsCard key={ads.name} {...ads}/>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex">
                    <FaAngleLeft className="me-10 text-2xl text-slate-500"/>
                    <FaAngleRight className="text-2xl text-slate-500"/>

                </div>
            </div>
        </div>
    )
}

export default FeaturedAds