import React from "react";
import { Button } from "@/components/ui/button";
import Cards1 from "./_components/cards1";
import Link from "next/link";

export default function page( {
  qtdTarefas,
  qtdTarefasPendentes,
  qtdTarefasConcluidas,
  qtdTarefasAndamento,
}) {
  return (
    <div>
      <div className="text-xl w-full bg-blue-500 h-12 text-white p-2 text-center font-semibold">
        DashBoard - Implementação CEP Lavras
      </div>
      <div className="text-xl w-full h-12 text-orange-500 p-4 text-end font-semibold gap-2 flex items-center justify-end">
        <Link href={"/tarefas"}>
          <Button className="px-4 text-xl bg-purple-600" title="Voltar">
            Voltar
          </Button>
        </Link>
      </div>
      <Cards1
        qtdTarefas={qtdTarefas}
        qtdTarefasPendentes={qtdTarefasPendentes}
        qtdTarefasConcluidas={qtdTarefasConcluidas}
        qtdTarefasAndamento={qtdTarefasAndamento} />
    </div>
  );
}
// Função getStaticProps para buscar os dados e configurar ISR
export async function getStaticProps() {
  const qtdTarefas = await total_Tarefas();
  const qtdTarefasPendentes = await total_TarefasPendentes();
  const qtdTarefasConcluidas = await total_TarefasConcluidas();
  const qtdTarefasAndamento = await total_TarefasAndamento();

  return {
    props: {
      qtdTarefas,
      qtdTarefasPendentes,
      qtdTarefasConcluidas,
      qtdTarefasAndamento,
    },
    revalidate: 10, // Regenera a página a cada 10 segundos
  };
}

