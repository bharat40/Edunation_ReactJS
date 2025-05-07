import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";

const Hero = () => {
    return (
        <section className='h-[600px] md:h-screen bg-gray-700 flex justify-center items-center text-center' id='hero'>
            <div className='flex flex-col gap-[50px] md:gap-[20px] w-[700px] items-center px-[20px]'>
                <h1 className='font-bold text-5xl text-white'>🎓We Ensure better Education 🌍For A Better World</h1>
                <p className='text-gray-200'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
                <button className='flex gap-[5px] items-center font-semibold bg-yellow-400 rounded-full p-3 hover:bg-white w-[150px] cursor-pointer'><span>Explore More</span> <MdArrowRightAlt className='text-2xl' /></button>
            </div>
        </section>
    )
}

export default Hero
