"use client";
import React, { useState } from "react";
import { Autenticando } from "../actions";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/autContext";

export default function Formlogin() {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const res = await Autenticando(formData);

    if (res.ok) {
      login(res.user); // <-- aqui corrigido
      window.location.href = "/home";
    } else {
      alert(res.message);
    }

    console.log("Resposta do login:", res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 rounded w-[90vw] sm:w-1/2 p-8 bg-[#121212] border-2 border-orange-400"
    >
      <input
        type="text"
        name="user"
        placeholder="Digite seu email..."
        onChange={(e) => setUser(e.target.value)}
        autoFocus
        className="rounded p-2 w-full sm:w-1/2 text-blue-500 m-auto text-sm"
      />
      <input
        type="password"
        name="senha"
        placeholder="Digite sua senha..."
        onChange={(e) => setSenha(e.target.value)}
        className="rounded p-2 w-full sm:w-1/2 text-blue-500 m-auto text-sm"
      />

      <Button
        type="submit"
        className="rounded p-2 bg-blue-500 w-full sm:w-1/2 font-bold m-auto text-white text-sm hover:cursor-pointer hover:opacity-50 hover:bg-orange-400"
      >
        Entrar
      </Button>
      <p className="text-orange-400 w-full text-center">
        Prof. Cosme Teixeira Silva
      </p>
      <p className="text-orange-400 w-full text-center">Senac - MG</p>
    </form>
  );
}
