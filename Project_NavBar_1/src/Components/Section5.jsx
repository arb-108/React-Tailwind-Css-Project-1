import React from 'react'
import NewsCard from './NewsCard'
import AdditionalCard from './AdditionalCard'

const Section5 = () => {
  return (
    <div className='py-5 p-2 bg-gray-100 sm:px-5 md:pt-10 shadow-sm'>
        <h2 className='px-4 text-2xl font-bold md:text-4xl md:p-4 md:text-center'>News & Updates</h2>
        {/* <AdditionalCard textposition="center" textheading="Our Excellent Services" textpara="Check out best service at you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"/> */}
        <div className='flex overflow-x-auto gap-4 sm:justify-center py-5 md:flex-wrap'>
            <NewsCard numDate='12' alpDate='JAN' textposition="start" imagePath="./Images/pexel-1.jpg" cardHeading="Elements of Content in Epoxy Paint " cardtext="Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin "/>
            <NewsCard numDate='23' alpDate='FEB' textposition="start" imagePath="./Images/pexel-2.jpg" cardHeading="Elements of Content in Epoxy Paint " cardtext="Epoxy paint and epoxy floor contractor. And what does do with the construction of existing buildings? Epoxy itself is included in the type of resin "/>
            <NewsCard numDate='06' alpDate='DEC' textposition="start" imagePath="./Images/pexel-4.jpg" cardHeading="Elements of Content in Epoxy Paint " cardtext="Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin "/>
           </div> 
    </div>
  )
}

export default Section5