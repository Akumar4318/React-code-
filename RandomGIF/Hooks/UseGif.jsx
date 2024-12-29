import { useEffect, useState } from "react";

const API_KEY='WUZwyWmpcbeBKMQn3SKH4RVUCCrAUuzb';
// let tagurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
// let Randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
let url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const UseGif = (tag) => {
      
        const[gif,setGif]=useState('');
        const[Loading,setLoading]=useState(false);

        async function getalldata() {
    
          setLoading(true);
    
          let response=await fetch(tag ? `${url}&tag=${tag}`  : url  )
          let imagesSource= await response.json();
          const allgif= imagesSource.data.images.downsized_large.url
          console.log(imagesSource)
          setGif(allgif)   
          
          setLoading(false)
          
        }
    
     useEffect(()=>{
      getalldata()
     },[])
    
     return{gif,Loading,getalldata}
     

    }
export default UseGif