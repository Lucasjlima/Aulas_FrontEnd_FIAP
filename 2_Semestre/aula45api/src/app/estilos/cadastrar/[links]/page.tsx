"use client";
import { useParams } from "next/navigation";


const Estilo = () =>{

    const params = useParams();
    const linksParams = params.links
    return(
        <>
        { linksParams }
        </>
    )
}
export default Estilo;