"use client"; // Deve estar na primeira linha!

import Link from "next/link";
import { listarTarefas } from "./actions";
import FormCad from "./_components/FormCad";
import TarefasResponsivo from "./_components/tarefaResponsivo";
import { delay } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Page() {
  const [tarefas, settarefas] = useState([]);
  const [loading, setloading] = useState(true);



  const carregarTarefas = async () => {
    await delay(2000); // Espera 3 segundos antes de carregar os dados

    const { status, tarefas } = await listarTarefas();
    if (tarefas.length > 0) {
      settarefas(tarefas);
      console.log("Tem tarefas na tabela");
    } else {
      console.log("Não tem tarefas na tabela");
    }

    setloading(false); // Desativa o loading após a espera
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div className="text-center flex flex-col mx-auto w-full overflow-hidden bg-[#121212]">
      <nav className="bg-blue-600 p-1 flex items-center justify-center sm:justify-end gap-4 fixed top-0 z-50 w-full border-b-2">
        <Link href="/">
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">
            Sair
          </button>
        </Link>
        <Link href="/produtos">
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">
            Produtos
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">
            DashBoard
          </button>
        </Link>
      </nav>

      <div className="flex flex-col justify-center items-center rounded mt-8">
        <h1 className="py-2 text-xl text-center w-full text-orange-400 font-bold">
          Lista de Tarefas.
        </h1>

        <FormCad carregarTarefas={carregarTarefas} />

        <div>
          {loading ? (
            <p className="text-white text-xl">Carregando tarefas...</p>
          ) : (
            <TarefasResponsivo tarefas={tarefas} setloading={setloading} carregarTarefas={carregarTarefas} />
          )}
        </div>
      </div>
    </div>
  );
}
