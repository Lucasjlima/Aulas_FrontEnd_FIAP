'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

type Receita = {
  id: number;
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string;
};


export default function Home() {
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then(res => res.json())
      .then(data => setReceitas(data));
  }, []);

  return (
    <>
      <div>
        {receitas.map((receita) => (
          <div key={receita.id}>
            <h2>{receita.nome}</h2>
            <p>{receita.categoria}</p>
            <Image
            src="/imagens/brigadeiro.jpg"
            alt="Brigadeiro"
            width={400}
            height={300}
            className="rounded"
            
            />
          </div>
        ))}

      </div>
    </>
  );
}
