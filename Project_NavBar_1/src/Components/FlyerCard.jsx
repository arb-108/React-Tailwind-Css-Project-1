import React from 'react'

const FlyerCard = () => {
  return (
    <div>
        <div className='font-poppins  text-gray-600 bg-gray-300 py-5 px-4 flex flex-col gap-4 md:max-w-[600px] md:gap-1'>
            <div className='flex justify-between'>
                <div className='mt-4'>
                <div className='flex items-baseline'>
                    <h1 className='text-[3.5rem] leading-4 font-bold'>20</h1>
                    <h6>Years</h6>
                </div>
                <h5 className='text-[1.8rem] font-medium'>Operated</h5>
                </div>
                <div>
                    <img className='w-[80px]' src="./Images/achive3.png" alt="" />
                </div>
            </div>
            <div className='my-3 text-base font-extralight  text-justify '>
                <p>As a trusted general project that has been operating for 25 years, our commitment is always to prioritize our client satisfaction</p>
            </div>
            <div className='flex justify-between  md:hidden'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl font-bold'>300+</h2>
                    <h6>Happy <br /> Client</h6>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-3xl font-bold'>900+</h2>
                    <h6>Amazing <br /> Project</h6>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-3xl font-bold'>20+</h2>
                    <h6>Award <br /> Winning</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlyerCard