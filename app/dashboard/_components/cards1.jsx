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

export default function Cards1({
  qtdTarefas,
  qtdTarefasPendentes,
  qtdTarefasConcluidas,
  qtdTarefasAndamento
}) {
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
