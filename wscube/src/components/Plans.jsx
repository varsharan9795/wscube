import React from 'react'
import course from "../assets/images/course.jpg";
import laptop from "../assets/images/laptop.jpg";
import cours from "../assets/images/cours.jpg";
import Card from './Card';
const Plans = (props) => {
  return (
    <div className='py-[100px] px-2'>

      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>

        

        
        <Card url={course} />
        <Card url={laptop} />
        <Card url={cours}/>

      </div>
    </div>
  )
}

export default Plans
