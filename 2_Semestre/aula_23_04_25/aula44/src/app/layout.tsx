import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <h1><Link href="/">FrontMusics</Link></h1>
        <p>
          <Link href="/estilos/">Estilos musicais | </Link>
          <Link href="/bandas/">Bandas</Link> | &nbsp;
          <Link href="/albuns/">Álbuns</Link>
        </p>
        {children}
      </body>
    </html>
  );
}
