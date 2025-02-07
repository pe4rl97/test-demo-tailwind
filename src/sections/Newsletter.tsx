const Newsletter = () => {
    return (
        <div className="max-container">
            <div className="flex justify-between max-md:flex-col max-md:items-center">
                <div>
                    <h3 className="text-white text-lg">Newsletter</h3>
                    <p className="text-white/70 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="flex max-md:mt-5">
                    <input 
                        type="email"
                        placeholder="Email"
                        className="placeholder:text-white/70 placeholder:italic outline-none border-b-1 border-white caret-white w-70 max-md:w-60 mt-5 text-white"
                    />
                    <button className="bg-gray-100 h-10 px-6 mt-4 cursor-pointer hover:bg-gray-200">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter