'use client';
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";

export default function Botao() {
    return (
        <div className="min-h-screen flex flex-col">
          <Header title="Botão"/>     
          <Button text="Clique Aqui " onClick={() => alert("Botão foi clicado")}/>  

        </div>

    );
}
