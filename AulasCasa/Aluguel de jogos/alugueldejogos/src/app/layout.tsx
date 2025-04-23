import "./globals.css";
import type { Metadata } from "next";
import CompHeader from "./components/headerComponent/headerComponent";
import CompFooter from "./components/footerComponent/footerComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>

        {children}



      </body>
    </html>
  );
}
