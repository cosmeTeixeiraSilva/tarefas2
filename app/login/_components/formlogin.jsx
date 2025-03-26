import Link from "next/link";
import React from "react";

export default function Formlogin() {
  return (
    <form className="flex flex-col space-y-4 rounded w-screen ">
      <input
        type="email"
        placeholder="Digite seu email..."
        autoFocus
        className="rounded p-2 w-[90vw] sm:w-1/3 text-blue-500 m-auto text-sm"
      ></input>
      <input
        type="password"
        placeholder="Digite sua senha..."
        className="rounded p-2 w-[90vw] sm:w-1/3 text-blue-500 m-auto text-sm"
      ></input>

      <Link href={"/tarefas"} className=" w-full flex m-auto">
        <input
          type="button"
          value="Entrar"
          className="rounded p-2 bg-blue-500 w-[90vw] sm:w-1/3 font-bold m-auto text-white text-sm hover:cursor-pointer"
        />
      </Link>
    </form>
  );
}
