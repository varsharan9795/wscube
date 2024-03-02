import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[170px]'>
      <div className='max-w-[1240px]   md:my-[100px] max-auto   text-center font-bold md:ml-[150px]'>
      <div className='text-xl md:text-3xl'>Learn With us</div>
      <h2 className='text-white  md:text-[60px] mt-4'>Grow with us</h2>
      <div className='md:text-[50px] text-white'>Learn
      <Typed className='pl-3'
                    strings={['web development','digital marketing', 'ethical hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
      </div>
      <button className='bg-black text-white p-3 rounded'>Get Started</button>
      </div>
     
    </div>
  )
}

export default Banner
