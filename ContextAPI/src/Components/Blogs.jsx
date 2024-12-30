import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import Spinner from "./Spinner";




const Blogs=()=>{

    //consume context 

    const{loading,posts}=useContext(AppContext);
   

    return(
        <div className="w-11/12 max-w-[700px] py-8 gap-y-5 flex flex-col mt-[65px] mb-[70px] ">

{
    loading ? (<Spinner/>):(posts.length === 0 ? (<div>No Post Found</div>):(
        posts.map((post)=>(
            <div key={post.id} className="flex  flex-col">
                <p className="font-bold text-red-600 text-lg ">{post.title}</p>
                <p className="text-[15px]">
                    By <span className="italic">{post.author}</span> on <span className="font-bold underline">{post.category}</span>
                </p>
                <p  className="text-[10px]">Posted on {post.date}</p>
                <p className="text-xs mt-[5px]">{post.content}</p>

                <div className="flex gap-x-3 mt-3">
                    {post.tags.map((tag,index)=>{
                        return <span key={index} className="text-blue-500 font-bold text-[8px] underline">{`#${tag}`}</span>
                    })}
                </div>
            </div>
        ))
    ))
}
        </div>
    )
}

export default Blogs