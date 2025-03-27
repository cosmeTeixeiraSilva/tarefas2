
import Link from 'next/link'
import { listarTarefas } from "./actions"
import FormCad from './_components/FormCad';
import CardTarefas from './_components/cards';
import TarefasResponsivo from './_components/tarefaResponsivo';

export default async function Page() {
  //buscando as tarefas no banco via Server Actions
  const tarefas = await listarTarefas();


  return (
    <div className=' text-center flex flex-col mx-auto w-full overflow-hidden bg-[#121212]'>
      <nav className='bg-blue-600 p-1 flex items-center justify-center sm:justify-end gap-4 fixed top-0 z-50 w-full border-b-2'>
        <Link href="/" >
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">Sair</button>
        </Link>
        <Link href="/dashboard" >
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">DashBoard</button>
        </Link>
      </nav>

      <div className=' flex flex-col justify-center items-center rounded mt-8 '>
        <h1 className='py-2 text-xl text-center w-full text-orange-400 font-bold'>Lista de Tarefas.</h1>

        {/* Mover o formulário e os botões para um Client Component */}
        <FormCad />
        <div >

          {tarefas.length === 0 ? (
            <p className="text-center text-red-600 p-1 mt-2  rounded">Nenhuma tarefa encontrada.</p>
          ) : (
            <TarefasResponsivo tarefas={tarefas} />
          )}
        </div>
      </div>
    </div>
  )
}
