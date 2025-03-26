"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Cards1 from "./_components/cards1";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const [txtBtn, settxtBtn] = useState("Atualizar");
  const router = useRouter();

  return (
    <div>
      <div className="text-xl w-full bg-blue-500 h-12 text-white p-2 text-center font-semibold flex items-center justify-between">
        DashBoard Geral
        <div className="flex gap-x-2">
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

      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-white mt-8 w-[300px] text-center text-2xl rounded bg-orange-500 p-2"
      >
        CEP LAVRAS - MG
      </motion.h1>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-2xl text-orange-500 w-[300px] text-center  rounded bg-slate-200 p-2"
      >
        Transformando vidas
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-2xl text-orange-500 w-[300px] text-center  rounded bg-blue-400 p-2"
      >
        Maker
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-2xl text-orange-500 w-[300px] text-center  rounded bg-blue-800 p-2"
      >
        Inteligencia Artificial
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-2xl text-orange-500 w-[300px] text-center  rounded bg-blue-400 p-2"
      >
        IOT
      </motion.div>
      {/* Cards com os Resultados  */}
      <Cards1 />
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-2xl text-orange-500 w-[300px] text-center  rounded bg-blue-400 p-2 mt-4"
      >
        Programação
      </motion.div>

      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw", rotate: 180 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-white mt-8 w-[300px] text-center text-2xl rounded bg-orange-500 p-2"
      >
        CEP LAVRAS - MG
      </motion.h1>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw", rotate: 180 }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        className="text-white mt-8 w-[300px] text-center text-2xl rounded bg-orange-500 p-2"
      >
        SENAC - MG
      </motion.h1>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-white mt-8 w-[300px] text-center text-2xl rounded bg-orange-500 p-2"
      >
        SESC - MG
      </motion.h1>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-white mt-8 w-[300px] text-center text-2xl rounded bg-orange-500 p-2"
      >
        FECOMERCIO - MG
      </motion.h1>
    </div>
  );
}
