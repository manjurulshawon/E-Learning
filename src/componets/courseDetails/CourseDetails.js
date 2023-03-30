import React from 'react'
import { useParams } from 'react-router-dom'

import { products } from '../../products'

const CourseDetails = () => {
    const {courseId} = useParams()

    const course = products.find(data=>data._id === courseId)
   const addToCart = (id)=>{
    console.log(id)
   }
  return (
    <div style={{paddingTop: "100px"}}>
        <h1>{course.course_name}</h1>
        <button onClick={()=>addToCart(courseId)}>Add To Cart</button>
    </div>
  )
}

export default CourseDetails