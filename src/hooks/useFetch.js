import { useState,useEffect } from "react";
export default function useFetch(url,options) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(true)
    const [data,setData] = useState(true)

useEffect(()=>{
  const fetchData = async()=>{
try{
  const response = await fetch(url,options)
  const data = await response.json()
  setData(data)
  setLoading(false)
} catch (error){
setError(error)
setLoading(false)
}
  }
  fetchData()
},[])
return{
    data,loading,error
}
}
