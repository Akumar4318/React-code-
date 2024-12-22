
import Card from "./Card";
import { useState } from "react";
// import { filterData } from "../data";



const Cards = (props) => {
 
    // eslint-disable-next-line react/prop-types
    let courses=props.courses;
    let category=props.category;
    const [likedcourses,setLikedcourses]=useState([])
   
   function getCourses(){

      if(category === "All"){
        
        let allcourses=[];
      Object.values(courses).forEach(courseCategoruy=>{
         courseCategoruy.forEach((course)=>{
            allcourses.push(course)
         })
      })
      
      return allcourses;
        }
        else{
          // main sirf specific category ka data array pass karunga
          {console.log(courses[category])}
          return courses[category]
        }
      

      }

  return (

    <div className="flex flex-wrap">
       {

        getCourses().map((course)=>{
            

          return  <Card key={course.id} course={course} likedcourses={likedcourses} setLikedcourses={setLikedcourses}/>
        })
       }
    </div>
  )
}

export default Cards