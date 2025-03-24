"use client";  // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { useState } from "react";
export default function ListaTarefas2({ tarefas }) {
    const [status, setStatus] = useState("Pendente")
    let i = 1;
    //Função que será chamada no OnChange do Select
    const handleChange = (e) => {
        //Atualiza o valor do  Status
        setStatus(e.target.value);
    }
    return (
        <>
            {/* Lista de Tarefas */}
            <table className="table-fixed mx-auto mt-4 w-[90vw] border-collapse ">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-2/4 p-2 border border-white">Descrição</th>
                        <th className="w-1/4 p-2 border border-white">Status</th>
                        <th className="w-1/4 p-2 border border-white">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.id} className="text-white text-bold border border-white">
                            <td className="w-1/3 p-2  text-start">{i++} - {tarefa.descricao}</td>
                            <td className={`w-1/3 p-2 ${tarefa.status === "Pendente" ? "bg-red-800" : "bg-green-500"} text-black`}>
                                {tarefa.status}
                            </td>

                            <td className="p-2   flex justify-around gap-x-3">
                                {/* Formulário para Atualizar Status */}
                                <form action={atualizarTarefa} className="flex gap-x-2">
                                    <input type="hidden" name="id" value={tarefa.id} />
                                    <select name="status" className="text-black  p-1 rounded" onChange={handleChange}>
                                        <option value="Andamento">Andamento</option>
                                        <option value="Pendente">Pendente</option>
                                        <option value="Concluída">Concluída</option>
                                    </select>
                                    <button type="submit" className="text-green-600 ml-4"><FaCheck size={24} /></button>
                                </form>

                                {/* Formulário para Excluir */}
                                <form action={excluirTarefa}>
                                    <input type="hidden" name="id" value={tarefa.id} />
                                    <button type="submit" className="text-red-700"><FaRegTrashCan size={24} /></button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
