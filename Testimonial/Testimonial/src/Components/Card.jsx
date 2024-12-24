
const Card = (props) => {

    let review=props.reviews;
  return (
    <div className="flex flex-col md:relative ">
        
        <div className="absolute top-[-7rem] z-[10] mx-auto"> 
            <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-[20]" />

            <div  className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-23]"></div>
            </div>

        <div className="text-center mt-7">
            <p className='font-bold text-2xl capitalize'>{review.name}</p>

        </div>

          <div className="text-center mt-1">
            <p className="text-violet-600  uppercase text-sm">{review.job}</p>
          </div>

          
         
    </div>
  )
}

export default Card