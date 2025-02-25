'use client'

import Botao from "./components/Botao/Botao";
import Card, { Auxiliar } from "./components/Card/page";
import Header from "./components/Header/Header";
import Meucomponente from "./components/Meucomponente/page";
import ToDo from "./components/ToDo/ToDo";

export default function Home() {
  return (
    <>
    
      <h1>Hello world!!!</h1>
      
      <Card />

      <Meucomponente />

      <Auxiliar/>

      <Botao cor='red' texto='Excluir' clicado={()=>{ alert("Botão excluir foi pressionado!") }} />

      <Botao cor='green' texto='Acessar' />
      
      <Botao texto='Confirmar' clicado={() =>{ alert("Botão Confirmar foi pressionado!")}}/>
      
      <ToDo />


    </>
  )
}