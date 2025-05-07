import React from 'react';
import Title from '../Title/Title';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonials = [
    {
        name: "William Jackson 1",
        image: user_1,
        area: "Edunation, USA",
        message: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        name: "William Jackson 2",
        image: user_2,
        area: "Edunation, USA",
        message: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        name: "William Jackson 3",
        image: user_3,
        area: "Edunation, USA",
        message: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        name: "William Jackson 4",
        image: user_4,
        area: "Edunation, USA",
        message: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    }
]

const Testimonial = () => {
    return (
        <section className='h-max md:h-screen bg-gray-700 py-[40px]' id='testimonial'>
            <Title title="TESTIMONIAL" subtitle="What Student says" />
            <div className='flex flex-wrap justify-center items-center gap-[40px] p-2'>
                {
                    testimonials.map((test, idx) => {
                        return (
                            <div key={idx} className='border border-white p-2 w-[500px] '>
                                <div className='flex gap-[10px]'>
                                    <img src={test.image} alt="user_image" className='rounded-full w-[50px] md:w-[100px]' />
                                    <div>
                                        <h1 className='font-bold text-yellow-400'>
                                            {test.name}
                                        </h1>
                                        <p className='text-gray-300 font-semibold'>
                                            {test.area}
                                        </p>
                                    </div>
                                </div>
                                <p className='text-gray-400'>
                                    {test.message}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonial
