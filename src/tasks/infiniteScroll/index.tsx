import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useData from "./useData";
import Table from "./components/Table";
interface DataProps{
    userId: number,
    id: number,
    title: string,
    body: string
}
const InfiniteScrollableTable = () => {
    const [page,setPage]= useState<number>(1);
    const [alldata,setAllData]= useState<DataProps[]>([]);
    const [hasMore,setHasMore]= useState<boolean>(true);

    const LIMIT = 20;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
   
    const url = useMemo(()=>{
       return `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`
    },[page]) 
    const {data,loading}= useData(url);

    useEffect(()=>{
    if (!data) return;
    // Stop further calls if last page
    if (data?.length < LIMIT) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasMore(false);
    }else{
        setHasMore(true); 
    }

    setAllData((prev) => {
      const existingIds = new Set(prev.map((item) => item.id));
      const filtered = data.filter((item) => !existingIds.has(item.id));
      return [...prev, ...filtered];
    });
    },[data]);

  

    const lastElementRef = useCallback((node: HTMLTableRowElement | null)=>{
        if(loading) return;
        if(observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) {      
                if (hasMore) {
                  setPage(prev => prev + 1);
                }
              }
        },
        { root: containerRef.current,
            rootMargin: "200px", // prefetch early
            // threshold: 0.1,
        }
        )
        if (node) observerRef.current.observe(node);

    },[loading,hasMore])
    return (<div className="tableContainer" ref={containerRef}>
      <Table>
            <Table.TR><Table.TD>slno</Table.TD>
            <Table.TD>id</Table.TD>
            <Table.TD>Title</Table.TD>
        </Table.TR>   
       
        <Table.TBody>
            {alldata?.map((item,index)=>
                index === alldata.length-1 ? ( <Table.TR ref={lastElementRef} key={item.id}>
                    <Table.TD>{item.id}</Table.TD>
                    <Table.TD>{item.userId}</Table.TD>
                    <Table.TD>{item.title}</Table.TD>
                </Table.TR>) : ( <Table.TR key={item.id}>
                <Table.TD>{item.id}</Table.TD>
                <Table.TD>{item.userId}</Table.TD>
                <Table.TD>{item.title}</Table.TD>
            </Table.TR>)
            )}
        </Table.TBody>
       </Table>
       {loading && (<div className="loadingDiv">Loading..</div>) } 
      {!hasMore && (<div className="noMoreDiv">No More Data</div>)}
    </div>);
}
 
export default InfiniteScrollableTable;