"use client";  // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan } from "react-icons/fa6";
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
                        <th className="w-72 px-2 border border-white text-start">Descrição da Tarefa</th>
                        <th className="w-28 px-2 border border-white">Status Atual</th>
                        <th className="w-60 px-2 border border-white">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa, index) => (
                        <tr key={tarefa.uuid} className="text-white text-bold border border-white">
                            <td className={`${handleCor(tarefa.status)} w-1/3 p-2 text-start text-md text-white border-r-2 font-bold`}>{index + 1} - {tarefa.descricao}</td>
                            <td className={`w-1/3 p-1 ${handleCor(tarefa.status)} text-white border-r-2 text-md font-bold`}>
                                {tarefa.status}
                            </td>
                            <td className=" flex justify-evenly gap-x-1 ">
                                <>
                                    {/* Formulário para Atualizar Status */}
                                    <form action={atualizarTarefa} className="flex gap-8 my-1 ">
                                        <input type="hidden" name="uuid" value={tarefa.uuid} />
                                        <select name="status" className="text-black px-1 rounded" onChange={(e) => setStatus(e.target.value)}>
                                            <option value="" ></option>
                                            <option value="Andamento">Andamento</option>
                                            <option value="Pendente">Pendente</option>
                                            <option value="Concluída">Concluída</option>
                                        </select>
                                        <button type="submit" className="text-green-600  bg-white px-1 rounded text-bold" title="Confirmar Alteração"> Confirmar</button>
                                        {/* Formulário para Excluir */}

                                    </form>
                                    <form action={excluirTarefa} className="text-sm p-1">
                                        <input type="hidden" name="uuid" value={tarefa.uuid} />
                                        <button type="submit" className="text-red-700" title="Excluir Tarefa"><FaRegTrashCan size={24} /> </button>
                                    </form>
                                </>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    );
}
