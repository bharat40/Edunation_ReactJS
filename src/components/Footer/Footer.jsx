import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='border-t border-gray-300 bg-gray-700 py-[40px]  px-[20px] text-slate-100'>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div>
                    <h3 className='flex items-center gap-[5px]'><FaRegCopyright />2025 Edunation. All rights reserved.</h3>
                </div>
                <div className='flex gap-[40px]'>
                    <h3>Terms of Services</h3>
                    <h3>Privacy Policy</h3>
                </div>
            </div>

        </section>
    )
}

export default Footer
