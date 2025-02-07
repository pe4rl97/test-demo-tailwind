import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <header className="absolute top-4 z-10 w-full max-lg:top-0">
            <nav className="flex justify-between items-center max-container bg-white p-4 rounded-lg">
                <a href="/">
                    <h1 className="text-2xl font-bold p-2 text-black">
                        TEST<span className="text-primary"> DEMO</span>
                    </h1>
                </a>
                
                {/* Hamburger Menu */}
                <button
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                
                {/* Desktop Menu */}
                <ul className="hidden lg:flex flex-1 justify-end items-center gap-10">
                    <li><a href="/#home">Home</a></li>
                    <li className="relative" ref={dropdownRef}>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center py-2 px-3">
                            About
                            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 top-10 z-10 bg-white border-t-4 border-primary shadow-md w-44">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">The Company</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">The Leadership</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Philosophy</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><a href="/#blog">Blog</a></li>
                    <li><a href="/#contact-us">Contact</a></li>
                    <li className="text-gray-300 select-none">|</li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><button className="bg-primary p-2 px-8 rounded text-white hover:bg-hover-primary" onClick={() => navigate('/uploader')}>+ Test</button></li>
                </ul>
            </nav>

            {/* Offcanvas Menu */}
            <div
                className={`fixed bg-black/30 bg-opacity-50 z-20 transition-opacity ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-30 transform transition-transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button className="p-4" onClick={() => setIsMenuOpen(false)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <ul className="flex flex-col gap-4 p-4">
                    <li>
                        <a href="/#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="/#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
                    </li>
                    <li>
                        <a href="/#contact-us" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </li>
                        <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Login</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Register</a>
                    </li>
                    <li>
                        <button className="bg-primary p-2 px-8 rounded text-white" onClick={() => navigate('/uploader')}>+ Test</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;
