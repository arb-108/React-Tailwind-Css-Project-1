import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonsDiv = (props) => {
    const btn2Text=props.btn2Text || '';
    const decision=btn2Text===''?'hidden':'inline-block';
  return (
    <div>
    <div className=' flex justify-between items-center p-4 sm:p-10'>
        <a
  className="inline-block  border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
        {props.btnText}
    </a>
    <a
  className={`${decision} text-md`} href="#">
        {props.btn2Text}
        <IoIosArrowRoundForward className='inline-block text-2xl'/>
    </a>
    </div>
    </div>
  )
}

export default ButtonsDiv