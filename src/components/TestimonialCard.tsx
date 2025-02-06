import { Testimonial } from "../constants"

const TestimonialCard = ({ imageUrl, name, text }: Testimonial) => {
    return (
        <div className="flex flex-col items-center">
            <img src={imageUrl} alt={name} className="h-20 rounded-full"/>
            <h5 className="text-sm text-gray-500 my-4 mb-9">{name}</h5>
            <p className="text-2xl text-center text-gray-500 leading-11">“{text}”</p>
        </div>
    )
}

export default TestimonialCard