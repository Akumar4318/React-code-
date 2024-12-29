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
    
        <form action="" onSubmit={submitHandler}  className="flex flex-col w-full gap-y-4 mt-6 ">

            <label htmlFor="" className="w-full ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter">Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input type="email" required value={FormData.email} placeholder="Enter your email address" onChange={changeHandler} name="email" className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white" />
            </label>

            <label htmlFor="" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter">Password<sup className="text-pink-200">*</sup>
                </p>
                <input type={showPassword ? ('text'):('password')} required value={FormData.password} placeholder="Enter your Password" onChange={changeHandler}  className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white"  name="password"/>

                <span className="absolute right-3 cursor-pointer top-[38px]" onClick={()=>{
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF" /> )}
                </span>
                
                    <Link to='/ '> <p className="text-xs mt-1 text-blue-100 w-full max-w-max ml-auto">Forgot Password</p></Link>

            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 x-[12px] py-[8px] mt-6"> SignIn</button>

        </form>
     
  )
}

export default LoginForm