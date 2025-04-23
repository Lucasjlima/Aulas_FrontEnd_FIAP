
import Image from "next/image";
import Link from "next/link";

type CompJogoCard = {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    anoLancamento: string;
    categoria: string;
    imagem: string;
};

const CompJogoCard = ({ id, nome, descricao, preco, anoLancamento, categoria, imagem }: CompJogoCard) => {
    return (
        <Link href={`/jogos/${id}`}>
            <div className="bg-zinc-900 text-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer duration-200 hover:scale-95 active:scale-80 mt-2.5">
                <Image
                    src={imagem}
                    alt={nome}
                    width={300}
                    height={100}
                    className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{nome}</h3>
                <p className="text-sm text-gray-500">{descricao}</p>
                <p className="text-sm text-red-500 font-semibold">R$ {preco}</p>
                <div className="flex justify-between text-xs text-white mt-2">
                    <span>{anoLancamento}</span>
                    <span>{categoria}</span>
                </div>
                <button className="bg-red-500 text-white rounded mt-1 px-2 py-1">
                    Alugar Agora
                </button>

            </div>
        </Link>
    );
};

export default CompJogoCard;