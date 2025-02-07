import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialDetails } from "../constants";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialDetails.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialDetails.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="max-container">
            <div className="flex flex-col items-center w-full">
                <h1 className="text-center text-primary text-4xl font-semibold">Testimonials</h1>
                <hr className="w-20 mt-2.5 text-primary font-bold border-2 border-primary text-center"/>
                <div className="flex items-center justify-between w-full mt-10">
                    <button 
                        className="bg-gray-300 p-4 rounded-full text-white cursor-pointer" 
                        onClick={handlePrev}
                    >
                        <FaAngleLeft />
                    </button>
                    <div className="w-250 flex justify-center overflow-hidden relative max-md:w-190">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out w-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonialDetails.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                        className="bg-gray-300 p-4 rounded-full text-white cursor-pointer" 
                        onClick={handleNext}
                    >
                        <FaAngleRight/>
                    </button>
                </div>
                <div className="flex mt-15 space-x-3">
                    {testimonialDetails.map((_, index) => (
                        <div 
                            key={index} 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;