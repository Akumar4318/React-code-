
import { useState } from "react";
import Loader from "./Loader";
import UseGif from "../../Hooks/UseGif";

const Tag = () => {
  
    const[tag,setTag]=useState('')
 
    const{gif,Loading,getalldata}=UseGif(tag);
    
    function clickHandler(){
 getalldata()

    }

    function changeHandler(event){
 setTag(event.target.value)

    }

  return (

    <div className="w-1/2 h-auto p-3 bg-[#E7FBB4] rounded-lg border-2 border-black flex flex-col items-center gap-y-2">
        <h1 className="font-bold text-xl italic underline  ">Random {tag } Gif</h1>
        {
          Loading ? (<Loader />):(<img src={gif} alt="" className=" w-[300px] h-[300px] " /> )
        }
        <input
        className="w-10/12 gap-y-3 border-2 border-orange-400 rounded-md text-center " onChange={changeHandler} value={tag}
        />
        <button className="bg-[#C84C05] w-10/12 rounded-lg  text-xl p-3 font-bold " onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag