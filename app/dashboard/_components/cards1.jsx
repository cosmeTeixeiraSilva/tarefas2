import { Button } from "@/components/ui/button";
import {
  total_Tarefas,
  total_TarefasPendentes,
  total_TarefasConcluidas,
  total_TarefasAndamento,
} from "../actions";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

export default async function Cards1() {
  const qtdTarefas = await total_Tarefas(); // Chamada direta da Server Action - Deve ser Async - Await
  const qtdTarefasPendentes = await total_TarefasPendentes(); // Chamada direta da Server Action - Deve ser Async - Await
  const qtdTarefasConcluidas = await total_TarefasConcluidas(); // Chamada direta da Server Action - Deve ser Async - Await
  const qtdTarefasAndamento = await total_TarefasAndamento(); // Chamada direta da Server Action - Deve ser Async - Await
  return (
    <div className="grid-cols-4 gap-2 flex  px-2 mt-2 ">
      {/* Coluna 1 - Card Quantidade de Tarefas  */}
      <Card className="w-1/4 h-44  bg-orange-500 text-white">
        <CardHeader>
          <CardTitle>Tarefas Registradas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold ">{qtdTarefas} tarefas</p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
      {/* Card 2 - Tarefas Pendentes*/}
      <Card className="w-1/4 h-44  bg-blue-500 text-white">
        <CardHeader>
          <CardTitle>Tarefas Pendentes:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {qtdTarefasPendentes} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
      {/* Card 3 - Tarefas Concluidas*/}
      <Card className="w-1/4 h-44 bg-purple-600 text-white">
        <CardHeader>
          <CardTitle>Concluídas:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {qtdTarefasConcluidas} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
      {/* Card 4 - Tarefas em Andamento*/}
      <Card className="w-1/4 h-44 bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>Em Andamento:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">
            {qtdTarefasAndamento} tarefas
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-1/2 m-auto bg-transparent border">
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
