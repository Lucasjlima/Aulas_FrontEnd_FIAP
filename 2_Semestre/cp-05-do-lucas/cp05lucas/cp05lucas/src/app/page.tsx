"use client";
import Link from "next/link";
import CompFooter from "./components/compFooter/compFooter";
import CompHeader from "./components/compHeader/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <CompHeader/>
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Bem-vindo ao Livro de Receitas</h2>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-6">
          Descubra receitas incríveis organizadas por categoria. Clique abaixo e explore o mundo dos sabores!
        </p>

        <Link href="/receitas">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition delay 150 duration-300 ease-in-out">
            Ver Receitas
          </button>
        </Link>

        <img
          src="/imagens/chef.jpg"
          alt="Chef cozinhando"
          className="w-64 mt-10 drop-shadow-lg"
        />
      </main>

      <CompFooter/>
    </div>
  );
}
