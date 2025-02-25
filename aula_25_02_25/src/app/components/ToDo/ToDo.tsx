

import Botao from "../Botao/Botao";

import { useState } from "react";



const ToDo = () =>{

    const [novaTarefa,setNovaTarefa] = useState("")
    
    const [tarefas, setTarefas] = useState<string[]>([])

    // const[var,setVar] para criação de variáveis que atualizam uma parte específica da tela

    const adicionarTarefa = () => {
        // adicionar uma nova tarefa a lista de tarefa
        if(novaTarefa.trim() !== "" ){
            setTarefas([...tarefas,novaTarefa]);
            
            setNovaTarefa("");
        }
    }

    const removerTarefa = (index : number) =>{
        // remover uma tarefa da lista de tarefa
        setTarefas(tarefas.filter((_,i) => i !== index))
    }

    return(
        <>
            <h1>Lista de Tarefas</h1>
            <input type='text' value={ novaTarefa } onChange={ (e) =>{ setNovaTarefa(e.target.value) } } />

            <Botao cor='green' texto="Adicionar Tarefa" clicado={ adicionarTarefa } />

            <ul>
                { tarefas.map((tarefa, index) => (
                    <li key={index}>
                        { tarefa }
                        <Botao cor='red' texto="Excluir Tarefa" clicado={ () => removerTarefa(index) } />
                    </li>
                ))}

            </ul>
        </>
    )
}

export default ToDo;