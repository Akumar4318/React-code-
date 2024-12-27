import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

 

const Navbar = (props) => {


        let isLoggedIn=props.isLoggedIn;
        let setIsLoggedIn=props.setIsLoggedIn;
        
       


  return (
    <div className='flex justify-evenly '>
    
    <Link to='/'>
    <img src={logo} alt="Logo" className='w-[160px] h-[32px]' loading='lazy' />
    </Link>

    <nav>
        <ul className='flex gap-x-3'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/'>About</Link>
            </li>

            <li>
                <Link to='/'>Contact</Link>
            </li>
            
        </ul>
    </nav>

    {/* Four button -> Login , signup, Logout, Dashboard */}

    <div className='flex ml-5 gap-3 '>
       
       { !isLoggedIn && 
        <Link to='/Login'>
       <button >Login</button>
       </Link>}

       { !isLoggedIn &&
        <Link to='/signup'>
       <button >SignUp</button>
       </Link>}

      

       {isLoggedIn &&
        <Link to='/logout'>
       <button onClick={()=>{
        console.log('hi')
        setIsLoggedIn(false)
        toast.success('Logged Out')
       }}>LogOut</button>
       </Link>}

      { isLoggedIn &&
       <Link to='/dashboard'>
       <button>Dashboard</button>
       </Link>}
    </div>
        
         
    </div>
  )
}

export default Navbar