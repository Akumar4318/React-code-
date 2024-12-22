import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";




const Card = (props) => {
  let course=props.course;
  let likedcourses=props.likedcourses;
  let setLikedcourses=props.setLikedcourses;
  

  function clickHandler(){
    
    if(likedcourses.includes(course.id)){
      // pahle se liked kiya huwa hai 
      // pahle se liked a  hai to remove karna hoga 
      setLikedcourses((prev)=> prev.filter((cid)=>(cid !== course.id)))
      toast.warning('liked removed')
    }
    else{
      // pahle se like nahi ye course
      // insert karna h ye course liked courses me
      if(likedcourses.length===0){
        setLikedcourses([course.id]);
      }else{
        // non empty pehle se 
        setLikedcourses((prev)=> [...prev,course.id]);
      }

      toast.success('liked successfully')
    }

  }
  

  return (
    <div className="w-[300px] bg-[#faa739] rounded-lg overflow-hidden bg-opacity-80 gap-3 m-3 transition-all duration-200 hover:scale-110 cursor-pointer">
      
      <div className="relative ">
        <img src={course.image.url} alt="" />
        <div className="w-[35px] h-[35px] bg-white rounded-full absolute right-5 bottom-0 flex justify-center items-center ">
        <button className="text-[20px]" onClick={clickHandler}>
          {likedcourses.includes(course.id) ? (<FcLike  />) : (<FcLikePlaceholder />)}
        </button>
      </div>
      </div>
      

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6 ">{course.title}</p>
        <p className="mt-2 text-white">
          {
            course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card