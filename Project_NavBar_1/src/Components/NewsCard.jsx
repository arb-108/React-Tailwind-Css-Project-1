import React from 'react'

const NewsCard = (props) => {
    const textposition=props.textposition || 'start';
    const cardwidth=props.cardwidth || 'min-w-[15rem]';
  return (
    <div className={`shadow-lg bg-transparent items-center flex flex-col gap-4 ${cardwidth} p-4 sm:max-w-[25%] sm:gap-10`}>
        <div className=''>
            <img  src={`${props.imagePath}`} alt="" />
        </div>
        <div className={`flex flex-col gap-4 items-${textposition}`}>
            <div className='flex items-center gap-3'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-bold'>{props.numDate}</h2>
                    <h2 className='text font-medium'>{props.alpDate}</h2>
                </div>
                <h2 className='text font-medium sm:text-lg'>{props.cardHeading}</h2>
            </div>
            <p className={`text-${textposition} font-extralight sm:leading-8`}>{props.cardtext} <a className='text-nowrap text-blue-800 font-medium' href="">Read More</a></p>
        </div>
    </div>
  )
}

export default NewsCard