import Link from "next/link";

const CompHeader = () => {
  return (
    <header className="bg-gray-600 text-white p-6 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-center sm:text-left mb-4 sm:mb-0">
        🍲 Sabores do Front
      </h1>

      <nav className="flex flex-wrap gap-4 justify-center sm:justify-end text-sm">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/receitas" className="hover:underline">Todas as Receitas</Link>
        <Link href="/categorias/Sobremesas" className="hover:underline">Sobremesas</Link>
        <Link href="/categorias/Pratos%20Principais" className="hover:underline">Pratos Principais</Link>
        <Link href="/categorias/Entradas" className="hover:underline">Entradas</Link>
      </nav>
    </header>
  );
};
export default CompHeader;
