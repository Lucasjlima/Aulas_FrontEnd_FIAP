'use client';

import { useEffect, useState } from "react";
import CompHeader from "../components/compHeader/page";
import CompReceitaCard from "../components/compReceitaCard/compReceitaCard";
import CompFooter from "../components/compFooter/compFooter";

type Receita = {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
};

export default function ReceitasPage() {
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data) => setReceitas(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CompHeader />

      <main className="flex-1 p-8 bg-amber-50">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Todas as Receitas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {receitas.map((receita) => (
            <CompReceitaCard
              key={receita.id}
              id={receita.id}
              nome={receita.nome}
              imagem={receita.imagem}
              categoria={receita.categoria}
            />
          ))}
        </div>
      </main>

      <CompFooter />
    </div>
  );
}
