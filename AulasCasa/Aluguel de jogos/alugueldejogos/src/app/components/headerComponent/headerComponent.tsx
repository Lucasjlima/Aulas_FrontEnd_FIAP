import Link from "next/link";

const CompHeader = () => {

  return (
    <header className="bg-black text-red-500 p-6 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-red-500">
      <h1 className="text-2xl font-bold text-center sm:text-left mb-4 sm:mb-0 ">
        Aluguel de jogos
      </h1>

      <nav className="flex flex-wrap gap-4 justify-center sm:justify-end text-sm items-center">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/receitas" className="hover:underline">###</Link>
        <Link href="/categorias/Sobremesas" className="hover:underline">###</Link>
        <Link href="/categorias/Pratos%20Principais" className="hover:underline">###</Link>
        <Link href="/categorias/Entradas" className="hover:underline">###</Link>
      </nav>
    </header>
  );
};

export default CompHeader;
