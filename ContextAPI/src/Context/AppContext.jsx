import {  createContext, useState } from "react";



let baseurl='https://codehelp-apis.vercel.app/api/get-blogs'

export const AppContext=createContext();

export default function AppContextProvider({ children }){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null)

    //Data filling 

    async function getalldata(page=1,tag=null,category) {

        setLoading(true)
        let url= `${baseurl}?page=${page}`
        if(tag){
            url =url+`&tag=${tag}`
        }
        if(category){
            url=url+`&category=${category}`
        }
       try {
        
        const response=await fetch(url);
        const data=await response.json();
        console.log(data)
        setPage(data.page)
        setPosts(data.posts);
        setTotalPages(data.totalPages)

       } catch (error) {
        console.log('error in fetching data');
        setPage(1);
        setPosts([]);
        setTotalPages(null)
       }
        setLoading(false);
    }
 

    function handelPageChange(page){

        setPage(page);
        getalldata(page)

    }


    const value={

        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handelPageChange,
        getalldata


    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


