

import Home from './Home'
import { About } from './About'
import Contacts from './Contacts'
import Labs from './Labs'

import {Routes,Route, NavLink} from 'react-router-dom'
import MainHader from './MainHader'

const Navar = () => {
  return (
    <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/labs'>Labs</NavLink>
      </li>
    </ul>
    <div>
    <div>
    <Routes>
      <Route path='/' element={<MainHader/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contacts/>}></Route>
      <Route path='/labs' element={<Labs/>}></Route>
    
      </Route>
      <Route path='*' element={<div><h1>404 Page Not Found</h1></div>}></Route>
      
    </Routes>
    </div>
    </div>
  </div>
  )
}

export default Navar