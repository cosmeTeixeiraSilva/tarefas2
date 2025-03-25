import React from "react";
import { Button } from "@/components/ui/button";
import Cards1 from "./_components/cards1";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="text-xl w-full bg-blue-500 h-12 text-white p-2 text-center font-semibold">
        DashBoard - Implementação CEP Lavras
      </div>
      <div className="text-xl w-full h-12 text-orange-500 p-4 text-end font-semibold gap-2 flex items-center justify-end">
        <Link href={"/tarefas"}>
          <Button className="px-4 text-xl bg-purple-600" title="Voltar">
            Voltar
          </Button>
        </Link>
      </div>
      <Cards1 />
    </div>
  );
}
