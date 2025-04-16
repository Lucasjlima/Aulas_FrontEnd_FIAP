'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CompHeader from "@/app/components/compHeader/page";
import CompFooter from "@/app/components/compFooter/compFooter";
import Image from "next/image";
import Link from "next/link";


type Receita = {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
};

export default function ReceitaDetalhePage() {
  const { id } = useParams();
  const [receita, setReceita] = useState<Receita | null>(null);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: Receita[]) => {
        const encontrada = data.find((r) => r.id === Number(id));
        setReceita(encontrada || null);
      });
  }, [id]);

  if (!receita) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Carregando receita...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CompHeader />

      <main className="flex-1 p-8 bg-white max-w-3xl mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {receita.nome}
        </h2>

  

        <Image
          src={receita.imagem}
          alt={receita.nome}
          width={500}
          height={400}
          className="w-90 rounded-lg mb-6 place-self-center  bg-white  shadow hover:shadow"
        />

        <p className="text-gray-700 mb-4">
          <strong>Categoria:</strong> {receita.categoria}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Tempo de preparo:</strong> {receita.tempo}
        </p>

        <div className="mb-4">
          <strong>Ingredientes:</strong>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {receita.ingredientes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Modo de Preparo:</strong>
          <p className="text-gray-700 mt-2">{receita.modoPreparo}</p>
        </div>
      </main>

      <CompFooter />
    </div>
  );
}
