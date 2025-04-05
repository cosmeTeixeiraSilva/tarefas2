"use client"; // Deve estar na primeira linha!


import { listarTarefas } from "./actions";
import FormCad from "./_components/FormCad";
import TarefasResponsivo from "./_components/tarefaResponsivo";
import { delay } from "@/lib/utils";
import { useState, useEffect } from "react";
import MenuPrincipal from "@/components/menu";


export default function Page() {
  const [tarefas, settarefas] = useState([]);
  const [loading, setloading] = useState(true);
  const [btnOpacity, setbtnOpacity] = useState("opacity-50");
  const [habililtado, setHabilitado] = useState(false);



  const carregarTarefas = async () => {
    await delay(2000); // Espera 3 segundos antes de carregar os dados

    const { status, tarefas } = await listarTarefas();
    if (tarefas.length > 0) {
      settarefas(tarefas);
      console.log("Tem tarefas na tabela");
      setbtnOpacity("opacity-100")
    } else {
      console.log("Não tem tarefas na tabela");
    }
    await delay(2000);
    setloading(false); // Desativa o loading após a espera
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div className="text-center flex flex-col mx-auto w-full overflow-hidden bg-[#121212]">
      <MenuPrincipal />
      <div className="flex flex-col justify-center items-center rounded mt-8">
        <h1 className="py-2 text-xl text-center w-full text-orange-400 font-bold">
          Lista de Tarefas.
        </h1>

        <FormCad carregarTarefas={carregarTarefas} btnOpacity={btnOpacity} />

        <div>
          {loading ? (
            <p className="text-white text-xl">Carregando tarefas...</p>
          ) : (
            <TarefasResponsivo tarefas={tarefas} setloading={setloading} carregarTarefas={carregarTarefas} habililtado={habililtado} />
          )}
        </div>
      </div>
    </div>
  );
}
