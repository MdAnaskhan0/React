import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { IoLogoAngular } from 'react-icons/io';

const NavigationBar = ({ theme, setTheme }) => {

    const toggle_theme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="flex flex-row items-center justify-between w-full px-[10%] py-5 bg-gray-600">
            <div className="flex items-center space-x-2">
                <IoLogoAngular className={`text-5xl ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                <span className={`text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>K-Plastic</span>
            </div>

            <div className="text-xl">
                <ul className={`flex space-x-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="flex items-center px-5 bg-white rounded-md">
                <input type="text" placeholder="Type here" className="rounded-md placeholder:text-gray-600" />
                <IoSearchSharp className="text-4xl text-gray-800 pl-1 mt-1" />
            </div>

            <div className="flex text-4xl space-x-4">
                <button onClick={toggle_theme}>
                    {theme === 'light' ? <MdDarkMode /> : <><CiLight className='text-white' /></>}
                </button>
            </div>
        </nav>
    );
};

export default NavigationBar;
