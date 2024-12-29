import Random from "./Components/Random"
import Tag from "./Components/Tag"


const App = () => {
  return (

  
      <div className="flex  flex-col items-center w-full bg-[#FFF0DC]">

       
          <h1 className="bg-[#F0BB78] w-[100%] text-center m-2 p-2 text-3xl font-serif  italic border-orange-600 border-2 rounded-lg">Random GIFS</h1>
       
        <div className="w-1/2 items-center flex flex-col gap-y-3 ">
          <Random/>
          <Tag/>
        </div>
      </div>
   
    
  
  )
}

export default App