import { CompHeader } from "./components/compHeader/page";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen">

        <CompHeader/>
        {children}
      </body>
    </html>
  );
}
