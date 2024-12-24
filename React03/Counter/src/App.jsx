import { useState } from "react"
import Tours from "./Components/Tours"

import data from './data'



const  App = () => {

const [tours,setTour]=useState(data)

function removeTour(id){

  const newtour=tours.filter(tour=> tour.id !== id)
  setTour(newtour)
  console.log(newtour)
}

if(tours.length==0){
  return(
    <div className="flex items-center justify-center h-lvh flex-col font-bold gap-3">
      <p className="">Refresh to get new tour</p>
      <button className="p-3 bg-blue-400 rounded-lg " onClick={()=>{
        setTour(data)
      }}>Refresh</button>
    </div>
  )
}

  return (
    <div >
      

      <div>
       
        <Tours tours={tours} removeTour={removeTour}></Tours>
        {/* {console.log(Tour)} */}

      </div>
    
    </div>
  )
}

export default  App