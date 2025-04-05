"use client";
import React, { useState } from "react";
import { excluirProduto } from "../actions";

export default function BotaoExcluir({ id, carregarProdutos }) {
  const handleExcluir = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    //Funções da page.js sendo usadas em um componente - Reutilização de Código

    const id = event.target.value;
    console.log(id);
    const res = await excluirProduto(id);

    if (res.status) {
      carregarProdutos(); // Atualiza a listagem após a exclusão
    }
  };

  return (
    <button
      onClick={handleExcluir}
      className="text-white  bg-red-600 hover:bg-red-800 rounded px-2"
      title="Excluir Produto"
      value={id}
    >
      Excluir
    </button>
  );
}
