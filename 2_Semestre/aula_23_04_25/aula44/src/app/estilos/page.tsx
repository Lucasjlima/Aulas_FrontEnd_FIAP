'use client'
import { useEffect, useState } from "react"

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
    },[])

    return (
        <>
            <h1>Estilos Musicais</h1>

            <ul>
                {
                    estilos.map((estilo, index ) => 
                        <li key={ index }>{ estilo.estilo }</li>
                    )
                }
            </ul>
        </>
    )
}

export default estilo;  