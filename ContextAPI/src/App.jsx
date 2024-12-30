import { useContext, useEffect } from "react"
import Blogs from "./Components/Blogs"
import Header from "./Components/Header"
import Pagination from "./Components/Pagination"
import { AppContext } from "./Context/AppContext"


const App = () => {

  const{getalldata}=useContext(AppContext);

  useEffect(()=>{

    getalldata();
  },[])

  return (
    <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center bg-[#FCFFC1]">
    <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App 