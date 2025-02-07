import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="max-container">
            <div className="flex justify-between text-white max-lg:flex-col max-lg:justify-between">
                <div className="flex max-lg:justify-between min-lg:gap-25 max-md:flex-col min-lg:w-1/2">
                    <div className="w-90 mb-8">
                        <h1 className="text-lg">About</h1>
                        <p className="text-white/40 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio amet eum accusamus, ullam corporis quam nemo at. A, illo.</p>
                    </div>
                    <div className="w-40 mb-8">
                        <h1 className="text-lg">Navigations</h1>
                        <ul className="mt-5">
                            <li className="mb-2">
                                <a href="/#about-us" className="text-white/50">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/#services" className="text-white/50">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="/#testimonials" className="text-white/50">Testimonials</a>
                            </li>
                            <li className="mb-2">
                                <a href="/#contact-us" className="text-white/50">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-70 mb-8">
                    <h1 className="text-lg">Follow Us</h1>
                    <div className="flex justify-start mt-7 gap-10">
                        <FaFacebookF className="text-white/50 cursor-pointer"/>
                        <FaTwitter className="text-white/50 cursor-pointer"/>
                        <FaInstagram className="text-white/50 cursor-pointer"/>
                        <FaLinkedinIn className="text-white/50 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <input 
                            type="text"
                            placeholder="Search products..."
                            className="outline-none p-2.5 border border-gray-500 field-sizing-content min-w-35"
                        />
                        <button className="bg-primary p-[11px] px-6 hover:bg-hover-primary">Search</button>
                    </div>
                </div>
            </div>
            <hr className="text-white/30 mt-15"/>
            <p className="text-center min-lg:mt-5 mt-3 text-white/30">Copyright &#169;2025 All rights reserved | This template is made with love by TestDemo</p>
        </div>
    )
}

export default Footer