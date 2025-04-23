"use client";

import { useEffect, useState } from "react";
import CompJogoCard from "./components/compJogoCard/compJogoCard";
import "./globals.css";
import CompHeader from "./components/headerComponent/headerComponent";

type Jogo = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  anoLancamento: number;
  imagem: string;
  categoria: string;
};

export default function Home() {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  useEffect(() => {
    fetch("/data/jogos.json")
      .then((res) => res.json())
      .then((data) => setJogos(data));
  }, []);

  return (
    <main className="min-h-screen bg-black text-red-500 p-8">
      <CompHeader />

      <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-red-500">
        {jogos.map((jogo) => (
          <CompJogoCard
            key={jogo.id}
            id={jogo.id}
            nome={jogo.nome}
            descricao={jogo.descricao}
            preco={String(jogo.preco)}
            anoLancamento={String(jogo.anoLancamento)}
            categoria={jogo.categoria}
            imagem={jogo.imagem}
          />
        ))}
      </div>
    </main>
  );
}
