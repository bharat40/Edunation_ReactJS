import React from 'react';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import Title from '../Title/Title';

const Programs = () => {
    return (
        <section className='bg-gray-800 py-[50px] h-max md:h-screen' id='program'>
            <Title title="OUR PROGRAM" subtitle="What We Offer" />
            <div className='flex flex-col justify-center items-center gap-[20px] md:flex-row md:gap-[50px] '>
                <div className='flex flex-col items-center'>
                    <img src={program_1} alt="" className='w-[250px] h-[300px] md:w-[370px] md:h-[370px] rounded hover:scale-105 duration-300' />
                    <span className='mt-[10px] text-center text-yellow-400 font-semibold'>Graduation Degree</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={program_2} alt="" className='w-[250px] h-[300px] md:w-[370px] md:h-[370px] rounded hover:scale-105 duration-300' />
                    <span className='mt-[10px] text-center text-yellow-400 font-semibold'>Masters Degree</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={program_3} alt="" className='w-[250px] h-[300px] md:w-[370px] md:h-[370px] rounded hover:scale-105 duration-300' />
                    <span className='mt-[10px] text-center text-yellow-400 font-semibold'>Post Graduation</span>
                </div>
            </div>
        </section>
    )
}

export default Programs
