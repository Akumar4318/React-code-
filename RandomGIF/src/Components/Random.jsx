
import Loader from "./Loader";
import UseGif from "../../Hooks/UseGif";

const Random = () => {
         
    const{gif,Loading,getalldata}=UseGif()

    function clickHandler(){
 getalldata()
    }


  return (

    <div className="w-1/2 h-auto p-3 bg-[#E7FBB4] rounded-lg border-2 border-black flex flex-col items-center gap-y-2">
        <h1 className="font-bold text-xl italic underline  ">A Random GIF</h1>
        {
          Loading ? (<Loader />):(<img src={gif} alt="" className=" w-[300px] h-[300px] " /> )
        }
        <button className="bg-[#C84C05] w-10/12 rounded-lg  text-xl p-3 font-bold " onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random