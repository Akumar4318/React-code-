import { useContext, useEffect } from "react"
import Blogs from "./Components/Blogs"
import Header from "./Components/Header"
import Pagination from "./Components/Pagination"
import { AppContext } from "./Context/AppContext"
import {Routes,Route} from 'react-router-dom'



const App = () => {]
  const{getalldata}=useContext(AppContext)
 
  useEffect(()=>{
    
     



  },[])


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>
      </Routes>
    </div>
  )
}

export default App