import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
    return (
        <div className="flex justify-center bg-very-light-gray">
            <div className="bg-white rounded-lg -mt-13 w-[80%] wide:w-[70%] grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" id="services">
                {
                    services.map((service) => (
                        <ServiceCard key={service.serviceName} {...service}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Services