"use client";  // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";


export default function ListaTarefas({ tarefas }) {
    let i = 1;

    return (
        <div className="flex flex-col justify-center items-center rounded border border-white mt-8 ">


            {/* Lista de Tarefas */}
            <ul className="flex flex-col mx-auto mt-4 justify-evenly items-center w-full rounded">
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id} className='text-white w-full text-bold flex gap-x-2 justify-between items-center p-2 rounded'>
                        {i++} - {tarefa.descricao} - {tarefa.status}

                        <div className="flex bg-white gap-x-3 p-2 rounded">
                            {/* Formulário para Atualizar Status */}
                            <form action={atualizarTarefa} className='flex gap-x-2'>
                                <input type="hidden" name="id" value={tarefa.id} />
                                <select name="status" className='text-black'>
                                    <option value="Pendente">Pendente</option>
                                    <option value="Concluída">Concluída</option>
                                </select>
                                <button type="submit" className='text-green-600 '><FaCheck size={24} /> </button>
                            </form>

                            {/* Formulário para Excluir */}
                            <form action={excluirTarefa} >
                                <input type="hidden" name="id" value={tarefa.id} />
                                <button type="submit" className='text-red-700'> <FaRegTrashCan size={24} />   </button>
                            </form>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}
