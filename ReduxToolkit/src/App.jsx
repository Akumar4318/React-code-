import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset,incrementByAmount,decrementByAmount } from "./Features/Counter/Counter";


const App = () => {
  const[Amount,setAmount]=useState();
  const[DecAmount,setDecAmount]=useState();

  const count=useSelector((state)=> state.counter.value)
  
  const dispatch=useDispatch()

function IncrementHandler(){
    dispatch(increment())
}

function DecrementHandler(){
  dispatch(decrement())
}

function ResetHandler(){
  dispatch(reset())
}

function IncremnetByAmount(){
  dispatch(incrementByAmount(Amount))
}

function DecrementByAmount(){
  dispatch(decrementByAmount(DecAmount))
}



  return (
    <div>
          <p style={{fontSize:"5rem",margin:'10px'}}>Count:{count}</p>
          <button  style={{margin:"10px",background:"green"}} onClick={IncrementHandler}>Increment +</button>
          <button style={{margin:"10px",background:"red"}} onClick={DecrementHandler}>decrement -</button>
          <button style={{margin:"10px",background:"greenyellow",color:'black'}} onClick={ResetHandler}>Reset ME</button>

          <br /> <br /><br /><br />

          <input type="Number" placeholder="increment by your choice"  style={{margin:"10px",background:"white", padding:'10px',color:'red'}} onChange={(e)=>{
            setAmount(e.target.value)
          }}/> <br />
          <button style={{background:"green"}} onClick={IncremnetByAmount} >Incement by Amount</button>
 <br /><br /><br />

 <input type="Number" placeholder="Decrement by your choice"  style={{margin:"10px",background:"white", padding:'10px',color:'red'}} onChange={(e)=>{
  setDecAmount(e.target.value)
 }}  /> <br />
          <button style={{background:"red"}} onClick={DecrementByAmount}>Decrement by Amount</button>

    </div>
  )
}

export default App