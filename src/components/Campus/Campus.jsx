import React from 'react';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import Title from '../Title/Title';
import { MdArrowRightAlt } from "react-icons/md";

const Campus = () => {
    return (
        <section className='h-max md:h-screen bg-gray-800 py-[70px]' id='campus'>
            <Title title="GALLERY" subtitle="Campus Photos" />
            <div className='flex flex-col gap-[20px] justify-center items-center md:flex-row md:gap-[30px]'>
                <img src={gallery_1} alt="" className='w-[300px] md:w-[350px] rounded' />
                <img src={gallery_2} alt="" className='w-[300px] md:w-[350px] rounded' />
                <img src={gallery_3} alt="" className='w-[300px] md:w-[350px] rounded' />
                <img src={gallery_4} alt="" className='w-[300px] md:w-[350px] rounded' />
            </div>
            <div className='flex justify-center mt-[50px]'>
                <button className='bg-yellow-400 rounded-full w-[150px] flex justify-center items-center gap-[5px] font-semibold hover:bg-slate-100 p-2'>See More <MdArrowRightAlt className='text-2xl' /></button>
            </div>

        </section>
    )
}

export default Campus
