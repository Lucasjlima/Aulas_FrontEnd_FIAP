"use client";

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const CompCcrAlertas = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token || token.trim() === "") {
            router.push("/login");
        }
    }, []);

    return (
        <>

            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">CCR Alertas</h1>

                {/* Botões */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <Link href="/reportar-eventos">
                        <button className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">
                            Reportar Evento
                        </button>
                    </Link>
                    <Link href="/monitorar-eventos">
                        <button className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">
                            Monitorar Eventos em Aberto
                        </button>
                    </Link>
                    <Link href="/solicitar-ajuda">
                        <button className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">
                            Solicitar Ajuda
                        </button>
                    </Link>
                    <Link href="/historico">
                        <button className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">
                            Histórico
                        </button>
                    </Link>
                </section>
            </main>
        </>
    )
}

export default CompCcrAlertas