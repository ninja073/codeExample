import { useEffect, useState } from "react";
interface DataProps{
    userId: number,
    id: number,
    title: string,
    body: string
}
const useData = (url:string)=>{
    const [data,setData]= useState<DataProps[]>([]);
    const [loading,setLoading]= useState<boolean>(false);
    const [error,setError]= useState<string | null>(null);
    const controller = new AbortController();
   
    useEffect(()=>{
        const fetchData = async (url:string)=>{
        
            try {
             setLoading(true)
             const data = await fetch(url);
             if (!data.ok) {
                throw new Error("API error");
              }
             const result = await data.json();
             setData(result)
            } catch (err: unknown) {
                if (err instanceof Error) {
                  if (err.name === "AbortError") return;
              
                  setError(err.message);
                } else {
                  setError("Unknown error");
                }
              }finally{
             setLoading(false)
            }
         }
        fetchData(url);
        return () => controller.abort();
    },[url])

    return {data,loading,error}
}
export default useData