import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <div className='pb-[30px]'>
            <h2 className='text-lg text-yellow-400 text-center font-semibold'>{title}</h2>
            <h1 className='text-2xl text-center text-gray-400 font-bold'>{subtitle}</h1>
        </div>
    )
}

export default Title
