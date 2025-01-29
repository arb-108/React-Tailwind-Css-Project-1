import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-between xl:flex-row xl:justify-around xl:items-center  font-poppins sm:min-h-[calc(100vh-70px)] bg-gradient-to-t from-blue-400 to-slate-50'>
       <div className='p-3'>
       <h1 className='mt-[5vh] xl:text-xl'>Telecommunications</h1>
        <h2 className='text-5xl  mt-[1vh] leading-15 md:text-7xl md:leading-20'>Unlocking <span className='block text-[#0191ff] font-bold'>growth</span> <span className='block'>beyond </span>connectivity</h2>
        <a href='#' className='mt-[5vh] inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-103 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>GET IN TOUCH</a>
       </div>
       <div className='w-[100%] xl:w-[60%] xl:max-w-[50%] px-4'>
        <img src="Daco.png" alt="" />
       </div>
    </div>
  )
}

export default HeroSection