"use client";  // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function ListaTarefas2({ tarefas }) {
    const [status, setStatus] = useState("Pendente");

    // Função para definir a cor com base no status
    const handleCor = (status) => {
        switch (status) {
            case "Andamento":
                return "bg-yellow-500";
            case "Pendente":
                return "bg-red-700";
            case "Concluída":
                return "bg-green-500";
            default:
                return "bg-gray-200";
        }
    };

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
                    {tarefas.map((tarefa, index) => (
                        <tr key={tarefa.uuid} className="text-white text-bold border border-white">
                            <td className="w-1/3 p-2 text-start">{index + 1} - {tarefa.descricao}</td>
                            <td className={`w-1/3 p-2 ${handleCor(tarefa.status)} text-black`}>
                                {tarefa.status}
                            </td>
                            <td className="p-2 flex justify-around gap-x-3">
                                {/* Formulário para Atualizar Status */}
                                <form action={atualizarTarefa} className="flex gap-x-8">
                                    <input type="hidden" name="uuid" value={tarefa.uuid} />
                                    <select name="status" className="text-black p-1 rounded" onChange={(e) => setStatus(e.target.value)}>
                                        <option value="Andamento">Andamento</option>
                                        <option value="Pendente">Pendente</option>
                                        <option value="Concluída">Concluída</option>
                                    </select>
                                    <button type="submit" className="text-green-600 ml-4 bg-white p-1 rounded text-bold"> Confirmar</button>
                                </form>

                                {/* Formulário para Excluir */}
                                <form action={excluirTarefa}>
                                    <input type="hidden" name="uuid" value={tarefa.uuid} />
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
