import Link from "next/link";
import React from "react";

export default function Formlogin() {
  return (
    <form className="flex flex-col space-y-4 rounded w-1/3">
      <input
        type="email"
        placeholder="Digite seu email..."
        autoFocus
        className="rounded p-2 w-full text-blue-500"
      ></input>
      <input
        type="password"
        placeholder="Digite sua senha..."
        className="rounded p-2 w-full text-blue-500"
      ></input>

      <Link href={"/tarefas"}>
        <input
          type="button"
          value="Entrar"
          className="rounded p-2 w-full bg-blue-500 font-bold"
        />
      </Link>
    </form>
  );
}
