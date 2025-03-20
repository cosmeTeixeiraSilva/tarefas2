"use client"

import { criarTarefa } from "../actions";
import { motion } from "framer-motion";

export default function FormCad() {
    return (
        <motion.form
            action={criarTarefa}
            className="flex flex-col gap-4 w-full items-center justify-center"
            initial={{ opacity: 0, y: 0, x: 200 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.input
                type="text"
                name="titulo"
                placeholder="Título"
                required
                className="px-2 rounded w-1/2 text-black border border-blue-500"
                autoFocus
                whileFocus={{ scale: 1.05 }}
            />
            <motion.input
                type="text"
                name="descricao"
                placeholder="Descrição"
                required
                className="px-2 rounded w-1/2 text-black border border-blue-500"
                whileFocus={{ scale: 1.05 }}
            />
            <motion.button
                type="submit"
                className="bg-slate-500 p-1 rounded w-1/2 font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Adicionar
            </motion.button>
        </motion.form>
    );
}
