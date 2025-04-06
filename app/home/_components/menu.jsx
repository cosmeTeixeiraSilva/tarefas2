import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Menu() {
  return (
    <div className=" flex flex-col items-center justify-center m-auto w-screen">
      <Link href={"/"}>
        <Button className="bg-red-800 text-xl w-[80vw] mt-8">Sair</Button>
      </Link>
      <h1 className=" text-orange-500 text-center mt-4 text-sm px-4 ">
        <p>Prof. Cosme Teixeira Silva </p>
        <p>Senac / MG</p>
        <p>Lavras</p>
      </h1>
    </div>
  );
}
