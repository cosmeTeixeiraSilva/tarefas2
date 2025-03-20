"use client";

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ListaTarefas2({ tarefas }) {
    return (
        <motion.table
            className="table-fixed mx-auto mt-4 w-[70vw] border-collapse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-2/4 p-2 border border-white">Descrição</th>
                    <th className="w-1/4 p-2 border border-white">Status</th>
                    <th className="w-1/4 p-2 border border-white">Ações</th>
                </tr>
            </thead>
            <tbody>
                {tarefas.map((tarefa, index) => (
                    <motion.tr
                        key={tarefa.id}
                        className="text-white font-bold border border-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 0.95 }}
                    >
                        <td className="w-1/3 p-2 text-start">{index + 1} - {tarefa.descricao}</td>
                        <td className={`w-1/3 p-2 ${tarefa.status === "Pendente" ? "bg-red-800" : "bg-green-500"} text-black`}>
                            {tarefa.status}
                        </td>
                        <td className="p-2 flex justify-around gap-x-3">
                            {/* Atualizar Status */}
                            <motion.form
                                action={atualizarTarefa}
                                className="flex gap-x-2"
                                whileTap={{ scale: 0.95 }}
                            >
                                <input type="hidden" name="id" value={tarefa.id} />
                                <select name="status" className="text-black p-1 rounded">
                                    <option value="Pendente">Pendente</option>
                                    <option value="Concluída">Concluída</option>
                                </select>
                                <motion.button
                                    type="submit"
                                    className="text-green-600 ml-4"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaCheck size={24} />
                                </motion.button>
                            </motion.form>

                            {/* Excluir Tarefa */}
                            <motion.form
                                action={excluirTarefa}
                                whileTap={{ scale: 0.95 }}
                            >
                                <input type="hidden" name="id" value={tarefa.id} />
                                <motion.button
                                    type="submit"
                                    className="text-red-700"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaRegTrashCan size={24} />
                                </motion.button>
                            </motion.form>
                        </td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
}
