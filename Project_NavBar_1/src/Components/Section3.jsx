import React from 'react'
import PicCard from './PicCard'
import AdditionalCard from './AdditionalCard'
import ButtonsDiv from './ButtonsDiv'

const Section3 = () => {
  return (
    <div className=' bg-gray-200 md:py-10'>
        <div className='md:w-[90%] grid place-items-center  m-auto sm:px-20 xl:flex md:py-0  py-5 p-2'>
           <div className='w-full '>
            <div className='relative  mb-45 md:mb-0 md:mr-35 flex items-center  flex-col '>
                <div className='relative md:w-[100%]'>
                    <img  src="./Images/bgpic.png" alt="" />
                </div>
                <div className='absolute top-50 md:top-5 md:left-50  bg-gray-800  text-white w-[250px] '>
                    <PicCard  textposition="center" imagePath="./Images/circlepic.png" cardHeading="Industrial" cardtext="Industrial development is our main line of business. We do Factory Construction, Warehouse and others"/>
                </div>
            </div>
           </div>
            <div>
                <AdditionalCard textposition="start" textheading="Meet and talk with our best architecture" textpara="All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result."/>
                <ButtonsDiv btnText='See all Team' btn2Text='How its works'/>
            </div>
        </div>
    </div>
  )
}

export default Section3