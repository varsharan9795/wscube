import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-[100%] bg-blue-900 min-h-60'>
      <div className='p-4 text-center'>
        <h1 className='text-2xl font-bold text-white'>WsCube Tech in Numbers</h1>
        <p className='pt-2 text-white'>Our learner community's unwavering trust and confidence continue to propel our success story forward.</p>

        <div className='row p-4 flex text-center'>
            <div className='md:pl-40 pt-6'>
                <h1 className='text-2xl font-bold text-white'>3M+</h1>
                <p className='pt-2 text-white'>Learners On YouTube</p>
            </div>
            <div className='md:pl-40 pt-6'>
            <h1 className='text-2xl font-bold text-white'>3M+</h1>
                <p className='pt-2 text-white'>Learners On YouTube</p>
            </div>
            <div className='md:pl-40 pt-6'>
            <h1 className='text-2xl font-bold text-white'>3M+</h1>
                <p className='pt-2 text-white'>Learners On YouTube</p>
            </div>
            <div className='md:pl-40 pt-6'>
            <h1 className='text-2xl font-bold text-white'>3M+</h1>
                <p className='pt-2 text-white'>Learners On YouTube</p>
            </div>
        </div>
      
        <div><FaArrowCircleUp className='fill-green-500 text-white text-3xl ml-[90%]'/></div>
      
      </div>
    </div>
  )
}

export default Footer
