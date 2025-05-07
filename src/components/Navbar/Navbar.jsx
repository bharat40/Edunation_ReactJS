import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-scroll';
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className='md:fixed w-full flex items-center justify-between bg-gray-800 px-8 py-4 z-50'>
            {/* Logo */}
            <div className='flex items-center text-white gap-2'>
                <FaGraduationCap className='text-2xl md:text-5xl' />
                <span className='text-lg md:text-4xl'>EDUNATION</span>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='md:hidden text-white text-3xl cursor-pointer' onClick={handleClick}>
                {showMenu ? <RxCross2 /> : <HiBars3 />}
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex text-lg text-white gap-10 items-center'>
                <li className='hover:text-slate-300 cursor-pointer'><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li className='hover:text-slate-300 cursor-pointer'><Link to='about' smooth={true} duration={500}>About Us</Link></li>
                <li className='hover:text-slate-300 cursor-pointer'><Link to='program' smooth={true} duration={500}>Program</Link></li>
                <li className='hover:text-slate-300 cursor-pointer'><Link to='campus' smooth={true} duration={500}>Campus</Link></li>
                <li className='hover:text-slate-300 cursor-pointer'><Link to='testimonial' smooth={true} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} duration={500} className='bg-yellow-400 px-4 py-2 rounded-full hover:bg-white text-black'>Contact Us</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar
