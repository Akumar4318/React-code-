import { useState } from "react"

const Card = ({id,name,image,price,info,removeTour}) => {

    const[readmore,setReadmore]=useState(false)
    const description= readmore ? info :`${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadmore(!readmore)
    }


  return (


    <div className="w-[400px] max-h-max p-[1rem] flex flex-col border-[2px] rounded-lg items-center shadow-md  shadow-slate-600 m-4 gap-5">
        <div >
            <img src={image} alt="" className="w-[380px] object-cover rounded-lg" />

            <div className="m-3 font-bold flex flex-col justify-center p-1">
                <h4 className="text-green-400" >₹ {price}</h4>
                <h4 className="text-[1.5rem]">{name}</h4>
            </div>

            <div>
                {description}
                <span className="text-[#12b0e8] cursor-pointer"  onClick={readmoreHandler}>
                    {readmore? `Show less`:`Read more`}
                </span>
            </div>
        </div>

        <button className="  bg-red-300 p-3 border border-red-700 rounded-lg text-[1.2rem] m-3  hover:bg-red-500 hover:scale-105" onClick={()=>
            removeTour(id)
        }>Not Intrested</button> 

    </div>
  )
}

export default Card