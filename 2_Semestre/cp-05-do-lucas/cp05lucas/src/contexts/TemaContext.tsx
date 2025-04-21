"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TemaContextType = {
  tema: "claro" | "escuro";
  alternarTema: () => void;
};

const TemaContext = createContext<TemaContextType | undefined>(undefined);

export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [tema, setTema] = useState<"claro" | "escuro">("claro");

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "escuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      <div className={tema === "claro" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        {children}
      </div>
    </TemaContext.Provider>
  );
};

export const useTema = () => {
  const context = useContext(TemaContext);
  if (!context) throw new Error("useTema deve ser usado dentro do TemaProvider");
  return context;
};
