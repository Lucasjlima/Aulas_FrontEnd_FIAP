'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit as Edit, FaTrash as Trash } from "react-icons/fa";

interface propEstilos {
    id : string;
    estilo : string;
    exibir : string;
    links : string;
}
const Estilo = () =>{

    const [estilos,setEstilos] = useState<propEstilos[]>([])

    
        const buscarEstilos = async() =>{
            try{
                const response = await fetch("http://localhost:8080/frontmusics/api/estilo/Editar");
                const data = await response.json();
                setEstilos(data);
            }
            catch(error){
                console.log(error)
            }
        }
        

    const handleDelete = async (id : string) =>{
        if(confirm("Tem certeza que deseja exluir?")){
            try{
                const response = await fetch(`http://localhost:8080/frontmusics/api/estilo/excluir/${ id }`,{
                    method : 'PUT',
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });
                if(response.ok){
                    alert("Registro excluído com sucesso!");
                    buscarEstilos();
                }
                else{
                    const errorData = await response.json();
                    alert(`Erro ao excluir, ${errorData.message || "Erro"}`)
                }
            }
            catch(error){
                console.error(error);
            }
        }
    }
    useEffect(()=>{
        buscarEstilos();
    },[])
    return(
        <>
            <h1>Editar Estilos Musicais</h1>

            <Link href="/estilos/cadastrar/novo">Cadastrar novo Estilo</Link>

            <table>
                    <tr>
                        <td>Estilo</td>
                        <td colSpan={ 2 }>Ação</td>
                    </tr>
                {
                    estilos.map((estilo,index) => 
                        <tr key={ index }>
                            <td>{ estilo.estilo }</td>
                            <td>
                                <Link href={`cadastrar/${estilo.links}`}>
                                    <button ><Edit /></button>
                                </Link>
                            </td>
                            <td><button onClick={() =>{ handleDelete(String(estilo.id)) }} disabled={Number(estilo.exibir) === 0 }><Trash /></button></td>
                        </tr>
                        
                    )
                }
            </table>
        </>
    )
}
export default Estilo;