"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Cards1 from "./_components/cards1";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [txtBtn, settxtBtn] = useState("Atualizar");

  async function handleAtualizar() {
    settxtBtn("Atualizando...");
    await fetch("/api/revalidate", { method: "POST" }); // Chama a API
    settxtBtn("Atualizar");
  }

  return (
    <div>
      <div className="text-xl w-full bg-blue-500 h-12 text-white p-2 text-center font-semibold flex items-center justify-between">
        DashBoard Geral
        <div className="flex gap-x-2">
          <Button
            className="px-4 text-xl bg-purple-600 w-[90vw] sm:w-[200px]"
            title="Atualizar"
            onClick={handleAtualizar}
          >
            {txtBtn}
          </Button>

          <Link href="/tarefas">
            <Button
              className="px-4 text-xl bg-orange-600 w-full sm:w-[200px]"
              title="Voltar"
            >
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      <Cards1 />

      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-white mt-8 w-full text-center text-xl opacity-50"
      >
        CEP LAVRAS - MG
      </motion.h1>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-sm text-orange-500 w-full text-center opacity-50 "
      >
        Prof. Cosme Teixeira Silva
      </motion.div>
    </div>
  );
}
