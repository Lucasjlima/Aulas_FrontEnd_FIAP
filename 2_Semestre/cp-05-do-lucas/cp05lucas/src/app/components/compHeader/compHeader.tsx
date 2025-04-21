import Link from "next/link";
import { useTema } from "@/contexts/TemaContext";

const CompHeader = () => {
  const { tema, alternarTema } = useTema();

  return (
    <header className="bg-gray-600 text-white p-6 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-center sm:text-left mb-4 sm:mb-0">
        🍲 Sabores do Front
      </h1>

      <nav className="flex flex-wrap gap-4 justify-center sm:justify-end text-sm items-center">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/receitas" className="hover:underline">Receitas</Link>
        <Link href="/categorias/Sobremesas" className="hover:underline">Sobremesas</Link>
        <Link href="/categorias/Pratos%20Principais" className="hover:underline">Pratos Principais</Link>
        <Link href="/categorias/Entradas" className="hover:underline">Entradas</Link>
        
        {/* Botão de alternância de tema */}
        <button
          onClick={alternarTema}
          className="bg-white text-orange-600 px-2 py-1 rounded hover:bg-orange-100 transition text-xs font-medium"
        >
          {tema === "claro" ? "🌙 Escuro" : "🌞 Claro"}
        </button>
      </nav>
    </header>
  );
};

export default CompHeader;
