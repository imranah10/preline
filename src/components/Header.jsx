import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import navlogo from '../assets/images/navlogo/navlogo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`mt-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? '' : 'bg-transparent'
        }`}
      >
        <div className='text-[14px] navtext max-w-5xl mx-auto flex justify-between items-center shadow-lg bg-zinc-900 rounded-2xl px-4 py-2'>
          {/* Logo */}
          <div className="text-white flex items-center gap-x-1">
            <img className="w-10 rounded-xl text-2xl" src={navlogo} alt="logo" />
            <p className='text-2xl font-semibold'>Preline</p>
            <IoIosArrowDown className="text-zinc-500 cursor-pointer" />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </div>

          {/* Nav Links for desktop */}
          <nav className="hidden md:block">
            <ul className="flex text-white items-center space-x-4">
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Home</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Stories</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Reviews</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Approach</li>
              <div className="flex items-center gap-x-1">
                <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Company</li>
                <IoIosArrowDown className="text-zinc-500 hover:text-[#FFFF00] transition duration-300 cursor-pointer" />
              </div>
              <button className="bg-[#FFFF00] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-2xl cursor-pointer">
                Register
              </button>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 text-white px-4 py-4 shadow-lg rounded-xl max-w-5xl mx-auto mt-2">
            <ul className="space-y-3 text-sm">
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Home</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Stories</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Reviews</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Approach</li>
              <li className='hover:text-[#FFFF00] transition duration-300 cursor-pointer'>Company</li>
              <button className="bg-[#FFFF00] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-2xl w-full">
                Register
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
