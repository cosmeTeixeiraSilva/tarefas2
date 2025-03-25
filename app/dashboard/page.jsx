"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Cards1 from "./_components/cards1";
import Link from "next/link";
import { motion } from "motion/react";
export default function page() {
  return (
    <div>
      <div className="text-xl w-full bg-blue-500 h-12 text-white p-2 text-center font-semibold flex items-center justify-between">
        DashBoard Geral
        <Link href={"/tarefas"}>
          <Button
            className="px-4 text-xl bg-purple-600 w-[90vw] sm:w-[200px]  m-auto "
            title="Voltar"
          >
            Voltar
          </Button>
        </Link>
      </div>
      <div className="text-xl w-full m-auto h-12 text-orange-500 p-4 text-end font-semibold gap-2 flex items-center justify-end"></div>
      <Cards1 />

      <motion.h1
        initial={{ x: "-100vw" }} // Começa fora da tela à direita
        animate={{ x: "100vw" }} // Move para fora da tela à esquerda
        transition={{ duration: 20, ease: "linear", repeat: Infinity }} // Loop infinito
        className="text-white mt-8 w-full text-center text-xl opacity-50 "
      >
        CEP LAVRAS - MG
      </motion.h1>
      <motion.div
        initial={{ x: "100vw" }} // Começa fora da tela à direita
        animate={{ x: "-100vw" }} // Move para fora da tela à esquerda
        transition={{ duration: 20, ease: "linear", repeat: Infinity }} // Loop infinito
        className="text-sm text-orange-500 w-full text-center opacity-50"
      >
        Prof. Cosme Teixeira Silva
      </motion.div>
    </div>
  );
}
