import React from 'react'

const AdditionalCard = (props) => {
    const textposition=props.textposition || 'center';
    const textheading2=props.textheading2 || '';
    const padding = props.textposition === 'start' ? 'p-4' : 'py-4';
    const check=props.check || '';
    const mWidth=check==='yes'?'md:max-w-[40%]':'';
    const flexRow=check==='yes'?'md:flex-row':'';
  return (
    <div className={`w-full font-poppins flex flex-col gap-4 ${padding} mt-4  items-${textposition}  sm:justify-between sm:p-10 ${flexRow}`}>
        <div>
        <h2 className='text-3xl font-medium sm:font-bold sm:text-4xl'>{props.textheading}</h2>
        <h2 className='text-3xl font-medium sm:font-bold sm:text-4xl'>{textheading2}</h2>
        </div>
        <h3 className={`text-${textposition} ${mWidth} sm:text-start text-wrap`}>{props.textpara}</h3>
    </div>
  )
}

export default AdditionalCard