import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

 

const Navbar = (props) => {


        let isLoggedIn=props.isLoggedIn;
        let setIsLoggedIn=props.setIsLoggedIn;
        
       


  return (
    <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
    
    <Link to='/'>
    <img src={logo} alt="Logo" className='w-[160px] h-[32px]' loading='lazy' />
    </Link>

    <nav>
        <ul className='flex gap-x-6 text-white '>
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

    <div className='flex items-center gap-x-4  '>
       
       { !isLoggedIn && 
        <Link to='/Login'>
       <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >Login</button>
       </Link>}

       { !isLoggedIn &&
        <Link to='/signup'>
       <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'  >SignUp</button>
       </Link>}

      

       {isLoggedIn &&
        <Link to='/'>
       <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
        console.log('hi')
        setIsLoggedIn(false)
        toast.success('Logged Out')
       }}>LogOut</button>
       </Link>}

      { isLoggedIn &&
       <Link to='/dashboard'>
       <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >Dashboard</button>
       </Link>}
    </div>
        
         
    </div>
  )
}

export default Navbar