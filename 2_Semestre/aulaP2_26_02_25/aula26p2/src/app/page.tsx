import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="bg-lime-300 text-yellow-900 p-4 text-4xl font-semibold">
      <h1>Bem vindo Tailwind CSS</h1>

      <Link href="/layoutTailwind">Layout Tailwind</Link>
    </div>

   
   </>
  );
}
