import React from 'react'
import laptop from "../assets/images/laptop.jpg";
const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-10   md:grid grid-cols-3'>
      <div className='  col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt="" className='inline'/>
      </div>
      <div className=' col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#3bc23b] font-bold my-2'>Learn From Experts</h1>
        <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla amet animi sapiente dolores numquam ullam molestias 
          atque incidunt esse,
           consequatur odit quo modi recusandae cumque commodi. Dolores qui rem cum.
           </p>
           <button className='w-[50%] bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
