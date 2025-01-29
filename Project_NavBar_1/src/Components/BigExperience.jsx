import React from 'react'
import ExperienceCard from './ExperienceCard'
import FlyerCard from './FlyerCard'

const BigExperience = () => {
  return (
    <div className='hidden md:flex bg-white items-center'>
        <div className='flex justify-around items-center flex-1 flex-wrap'>
                <div className='flex flex-col p-2'>
                    <h2 className='text-5xl font-bold'>300<span className='text-blue-500 font-extrabold'>+</span></h2>
                    <h6>Happy  Client</h6>
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className='text-5xl font-bold'>900<span className='text-blue-500 font-extrabold'>+</span></h2>
                    <h6>Amazing Project</h6>
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className='text-5xl font-bold'>200<span className='text-blue-500 font-extrabold'>+</span></h2>
                    <h6>Award Winning</h6>
                </div>
            </div>
            <FlyerCard/>
    </div>
  )
}

export default BigExperience