import React from 'react';
import about from '../../assets/about.png';

const About = () => {
    return (
        <section className='h-max py-[40px] md:h-screen bg-gray-700 flex flex-col justify-center items-center md:flex-row  gap-[50px]' id='about'>
            <div><img src={about} alt="" className='w-[300px] md:w-[400px]' /></div>
            <div className='flex flex-col justify-center gap-[20px]'>
                <h2 className='text-yellow-400 text-lg font-semibold'>ABOUT UNIVERSITY</h2>
                <h1 className='text-2xl font-bold text-white'>Nurturing Tomorrow's <br />
                    Leaders Today</h1>
                <p className='w-[300px] md:w-[700px] text-gray-300'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p className='w-[300px] md:w-[700px] text-gray-300'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p className='w-[300px] md:w-[700px] text-gray-300'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </section>
    )
}

export default About
