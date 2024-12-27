import SignUpImage from "../assets/signup.png"
import Template from "../Components/Template"



const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template title='Welcome Back' 
       desc1="Build skills for today,tommorrow, and beyond"
       desc2="Education tro furture-Proof your career"
       image={SignUpImage}
       formtype='signup'
       setIsLoggedIn={setIsLoggedIn}
       /> 
    </div>
  )
}

export default SignUp