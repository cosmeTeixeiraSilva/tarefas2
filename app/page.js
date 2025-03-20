import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full text-center">
      <nav className="bg-blue-600 p-1 flex items-center justify-end">
        <Link href="/tarefas">
          <button className=" px-2 rounded text-orange-400 font-bold border border-orange-400">Ir para Tarefas</button>
        </Link>
      </nav>


      <div className="mx-auto rounded p-2 mt-4">


        <Image
          src={"./imagem1.svg"}
          alt="Descrição do SVG"
          width={400}
          height={400}
          className="mx-auto mt-14 p-2 rounded bg-white border-4 border-orange-400 "  // Adicionando drop-shadow-2xl
        />
        <p className="font-bold mt-4 text-orange-400">NORMALMENTE UMA LANDPAGE SOBRE O TEMA DO APP WEB</p>
        <p className="font-bold mt-4 text-orange-400">SENAC LAVRAS / MG</p>
      </div>
    </div>



  );
}
