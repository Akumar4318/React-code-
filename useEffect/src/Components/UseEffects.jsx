
import { useEffect, useState } from "react"


const UseEffects = () => {
    const[text,setText]=useState('')
    // const[name,setName]=useState('')
  
   //! Varitation 1--> IT RUN ON EVERY RENDER
    // useEffect(()=>{
      
    //   console.log('UI Rerendering')
    // })
  
    //! Varitation 2:-->   RUNS ON FIRSR RENDER 
  
    // useEffect(()=>{
  
    //   console.log("rendering first time")
  
    // },[])
     
  
    //! Varitation 3:--> ON CHANGE OF DEPENDENCY + ON FIRST RENDER
  
    
    // useEffect(()=>{
    //   console.log("on changing the text it will run")
    // },[text])
  
    //! Variation 4:-- UNMOUNTING (REMOVE EVENT LISTINER)
  
  
    useEffect(()=>{
    
      console.log('event listiner added ')
  
      
  
      return ()=>{
  
        console.log('event listiner removed')
      }
  
    },[text])
  
  
  
    function changeHandler(e){
      setText(e.target.value)
      console.log(text)
    }
  
  
  
     return (
       <div className=" flex h-lvh items-center justify-center flex-col">
  
  
     <input type="text" className="border border-black" onChange={changeHandler}/>
  
     <h1 className="text-4xl">change occurs here:-  {text}</h1>
  
       </div>
     )
}

export default UseEffects