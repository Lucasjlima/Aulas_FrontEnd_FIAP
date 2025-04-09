'use client'
import { useState } from "react";
;
const compFormulario = () => {
    const [nome, setNome] = useState("")
    return (
        <>
            <div className="p-4">
                <input type="text"
                    className="border p-2 rounded-md"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <br />
                <input type="text"
                    className="border p-2 mt-2 rounded-md "
                    placeholder="Digite sua idade"
                />
                <p className="mt-2">Seja bem vindo, {nome}!</p>


            </div>
        </>
    );

}

export default compFormulario; 