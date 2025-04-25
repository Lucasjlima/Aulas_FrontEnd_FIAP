'use client'
import { error } from "console";
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaEdit as Edit, FaTrash as Trash } from "react-icons/fa";

interface propEstilos {
    id: string
    estilo: string
    exibir: string
    links: string
}

const estilo = () => {

    const [estilos, setEstilos] = useState<propEstilos[]>([])

    useEffect(() => {
        const buscarEstilos = async () => {
            try {
                const response = await fetch("http://localhost:8080/frontmusics/api/estilo")
                const data = await response.json()
                setEstilos(data);

            }

            catch (error) {
                console.log(error)
            }

        }
        buscarEstilos()
    }, [])


    const handleDelete = async (id: string) => {
        if (confirm("Tem certeza que deseja excluir ?")) {
            try {
                const response = await fetch(`http://localhost:8080/frontmusics/api/estilo/excluir/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'

                    }
                });
                if (response.ok) {
                    alert("Registro excluido com sucesso!")
                    // Buscar Estilos();
                }
                else {
                    const errorData = await response.json();
                    alert(`Erro ao excluir",${errorData.message || "ERRO"}`)
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    useEffect

    return (
        <>
            <h1>Estilos Musicais</h1>
            <table>

                <tr>
                    <td>Estilo</td>
                    <td colSpan={2}>Ação</td>

                </tr>

                {
                    estilos.map((estilo, index) =>
                        <tr key={index}>
                            <td> {estilo.estilo} </td>
                            <td><button><Edit /></button></td>
                            <td><button onClick={() => { handleDelete(String(estilo.id)) }} 
                            disabled={Number(estilo.exibir) === 0}><Trash /></button></td>


                        </tr>
                    )
                }



            </table>


        </>
    )
}

export default estilo;  