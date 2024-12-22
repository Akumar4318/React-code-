/* eslint-disable react/prop-types */



// eslint-disable-next-line react/prop-types
const Filter = (props) => {

  // eslint-disable-next-line react/prop-types
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

 function filterHandler(title){
  setCategory(title);                         

 }


  return (
    
    <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 mx-auto py-4 justify-center">
     
     {filterData.map((data)=>{

          return (
            <button key={data.id} className={`bg-purple-300 rounded-lg px-4  py-1 font-medium text-white hover:bg-purple-500 hover:scale-105 transition-all duration-300   

              ${category === data.title ? 'bg-opacity-100 border bg-purple-600 border-white scale-125 px-4 gap-4': 'bg-opacity-60 border-transparent'}

            `} onClick={()=> filterHandler(data.title)}>
                {data.title}
            </button>
          )
     })}
    </div>
  )
}

export default Filter