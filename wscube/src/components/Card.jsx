import React from 'react'

const Card = (props) => {
    
   
    // console.log(props.url);
  return(
    <div className='shadow-xl my-4  h-[600px] hover:scale-105 bg-gray-200 duration-500'>
    
    <div className='card'>
      <div className='card-body'>
        <img src={props.url} alt="" />
        <button className='p-2 m-2 bg-blue-400 text-white hover:bg-blue-950 rounded'>React Js</button>
        <h3 className='p-2 text-xl font-bold'>React JS Course</h3>
        <ul className='pl-6 list-disc	'>
          <li>6 months traning</li>
          <li>React JS developer</li>
        </ul>
      </div>
    </div>
  </div>

  )
}
  
export default Card
