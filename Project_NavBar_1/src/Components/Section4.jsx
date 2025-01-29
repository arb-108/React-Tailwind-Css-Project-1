import React from 'react'
import AdditionalCard from './AdditionalCard'
import ButtonsDiv from './ButtonsDiv'

const Section4 = () => {
  return (
    <div className=' bg-white md:py-10 shadow-sm'>
        <div className='justify-between  m-auto sm:px-20 md:flex md:py-0  py-5 p-2'>

    <div className='xl:w-[30%]  md:grid md:place-items-center'>
        <div className='md:w-[100%] p-4 sm:px-10 md:p-0'>
            <img className='md:w-full' src="./Images/bgpic.png" alt="" />
        </div>
    </div>
    <div className='md:w-[50%] md:order-first'>
    <AdditionalCard textposition="start" textheading="Our Story"
    textheading2="Who we are" textpara="Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. 
    As the company grows, now we are present as a reliable..."/>
    <ButtonsDiv btnText='See more'/>
 </div>
    </div>
</div>
  )
}

export default Section4