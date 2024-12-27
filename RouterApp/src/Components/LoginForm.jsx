import { useState} from "react"
import toast from "react-hot-toast";
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import {Link,useNavigate } from 'react-router-dom'



const LoginForm = ({setIsLoggedIn}) => {


    const navigate=useNavigate();

    const[FormData,setFormData]=useState({
        email:"",password:""
    })

    const[showPassword,setShowPassword]=useState(false)

 function changeHandler(e){
 
    setFormData((prevdata)=>{
        return {
            ...prevdata,[e.target.name]:e.target.value
        }
    })
 }

 function submitHandler(event){

    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In')
    navigate('./Dashboard')
    


 }

  return (
    
        <form action="" onSubmit={submitHandler}>

            <label htmlFor="">
                <p>Email Address<sup>*</sup>
                </p>
                <input type="email" required value={FormData.email} placeholder="Enter your email address" onChange={changeHandler} name="email" />
            </label>

            <label htmlFor="">
                <p>Password<sup>*</sup>
                </p>
                <input type={showPassword ? ('text'):('password')} required value={FormData.password} placeholder="Enter your Password" onChange={changeHandler} name="password"/>

                <span onClick={()=>{
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye /> )}
                </span>
                
                    <Link to='/ '> <p>Forgot Password</p></Link>

            </label>

            <button> SignIn</button>

        </form>
     
  )
}

export default LoginForm