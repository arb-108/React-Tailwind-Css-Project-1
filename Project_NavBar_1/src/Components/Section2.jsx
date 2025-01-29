import React from 'react'
import PicCard from './PicCard'
import AdditionalCard from './AdditionalCard'

const Section2 = () => {
  return (
    <div className='py-5 p-2 bg-gray-100 xl:px-20'>
    <AdditionalCard check='yes' textposition="start" textheading="What Make Us Different?" textpara="Check out best service at you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"/>
    <div className='flex flex-col overflow-x-auto gap-4 sm:flex-row sm:justify-center py-5'>
    <PicCard textposition="center" imagePath="./Images/g4.png" cardHeading="Experienced" cardtext="Our experience of 25 years of building and making achievements in the world of development"/>
    <PicCard textposition="center" imagePath="./Images/g1.png" cardHeading="On Time" cardtext="Industrial development is our main line of business. We do Factory Construction, Warehouse and others"/>
    <PicCard textposition="center" imagePath="./Images/g2.png" cardHeading="competitive price" cardtext="The prices we offer you are very competitive without reducing the quality of the company's work in the slightest"/>
    <PicCard textposition="center" imagePath="./Images/g3.png" cardHeading="Best Materials" cardtext="Our experience building in the Commercial field includes Showrooms,Supermalls and Office Buildings"/>
    </div> 
</div>
  )
}

export default Section2