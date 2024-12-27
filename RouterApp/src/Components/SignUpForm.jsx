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
    <div>

        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

         
         <form action="" onSubmit={submitHandler}>
           <div>
           <label htmlFor=""><p>FirstName <sup>*</sup></p>
            <input type="text" value={FormData.firstName} name="firstName" onChange={changeHandler} placeholder="Enter your firstName" />
            </label>

            <label htmlFor=""><p>LastName <sup>*</sup></p>
            <input type="text" value={FormData.lastName} name="lastName" onChange={changeHandler} placeholder="Enter your lastName" />
            </label>
           </div>
            
            {/* Email Address */}

           <label htmlFor=""><p>Email Address <sup>*</sup></p>
            <input type="text" value={FormData.email} name="email" onChange={changeHandler} placeholder="Enter your Email Address" />
            </label>


            {/* createPassword and confirm Password */}


            <label htmlFor=""><p>
                Create Password <sup>*</sup></p>
            <input type={showPassword1 ? ('text'):('password')} value={FormData.password} name="password" onChange={changeHandler} placeholder="Enter your Password " />

            <span onClick={()=>{
                    setShowPassword1((prev) => !prev)
                }}>
                    {showPassword1 ? (<AiOutlineEyeInvisible />):(<AiOutlineEye /> )}
                </span>

            </label>


                      

            <label htmlFor=""><p>
                Create Confirm Password <sup>*</sup></p>
            <input type={showPassword2 ? ('text'):('password')} value={FormData.confirmPassword} name="confirmPassword" onChange={changeHandler} placeholder="Enter your confirm Password " />

            <span onClick={()=>{
                    setShowPassword2((prev) => !prev)
                }}>
                    {showPassword2 ? (<AiOutlineEyeInvisible />):(<AiOutlineEye /> )}
                </span>

            </label>

                <button>Create Account</button>
         </form>
    </div>
  )
}

export default SignUpForm