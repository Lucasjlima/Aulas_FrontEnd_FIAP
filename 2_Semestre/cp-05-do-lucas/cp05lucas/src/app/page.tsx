"use client";
import Link from "next/link";
import Image from "next/image";
import CompFooter from "./components/compFooter/compFooter";
import CompHeader from "./components/compHeader/compHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <CompHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-8 ">
        <h2 className="text-4xl font-bold text-gray-600 mb-4 text-center">Bem-vindo ao Livro de Receitas</h2>
        <p className="text-lg text-gray-300 text-center max-w-xl mb-6">
          Descubra receitas incríveis organizadas por categoria. Clique abaixo e explore o mundo dos sabores!
        </p>

        <Link href="/receitas">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition delay 150 duration-300 ease-in-out">
            Ver Receitas
          </button>
        </Link>
        <Image
          src="/imagens/foto1.jpg"
          alt="foto de um chef de cozinha"
          width={500}
          height={400}
          className="rounded-lg shadow-lg mt-2"
        />
      </main>

      <CompFooter />
    </div>
  );
}
