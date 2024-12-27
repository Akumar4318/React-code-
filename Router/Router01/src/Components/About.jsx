import { useNavigate } from "react-router-dom"



export const About = () => {
    const navigatehome=useNavigate();

    function HomeHanlder(){
        navigatehome('/')
    }

  return (
    <div>About
        <div>
        <button onClick={HomeHanlder}> go to home page</button>
        </div>
    </div>
  )
}
