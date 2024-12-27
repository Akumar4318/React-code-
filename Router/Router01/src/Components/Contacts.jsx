import { useNavigate } from "react-router-dom"


const Contacts = () => {

    const navi=useNavigate();
    const navigatehome=useNavigate();

 
    function clickHandler(){
        navi('/about')
    }
    function HomeHanlder(){
        navigatehome('/')
    }


  return (
    <div>Contacts
        <br />
        <button onClick={clickHandler}>Go to about page</button>
        <br />
        <br />
        
        <button onClick={HomeHanlder}> go to home page</button>
    </div>
  )
}

export default Contacts