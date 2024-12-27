import Template from "../Components/Template"
import loginImage from '../assets/login.png'



const Login = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template title='Welcome Back' 
       desc1="Build skills for today,tommorrow, and beyond"
       desc2="Education tro furture-Proof your career"
       image={loginImage}
       formtype='login'
       setIsLoggedIn={setIsLoggedIn}
       /> 
    </div>
  )
}

export default Login