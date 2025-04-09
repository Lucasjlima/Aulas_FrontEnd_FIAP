import Image from "next/image";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/meuContainer/Container";



export default function Home() {
  return (
    <>
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-1 grid grid-rows-3 gap-4 p-4">
          <Container bgColor="bg-gray-200 hover:bg-gray-100">Container 1</Container>

          <Container bgColor="bg-gray-300 hover:bg-gray-200">Container 2</Container>

          <Container bgColor="bg-gray-500 hover:bg-gray-400">Container 3</Container>
          

          </main>

          <Footer/>

        </div>
    </>
  );
}
