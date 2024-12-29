import { useState } from "react"
import toast from "react-hot-toast"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import {  useNavigate } from "react-router-dom"


const SignUpForm = ({setIsLoggedIn}) => {

    const[FormData,setFormData]=useState({firstName:'',lastName:"",email:'',password:'',confirmPassword:''})

    function changeHandler(e){

        setFormData((prevData)=>{
            return{
                ...prevData,[e.target.name]:e.target.value
            }
        })
    }

    const navigate=useNavigate();
    const[showPassword1,setShowPassword1]=useState(false)
    const[showPassword2,setShowPassword2]=useState(false)

    function submitHandler(event){

        event.preventDefault();
        if(FormData.password != FormData.confirmPassword){
            toast.error("Both password should be same");
            return;
        }
        setIsLoggedIn(true)
        toast.success('Account Created')
        
        const accountData={
            ...FormData
        }
        
        console.log(accountData)

        
         navigate('/Dashboard')
    
    
     }


  return (
    <div className="">

        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

         
         <form action="" onSubmit={submitHandler}>
           <div className="flex gap-x-4 flex-col" >
           <label htmlFor="" className="w-full"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  font-inter">FirstName <sup className="text-pink-200">*</sup></p>
            <input type="text" value={FormData.firstName} name="firstName" onChange={changeHandler} placeholder="Enter your firstName"  className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white"/>
            </label>

            <label htmlFor=""><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter">LastName <sup className="text-pink-200">*</sup></p>
            <input type="text" value={FormData.lastName} name="lastName" onChange={changeHandler} placeholder="Enter your lastName" className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white"/>
            </label>
           </div>
            
            {/* Email Address */}

           <label htmlFor=""><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter">Email Address <sup className="text-pink-200">*</sup></p>
            <input type="text" value={FormData.email} name="email" onChange={changeHandler} placeholder="Enter your Email Address" className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white" />
            </label>


            {/* createPassword and confirm Password */}
                <div>
                    
            <label htmlFor="" className="relative"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter ">
                Create Password <sup className="text-pink-200">*</sup></p>
            <input type={showPassword1 ? ('text'):('password')} value={FormData.password} name="password" onChange={changeHandler} placeholder="Enter your Password " className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white" />

            <span  className="absolute right-3 cursor-pointer top-[40px]" onClick={()=>{
                    setShowPassword1((prev) => !prev)
                }}>
                    {showPassword1 ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"  /> )}
                </span>

            </label>


                      

            <label htmlFor="" className="relative"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-inter ">
                Create Confirm Password <sup className="text-pink-200">*</sup></p>
            <input type={showPassword2 ? ('text'):('password')} value={FormData.confirmPassword} name="confirmPassword" onChange={changeHandler} placeholder="Enter your confirm Password " className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-lg shadow-sm shadow-white" />

            <span  className="absolute right-3 cursor-pointer top-[70px]" onClick={()=>{
                    setShowPassword2((prev) => !prev)
                }}>
                    {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye  fontSize={24} fill="#AFB2BF" /> )}
                </span>

            </label>
                </div>

                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 x-[12px] py-[8px] mt-6">Create Account</button>
         </form>
    </div>
  )
}

export default SignUpForm