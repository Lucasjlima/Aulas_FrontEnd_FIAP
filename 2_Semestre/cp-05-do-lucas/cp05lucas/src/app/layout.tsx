import "./globals.css";
import { ReactNode } from "react";
import { TemaProvider } from "@/contexts/TemaContext";

export const metadata = {
  title: "Sabores do Front",
  description: "Livro de receitas em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen ">
        <TemaProvider>
          {children}
        </TemaProvider>
      </body>
    </html>
  );
}
