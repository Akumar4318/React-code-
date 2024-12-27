
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react'





const App = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false)

  return (
  <div>

    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
  

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>



  </div>
  )
}

export default App