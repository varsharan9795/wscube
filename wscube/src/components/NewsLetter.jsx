import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-100% bg-[#4545ef] p-4 '>
    <div className='md:max-w-[1240px] md:flex justify-between py-[40px]'>
        <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn I.T skills</h1>
            <span className='text-white'>
                Sign up to our newsLetter and stay up to date
            </span>
        </div>
        <div  className='m-2'>
            <input type="text" className='sm:w-full rounded p-3 mr-2 text-slate-600 placeholder:email'/>
            <button className='bg-black text-white p-3 rounded'>Get Started</button>
            <br/>
            <p className='text-white'>We care about the protection of your data. Read our <br/> <a href="" className='text-black'> Privacy Policy</a></p>        
        </div>
    </div>
    </div>
  )
}

export default NewsLetter
