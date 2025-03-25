"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Cards1() {
  const [dados, setDados] = useState({
    qtdTarefas: 0,
    qtdTarefasPendentes: 0,
    qtdTarefasConcluidas: 0,
    qtdTarefasAndamento: 0,
  });

  // Função para buscar os dados da API
  const fetchDados = async () => {
    try {
      const res = await fetch("/api/tarefas");
      const data = await res.json();
      console.log(data);
      setDados(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 px-2 mt-20 ">
      {/* Card 1 - Total de Tarefas */}
      <Card className="w-[90vw] sm:w-full h-44 bg-orange-500 text-white m-auto animate-bounce">
        <CardHeader>
          <CardTitle>Tarefas Registradas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">{dados.qtdTarefas} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className=" w-full sm:w-full m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>

      {/* Card 2 - Tarefas Pendentes */}
      <Card className="w-[90vw] sm:w-full h-44 bg-blue-500 text-white m-auto animate-pulse">
        <CardHeader>
          <CardTitle>Tarefas Pendentes:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {dados.qtdTarefasPendentes} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-full m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>

      {/* Card 3 - Tarefas Concluídas */}
      <Card className="w-[90vw] sm:w-full  h-44 bg-purple-600 text-white m-auto animate-bounce">
        <CardHeader>
          <CardTitle>Concluídas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {dados.qtdTarefasConcluidas} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-fullm-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>

      {/* Card 4 - Tarefas em Andamento */}
      <Card className="w-[90vw] sm:w-full  h-44 bg-blue-800 text-white m-auto animate-pulse">
        <CardHeader>
          <CardTitle>Em Andamento:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {dados.qtdTarefasAndamento} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-full m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
