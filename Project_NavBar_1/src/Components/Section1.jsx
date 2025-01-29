import React from 'react'
import PicCard from './PicCard'
import AdditionalCard from './AdditionalCard'

const Section1 = () => {
  return (
    <div className='py-5 p-2 bg-gray-100 xl:px-20'>
        <AdditionalCard check='yes' textposition="center" textheading="Our Excellent Services" textpara="Check out best service at you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"/>
        <div className='flex overflow-x-auto gap-4 sm:justify-center py-5'>
        <PicCard textposition="start" imagePath="./Images/pexel-1.jpg" cardHeading="Industrial" cardtext="Industrial development is our main line of business. We do Factory Construction, Warehouse and others"/>
        <PicCard textposition="start" imagePath="./Images/pexel-2.jpg" cardHeading="Commercial" cardtext="Our experience building in the Commercial field includes Showrooms,Supermalls and Office Buildings"/>
        <PicCard textposition="start" imagePath="./Images/pexel-4.jpg" cardHeading="Residential" cardtext="Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments"/>
        </div> 
    </div>
  )
}

export default Section1