import { useState } from "react"


const Counter = () => {

    const[val,setVal]=useState(0)

    let incrementHandler=()=>{
        setVal(val+1)
        console.log(val)
    }

    let decerementHandler=()=>{
       
            setVal(val-1) 
    }
        
        
    

  return (
    <div>
        <div className="flex h-lvh items-center justify-center bg-[#FFF0DC] flex-col gap-y-7">
            <p className="text-4xl text-orange-400">Increment And Decrement Counter</p>
            <div className="flex  border-2 border-black p-3 gap-5 bg-[#F0BB78] rounded-lg">
                <button className="p-1 text-6xl  m-4" onClick={decerementHandler}>-</button>
                <p className="p-1 m-4 text-6xl">{val}</p>
                <button className="p-1 text-6xl  m-4"  onClick={incrementHandler}>+</button>

            </div>
            <div className="bg-orange-600 rounded-lg p-3 " onClick={()=>{
                setVal(0)
            }}>Reset</div>
        </div>
    </div>
  )
}

export default Counter