import React from "react";

type BotaoProps = {
    texto? : string;
    cor? : string;
    clicado? : () => void;
}

const Botao: React.FC<BotaoProps> = ({
    texto = "Clique aqui",
    cor = "blue",
    clicado,


}) => {
    return(
        <>
            <button style={{backgroundColor:cor,color:'#fff', padding:'10px 20px', margin:'10px', border:'none' }} onClick={ clicado } >{texto}</button>        
        </>
    )
}

export default Botao;