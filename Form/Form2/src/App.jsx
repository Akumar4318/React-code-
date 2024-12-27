import { useState } from "react"


const App = () => {

  const[FormData,setFormData]=useState({firstName:'',lastName:"",email:"",Country:'',address:"",State:'',ZIP:"",Offers:false,Comments:false,Candidates:false,notification:''})



 function changeHandler(event){
  console.log(FormData)
  setFormData(prevData=>{
    const{name,type,value,checked}=event.target;
    return{
      ...prevData,[name]:type ==='checkbox' ? checked: value
    }
  })
 }

 function clickHandler(){
  event.preventDefault();
  console.log('printing the form data ')
  console.log(FormData)

 }

  return (
<div className="items-center flex justify-center">

  <form action=""  className="border border-gray-500 flex flex-col  h-full m-2 p-3 w-[50%] mt-2 gap-y-1" >

    <p className="font-bold ">FirstName</p>
    <input type="text" name="firstName" placeholder="   FirstName" onChange={changeHandler} value={FormData.firstName}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

    <p className="font-bold ">LastName</p>
    <input type="text" name="lastName" placeholder="   FirstName" onChange={changeHandler} value={FormData.lastName}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

    <p className="font-bold ">Email</p>
    <input type="email" name="email" placeholder="   write you email address" onChange={changeHandler} value={FormData.email}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

      <label htmlFor="Country" className="font-bold">Country</label>
    <select name="Country" id="Country" value={FormData.Country} onChange={changeHandler} className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1">

      <option value="india">INDIA</option>
      <option value="usa">USA</option>
      <option value="south-africa">SOUTH-AFRICA</option>
      <option value="england">ENGLAND</option>
      <option value="australia">AUSTRALIA</option>
    </select>

    <p className="font-bold ">Street-Address</p>
    <input type="text" name="address" placeholder=" 123 main st" onChange={changeHandler} value={FormData.address}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

    <p className="font-bold ">City</p>
    <input type="text" name="City" placeholder=" DHANBAD" onChange={changeHandler} value={FormData.city}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

    <p className="font-bold ">State</p>
    <input type="text" name="State" placeholder="JHARKHAND" onChange={changeHandler} value={FormData.State}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />

    <p className="font-bold ">ZIP/Postal-Code</p>
    <input type='number' name="ZIP" placeholder=" 8282116" onChange={changeHandler} value={FormData.ZIP}  className="border border-blue-400 hover:border-blue-500 cursor-pointer mt-1 rounded-lg p-1" />


    <fieldset className="  p-2">

      <legend className="font-bold ">By Email</legend>

      <input type="checkbox" id="commnets " onChange={changeHandler} name="commnets" checked={FormData.Comments} />
        <label htmlFor="commnets" className="font-semibold mx-3">Comments
          <br />
          <p className="font-thin text-sm mx-6">Get Notified when somenones posts a comment on a poisting</p>
        </label>


        <br />

        <input type="checkbox" id="Candidates " onChange={changeHandler} name="Candidates" checked={FormData.Candidates} />
        <label htmlFor="Candidates" className="font-semibold mx-3">Candidates
          <br />
          <p className="font-thin text-sm mx-6">Get Notified when a candidate applies for a job</p>
        </label>

       
<br />

        <input type="checkbox" id="Offers " onChange={changeHandler} name="Offers" checked={FormData.Offers} />
        <label htmlFor="Offers" className="font-semibold mx-3">Offers
          <br />
          <p className="font-thin text-sm mx-6">Get Notified when accept and reject an offer</p>
        </label>
      </fieldset>  


      
    

      <fieldset>
        <legend className="font-bold">Push Notification</legend>
        <p className="text-gray-500">These are delivered via SMS to your mobile phone</p>

      
        <input type="radio"  onChange={changeHandler} name="notification" value='everything' checked={FormData.notification==="everything" }  id="everything" className="mx-2" />
        <label htmlFor="everyting">Everything</label>

        <br />
                  
       
      <input type="radio"  onChange={changeHandler} name="notification" value='email' checked={FormData.notification==="email" }  id="email" className="mx-2"/>
      <label htmlFor="email">Same as email</label>
                

      <br />

      <input type="radio"  onChange={changeHandler} name="notification" value='push Notification' checked={FormData.notification==="push Notification" }  id="push"  className="mx-2"/>
      <label htmlFor="push Notification"> N0 push Notification</label>
      </fieldset>


   <button className="bg-blue-500 rounded-lg p-1 text-white  w-[100px] hover:bg-blue-600" onClick={clickHandler}>Submit</button>
                             
  </form>
</div>
  )
}

export default App