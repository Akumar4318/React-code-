import { useState } from "react"


const App = () => {

  const[FormData,setFormData]=useState({firstName:'',lastName: '',email:'',comments:'',isVisible:false,mode:'',favCar:''})

console.log(FormData)
  function changeHandler(event){

    setFormData(prevFormData =>{
      const{name,value,checked,type}=event.target;
      return{
          ...prevFormData,[name]:type ==='checkbox' ? checked:value
      }
    });

  }

  function submitHandler(event){
    event.preventDefault();
    console.log('finally printing all data from the Form')
    console.log(FormData )
  }

  return (
    <div >
      
      <form action=""  onSubmit={submitHandler}>
        <input type="text" placeholder="firstName" onChange={changeHandler} name="firstName" value={FormData.firstName}/> <br /><br />
        <input type="text" placeholder="LastName" onChange={changeHandler} name="lastName" value={FormData.lastName} /> <br />
        <br />
        <input type="email" placeholder="Your Email " onChange={changeHandler} name="email" value={FormData.email}/>
        <br /> <br />
        <textarea name="comments" id="" placeholder="Enter your Commnets here" onChange={changeHandler} value={FormData.comments}/>
        <br />
        <input type="checkbox" id="isVisible " onChange={changeHandler} name="isVisible" checked={FormData.isVisible} />
        <label htmlFor="isVisible">Am i visible</label>

        <br /><br />

                <fieldset>
            <legend>Mode</legend>
            <input type="radio"  onChange={changeHandler} name="mode" value='Online-mode' checked={FormData.mode==="Online-mode" }  id="online-mode" />
                  <label htmlFor="online-mode">Online-Mode</label>
                  <br />
                  <input type="radio"  onChange={changeHandler} name="mode" value='Offline-mode' checked={FormData.mode ==="Offline-mode" }  id="offline-mode" />
                  <label htmlFor="offline-mode">Offline-Mode</label>
          </fieldset>


          <label htmlFor="favCar">Tell me your FavCar</label>
          <select name="favCar" id="favCar" value={FormData.favCar} onChange={changeHandler}>
            <option value="scarpio">Scarpio</option>
            <option value="farturner">farturner</option>
            <option value="tharr">Tharr</option>
            <option value="rangeRover">RangeRover</option>
            <option value="defender">Defender</option>
          </select>

          <button>Submit</button>
                  

      </form>
    </div>
  )
}

export default App