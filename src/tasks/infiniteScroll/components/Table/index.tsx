import type { Ref } from "react";
import type React from "react";

interface TableProps{
    children:React.ReactNode,
    className?: string | undefined,
   

}
const Table = ({children,className} : TableProps) => {
    return ( <table className={className}>{children}</table> );
}
interface THProps{
    children: React.ReactNode,
    className?:string

}
const TH = ({children,className}: THProps)=>{
    return (<th className={className}>{children}</th>)
}
interface TBodyProps{
    children: React.ReactNode,
    className?:string

}
const TBody = ({children,className}: TBodyProps)=>{
    return <tbody className={className}>{children}</tbody>
}
 interface TRProps{
    children: React.ReactNode,
    className?:string,
    ref?: Ref<HTMLTableRowElement> | undefined

 }
 const TR=({children,className,ref}: TRProps)=>{
    return (<tr ref={ref} className={className}>{children}</tr>)
 }
 interface TDProps{
    children:React.ReactNode,
    className?:string

 }
 const TD= ({children,className}: TDProps)=>{
    return <td className={className}>{children}</td>
 }

 Table.TH= TH;
 Table.TBody= TBody;
 Table.TR= TR;
 Table.TD= TD;

export default Table;