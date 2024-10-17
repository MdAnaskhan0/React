import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { IoLogoAngular } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavigationBar = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full px-6 py-4 bg-gray-600 lg:px-[10%]">
            <div className="flex items-center space-x-2">
                <IoLogoAngular className={`text-4xl sm:text-5xl ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                <span className={`text-2xl sm:text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>K-Plastic</span>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu}>
                    <GiHamburgerMenu className={`text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                </button>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center text-xl space-y-4 lg:space-y-0 lg:space-x-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="hidden sm:flex items-center px-4 py-2 bg-white rounded-md">
                <input
                    type="text"
                    placeholder="Search"
                    className={`w-full rounded-md ${theme === 'light' ? 'placeholder:text-black' : 'placeholder:text-gray-500'} focus:outline-none`}
                />
                <IoSearchSharp className="text-2xl text-gray-800 ml-2" />
            </div>

            <div className="flex text-3xl space-x-4">
                <button onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MdDarkMode />
                    ) : (
                        <CiLight className="text-white" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default NavigationBar;
