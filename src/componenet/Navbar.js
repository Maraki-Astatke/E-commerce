


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home';
// import Men from './Men';
// import Women from './Women';
// import Kids from './Kids';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div>
            <nav className="">
                <div className="max-w-8xl mx-auto px-12 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-gray-800 font-semibold text-2xl">SHOPPERS</div>
                        <div className="hidden md:flex space-x-4 justify-center w-full">
                            <div className="flex space-x-4 mx-auto">
                                <Link to="/" className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Shop</Link>
                                <Link to="/men" className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Men</Link>
                                <Link to="/women" className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Women</Link>
                                <Link to="/kids" className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Kids</Link>
                            </div>
                            <button className='border border-black p-0.5 w-24 rounded-full'>Login</button>
                            <img className='cart_icon w-9' src='image/cart.jpg' alt="Cart" />
                           
                        </div>
                        <div className="hidden w-4 h-4 md:flex justify-center items-center -mt-5 -ml-2.5 rounded-full text-sm bg-red-500 text-white">0</div>
                       
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-400`}>
                    <div className="px-4 py-2">
                        <div className="main"></div>
                        <div className="button mt-7 flex flex-col">
                            <Link to="/" className="text-gray-100 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Shop</Link>
                            <Link to="/men" className="text-gray-100 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Men</Link>
                            <Link to="/women" className="text-gray-100 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Women</Link>
                            <Link to="/kids" className="text-gray-100 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Kids</Link>
                            <div className='flex justify-between mr-8'>
                                <button className='border border-black ml-5 mt-2 w-20 rounded-full'>Login</button>
                                <img className='w-9 ml-6 mt-2' src='image/cart.jpg' alt="Cart" />
                           
                            </div>  
                                         
                        </div>
                    </div>
                    
                </div>
                <div className="md:hidden w-4 h-4 flex  justify-center items-center relative -top-12 ml-[390px] rounded-full text-sm bg-red-500 text-white">0</div>    
            </nav>

         </div>
    );
};

export default Navbar;