import { Service } from "../constants"

const ServiceCard = ({ iconURL, serviceName, numbers}: Service) => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-9">
            <img 
                src={iconURL} 
                alt={serviceName}
                width={50}
                height={50} 
                />
            <h4 className="text-slate-500 leading-normal mt-3">{serviceName}</h4>
            <p className="bg-zinc-200 rounded-2xl px-5 mt-2">{numbers}</p>
        </div>
    )
}

export default ServiceCard