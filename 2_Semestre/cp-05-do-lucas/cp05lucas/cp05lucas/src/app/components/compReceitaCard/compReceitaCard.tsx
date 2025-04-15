'use client';
import Link from "next/link";

type ReceitaCardProps = {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
};

const CompReceitaCard = ({ id, nome, imagem, categoria }: ReceitaCardProps) => {
  return (
    <Link href={`/receitas/${id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer duration-300 hover:scale-110 active:scale-95">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
        <p className="text-sm text-gray-500">{categoria}</p>
      </div>
    </Link>
  );
};

export default CompReceitaCard;
