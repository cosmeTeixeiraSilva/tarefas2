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
      <div className="text-xl w-full m-auto h-12 text-orange-500 p-4 text-end font-semibold gap-2 flex items-center justify-end">

      </div>
      <Cards1 />

      <h1 className="text-white mt-8 w-full text-center text-xl opacity-50 ">

        CEP LAVRAS - MG
      </h1>
      <span className="text-sm text-orange-500 w-full text-center opacity-50">Prof. Cosme Teixeira Silva</span>

    </div>
  );
}
