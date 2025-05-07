import React from 'react';
import Title from '../Title/Title';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1078747b-aa3f-4d89-a670-e58217c6392d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section className='h-max md:h-screen bg-gray-800 py-[40px]' id='contact'>
            <Title title="CONTACT US" subtitle="Get in touch" />
            <div className='flex flex-col md:flex-row justify-between items-center gap-[40px] md:px-[20px]'>
                <div className='flex flex-col gap-[20px] text-lg items-center p-2 md:w-[50%]'>
                    <div>
                        <h1 className='font-bold text-yellow-400'>Send us a message ✉️</h1>
                    </div>
                    <p className='text-gray-400'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex gap-[20px] items-center'>
                            <MdEmail className='text-white' />
                            <span className='text-yellow-400'>contact@edunation.web</span>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <FaPhoneAlt className="text-white" />
                            <span className='text-yellow-400'>+1123-456-7890</span>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <IoLocationSharp className="text-white" />
                            <span className='text-yellow-400'>77 Massachusettes Ave, Cambridge <br />
                                MA 02139, United States</span>
                        </div>
                    </div>
                </div>
                <div className='p-2 w-full md:w-[50%]'>
                    <form onSubmit={onSubmit} className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px]'>
                            <label className='font-semibold text-gray-200'>Your Name</label>
                            <input type="text" name="name" id="" placeholder='Enter your name' className='text-gray-800 bg-slate-100 p-1' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="" className='font-semibold text-gray-200'>Phone Number</label>
                            <input type="number" name="phone" id="" placeholder='Enter your mobile number' className='text-gray-800 bg-slate-100 p-1' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="" className='font-semibold text-gray-200'>Your Email</label>
                            <input type="email" name="email" id="" placeholder='Enter your email id' className='text-gray-800 bg-slate-100 p-1' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="" className='font-semibold text-gray-200'>Write your message here</label>
                            <textarea name="message" id="" rows="6" placeholder='Enter your message' className='text-gray-800 bg-slate-100 p-1'></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='flex gap-[5px] items-center font-semibold bg-yellow-400 rounded-full p-3 hover:bg-white w-[150px] cursor-pointer'>Submit now <MdArrowRightAlt className='text-2xl' /></button>
                        </div>
                        <h5 className='text-center text-green-400'>{result}</h5>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
