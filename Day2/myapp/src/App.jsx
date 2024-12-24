


import './App.css'
import Card from './component/Card'
import './component/Card.css'
import abhishek from './assets/1.png'
import aman from './assets/2.png'
import suraj from './assets/3.png'
import suman from './assets/4.jpg'

function App() {
 

  return (
   <div className='container'>
   <Card name="aman" desc='desc1' image={abhishek} style={{"border-radius":"20px"}} />
   <Card name="abhishek" desc='desc2' image={aman} style={{"border-radius":"20px"}} />
   <Card name="suraj" desc='desc3' image={suraj} style={{"border-radius":"20px"}} />
   <Card name="suman" desc='desc4' image={suman} style={{"border-radius":"20px"}} />
   </div>
  )
} 

export default App
