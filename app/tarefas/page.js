
import Link from 'next/link'
import { listarTarefas } from "./actions"
import ListaTarefas2 from './_components/ListaTarefas2';
import FormCad from './_components/FormCad';


export default async function Page() {
  //buscando as tarefas no banco via Server Actions
  const tarefas = await listarTarefas();


  return (
    <div className=' text-center flex flex-col mx-auto w-full overflow-hidden'>
      <nav className='bg-blue-600 p-1 flex items-center justify-end'>
        <Link href="/" >
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400">Sair</button>
        </Link>
      </nav>
      <hr />
      <div className=' flex flex-col justify-center items-center rounded m-4 '>
        <h1 className='py-2 underline underline-offset-2 text-center w-full text-orange-400 font-bold'>Lista de Tarefas Senac Lavras 2025:</h1>

        {/* Mover o formulário e os botões para um Client Component */}
        <FormCad />
        <div >

          {tarefas.length === 0 ? (
            <p className="text-center text-red-600 p-1 mt-2  rounded">Nenhuma tarefa encontrada.</p>
          ) : (
            <ListaTarefas2 tarefas={tarefas} />
          )}
        </div>
      </div>
    </div>
  )
}
