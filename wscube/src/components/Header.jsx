import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {
  const[toggle,setToggle]=useState(false);
  return (
    <div className='bg-blue-500 p-4'>
        <div className="max-w-[1240px] items-center py-[12px] flex justify-between  mx-auto">
            <div className='text-3xl font-bold'>
                Ws cubetech
            </div>
            {
              toggle ?
              <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
              :
              <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
           
             
            <ul className=' hidden md:flex text-white gap-5'>
                <li>Home</li>
                <li>Company</li> 
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px]
            
            ${toggle ?'left-[0]':'left-[-100%]'}
            `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
