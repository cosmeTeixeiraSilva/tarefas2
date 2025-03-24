"use server"
import { TarefaService } from "@/lib/TarefaService";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

// ✅ Agora o componente é assíncrono e roda no servidor
export default async function Cards1() {
  const tarefaService = new TarefaService();

  // ✅ Pegando os dados diretamente no servidor
  const tarefas = await tarefaService.totalTarefas(); // Obtém a lista completa de tarefa
  const TarefasPendentes = await tarefaService.totalTarefasPendentes();
  const TarefasConcluidas = await tarefaService.totalTarefasConcluida();
  const TarefasAndamento = await tarefaService.totalTarefasAndamento();

  return (
    <div className="grid grid-cols-4 gap-2 px-2 mt-2">
      {/* Card 1 - Total de Tarefas */}
      <Card className="w-full h-44 bg-orange-500 text-white">
        <CardHeader>
          <CardTitle>Tarefas Registradas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">{tarefas} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">Ver Mais</Button>
        </CardFooter>
      </Card>

      {/* Card 2 - Tarefas Pendentes */}
      <Card className="w-full h-44 bg-blue-500 text-white">
        <CardHeader>
          <CardTitle>Tarefas Pendentes:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">{TarefasPendentes} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">Ver Mais</Button>
        </CardFooter>
      </Card>

      {/* Card 3 - Tarefas Concluídas */}
      <Card className="w-full h-44 bg-purple-600 text-white">
        <CardHeader>
          <CardTitle>Concluídas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">{TarefasConcluidas} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">Ver Mais</Button>
        </CardFooter>
      </Card>

      {/* Card 4 - Tarefas em Andamento */}
      <Card className="w-full h-44 bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>Em Andamento:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">{TarefasAndamento} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">Ver Mais</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
