import {filterData,apiUrl} from './data'
import Cards from "./Components/Cards"
import Filter from "./Components/Filter"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Spinner from './Components/Spinner'



const App = () => {


const[courses,setCourses]=useState(null);
const [loading,setLoading]=useState(true);
const [category,setCategory] =useState(filterData[0].title)


     async function getalldata() {

      setLoading(true)
      try {
        let response=await fetch(apiUrl);
        let output=await response.json();
        setCourses(output.data)
      } catch (error) {
        toast.error("Network mai koi dikat hai")
      }

      setLoading(false);
      
     }

     useEffect(()=>{
 getalldata()
     },[])


  return (
    <div className='min-h-screen flex flex-col bg-[#FFF0DC] '>
  <div className=''>
  <Navbar/>
  </div>
  <div className=''>
  <div>
      <Filter filterData={filterData}category={category} setCategory={setCategory}/>
     
      </div>
      
      <div className='w-11/12 max-w-[1300px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
       {
         loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>) 
       }
      </div>

  </div>
      
     
    
    

    </div>
  )
}

export default App