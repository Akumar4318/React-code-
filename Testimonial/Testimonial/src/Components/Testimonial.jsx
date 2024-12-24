import Card from "./Card"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";



const Testimonial = (props) => {

    let reviews=props.reviews
  return (
    <div>
    <div>
    <Card reviews={reviews[0]}/>
    </div>


      <div className="items-center mx-auto "><FaQuoteLeft className="text-violet-400" /></div>

          <div className="text-center mt-4 text-slate-500 ">
            {review.text}
          </div>

          <div  className="items-center mx-auto "> <button><FaQuoteRight  className="text-violet-400"/></button> </div>

          <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">

            <button className="cursor-pointer hover:text-violet-500">
          <button>  <FiChevronLeft /></button>
            </button>

            <button>
            <FiChevronRight />

            </button>

          </div>

            <div >

             <button className="bg-violet-400  hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-lg font-bold text-white text-lg mt-2"> Suprise me</button>

                 </div>

    </div>
  )
}

export default Testimonial