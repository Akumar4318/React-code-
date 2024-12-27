import frameImg from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'



const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        {console.log(setIsLoggedIn)}
        <div>

        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formtype ==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

       <div></div>
       <p>OR</p>
       <div></div>

       <button>
        <p>Sign Up with Google</p>
       </button>
        </div>


        <div>
            <img src={frameImg} alt="FrameImage" width={558} height={504} loading='lazy' />
            <img src={image} alt="students" width={490} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template