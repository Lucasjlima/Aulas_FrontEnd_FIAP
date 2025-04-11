import { CompFooter } from "./components/compFooter/compFooter";
import { CompHeader } from "./components/compHeader/compHeader";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="m-0 p-0 min-h-screen font-serif">

        <CompHeader />

        {children}

        <CompFooter />

      </body>
    </html>
  );
}
