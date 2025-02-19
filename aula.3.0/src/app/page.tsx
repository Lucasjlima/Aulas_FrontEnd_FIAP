'use client'
import Botao from "./components/Botao/Botao";
import ToDo from "./components/ToDo/ToDo";
import Card, { Auxiliar } from "./components/Card/page";
import Header from "./components/Header/Header";
import Meucomponente from "./components/Meucomponente/page";

export default function Home() {
  return (
    <>
    
      <h1>Hello world!!!</h1>
      
      <Card />

      <Meucomponente />

      <Auxiliar/>

      <Botao cor='red' texto='Excluir' cliclado={() => {alert("Botao exlcuir foi pressionado") }}/>

      <Botao cor="green" texto='Acessar'/>

      <Botao texto='Confirmar' cliclado={() => { alert("Botão confirmar foi pressionado")}}/>

        <ToDo/>
    </>
  )
}