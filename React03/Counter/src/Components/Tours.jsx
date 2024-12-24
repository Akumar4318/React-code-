import Card from "./Card"





const Tours = ({tours,removeTour}) => {

    

  return (
    <div className="flex items-center  flex-col justify-center">
        
        <div>
            <h1 className="m-[6vh] border-[7px] border-dashed border-blue-600 text-5xl flex items-center justify-center p-3 rounded-lg font-bold"> Plan with Abhishek</h1>
         
        </div>

        <div  className="flex items-center justify-center flex-wrap max-w-[1300px] m-auto ">

         

          {
              tours.map((tour)=>{
                
                return (
                   
                    <div key={ClipboardItem.id}>
                         <Card {...tour} removeTour={removeTour}></Card>
                    </div>
                   
                )
            })
          }
            
        </div>

    </div>
  )
}

export default Tours