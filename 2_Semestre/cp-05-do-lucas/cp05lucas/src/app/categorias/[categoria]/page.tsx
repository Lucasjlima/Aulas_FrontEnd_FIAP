'use client';

import CompFooter from "@/app/components/compFooter/compFooter";
import CompHeader from "@/app/components/compHeader/compHeader";
import CompReceitaCard from "@/app/components/compReceitaCard/compReceitaCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


type Receita = {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
};

export default function CategoriaPage() {
  const { categoria } = useParams();
  const categoriaUrl = String(categoria);
const categoriaFormatada = decodeURIComponent(categoriaUrl)
  .replace(/-/g, " ")
  .replace(/\b\w/g, (l) => l.toUpperCase());
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: Receita[]) => {
        const categoriaDecodificada = decodeURIComponent(String(categoria));
        const filtradas = data.filter(
          (r) => r.categoria.toLowerCase() === categoriaDecodificada.toLowerCase()
        );
        setReceitas(filtradas);
      });
  }, [categoria]);

  return (
    <div className="min-h-screen flex flex-col">
      <CompHeader />

      <main className="flex-1 p-8 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">
          Receitas de {categoriaFormatada }
        </h2>

        {receitas.length === 0 ? (
          <p className="text-center text-gray-500">Nenhuma receita encontrada.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        )}
      </main>

      <CompFooter />
    </div>
  );
}
