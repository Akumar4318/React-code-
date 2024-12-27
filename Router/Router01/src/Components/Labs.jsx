import { useNavigate } from "react-router-dom"


const Labs = () => {
    const navigate=useNavigate()


 function clickHandler(){
    navigate('/contact')
 }
    
  return (
    <div>Labs

        <button onClick={clickHandler}>Go to contact page</button>
    </div>
  )
}

export default Labs