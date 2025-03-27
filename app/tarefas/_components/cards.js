"use client";  // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { Card, CardTitle, CardHeader, CardDescription, CardFooter, CardContent } from "@/components/ui/card";

export default function CardTarefas({ tarefas }) {
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
        <div className="w-[90vw]">


            {tarefas.map((tarefa, index) => (
                <Card key={tarefa.uuid} className={`${handleCor(tarefa.status)}  text-white text-bold border border-white mt-4`}>
                    <CardTitle className="w-full mx-2 text-start text-xl mt-2">{index + 1} - {tarefa.descricao}</CardTitle>
                    <CardContent className={`w-full p-2 ${handleCor(tarefa.status)} text-black text-xl text-start`}>
                        {tarefa.status}
                    </CardContent>
                    <CardFooter className=" w-full p-2 flex justify-around gap-x-2 flex-col">
                        <>
                            {/* Formulário para Atualizar Status */}
                            <form action={atualizarTarefa} className="flex p-2 gap-6 items-center justify-between text-xl w-full">
                                <input type="hidden" name="uuid" value={tarefa.uuid} />
                                <select name="status" className="w-1/2 text-black p-2 h-8 rounded text-xl" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="" selected="true"></option>
                                    <option value="Andamento">Andamento</option>
                                    <option value="Pendente">Pendente</option>
                                    <option value="Concluída">Concluída</option>
                                </select>
                                <button type="submit" className="w-1/2 text-green-600  bg-white p-1 rounded text-bold text-xl"> Confirmar</button>
                                {/* Formulário para Excluir */}

                            </form>
                            <form action={excluirTarefa} className="text-xl p-2 w-full flex items-center justify-center">
                                <input type="hidden" name="uuid" value={tarefa.uuid} />
                                <button type="submit" className="text-red-700 bg-white font-bold rounded p-2 w-full flex items-center justify-center gap-2 "><FaRegTrashCan size={22} className="font-bold" /> Excluir</button>
                            </form>
                        </>

                    </CardFooter>
                </Card>
            ))}


        </div>
    );
}
