import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import AdsCard from "../components/AdsCard";
import { featuredAds } from "../constants";

const FeaturedAds = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = featuredAds.length;
    
    const getItemsPerPage = () => {
        if (window.innerWidth >= 1280) return 4;
        else if (window.innerWidth >= 768) return 2;
        else return 1;
    };

    const itemsPerPage = getItemsPerPage();
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - itemsPerPage + totalItems) % totalItems
        );
    };

    return (
        <div className="max-container">
            <h1 className="text-3xl">Featured Ads</h1>
            <div className="relative mt-8 overflow-hidden py-7.5">
                <div className="flex transition-transform duration-500 ease-in-out" 
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
                    {featuredAds.map((ads) => (
                        <div key={ads.name} className={`w-full md:w-1/2 xl:w-1/4 p-2 flex-shrink-0`}>
                            <AdsCard {...ads} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <button onClick={prevSlide} className="me-10 text-2xl text-slate-500">
                    <FaAngleLeft />
                </button>
                <button onClick={nextSlide} className="text-2xl text-slate-500">
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default FeaturedAds;