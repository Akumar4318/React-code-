import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

 
const Pagination = () => {

    const{page,handelPageChange,totalPages}=useContext(AppContext)
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-[#FFE893]  p-3">
        <div className="flex   justify-between w-11/12 max-w-[670px] ">
       <div className="flex gap-x-2">
       {
            page>1 &&  (<button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={()=>handelPageChange(page-1)}> Previous</button>)
        }
        {
            page<totalPages && (<button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handelPageChange(page+1)}>Next</button>)
        }

       </div>

        <p>
            Page {page} of {totalPages}
        </p>
        </div>

    </div>
  )
}

export default Pagination