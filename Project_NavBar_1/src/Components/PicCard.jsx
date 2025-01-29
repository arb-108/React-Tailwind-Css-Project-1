import React from 'react'

const PicCard = (props) => {
    const textposition=props.textposition || 'start';
    const cardwidth=props.cardwidth || 'min-w-[15rem]';
  return (
    <div className={`shadow-lg bg-transparent items-center flex flex-col gap-4 ${cardwidth} p-4 sm:max-w-[25%] sm:gap-5`}>
        <div className=''>
            <img  src={`${props.imagePath}`} alt="" />
        </div>
        <div className={`flex flex-col gap-4 items-${textposition}`}>

        <h2 className='text-3xl font-medium'>{props.cardHeading}</h2>
        <p className={`text-${textposition} font-extralight sm:leading-8`}>{props.cardtext}</p>
        </div>
    </div>
  )
}

export default PicCard