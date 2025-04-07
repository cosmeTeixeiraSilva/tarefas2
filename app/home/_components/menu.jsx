import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Menu() {
  return (
    <>
      <nav className="bg-blue-600 p-2 flex  flex-col items-center justify-center  w-screen z-50 border-b-2 ">
        <Link href={"/"}>
          <Button className="bg-orange-400 text-xl w-[90vw]  font-bold hover:opacity-60 hover:bg-orange-400">
            Logout
          </Button>
        </Link>
      </nav>
      <h1 className=" text-orange-500 text-end mt-4 text-sm px-4 ">
        <p>Prof. Cosme Teixeira Silva </p>
        <p>Senac / MG</p>
        <p>Lavras</p>
      </h1>
    </>
  );
}
