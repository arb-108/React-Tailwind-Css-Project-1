import React from 'react'

const ScrollerBrands = () => {
  return (
    <div className='flex gap-3 items-center h-[100px] sm:h-[150px] sm:justify-around my-3 overflow-x-auto'>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand1.png" alt="" />
        </div>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand2.png" alt="" />
        </div>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand3.png" alt="" />
        </div>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand4.png" alt="" />
        </div>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand5.png" alt="" />
        </div>
        <div className='grid h-20 place-content-center'>
            <img className='min-w-[150px]' src="./Images/brand6.png" alt="" />
        </div>
        
    </div>
  )
}

export default ScrollerBrands