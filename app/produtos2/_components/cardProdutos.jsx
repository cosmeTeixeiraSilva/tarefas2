"use client"; // Agora esse componente é interativo

import { atualizarTarefa, excluirTarefa } from "../actions";
import { FaRegTrashCan } from "react-icons/fa6";
import BotaoEditar from "./botaoEditar";
import { useState } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import BotaoExcluir from "./botaoExcluir";

export default function CardProdutos({ produtos, carregarProdutos }) {
  return (
    <>
      {produtos.map((produto) => (
        <Card key={produto.id} className="my-4 w-[85vw]">
          <CardTitle className=" mx-2 text-start text-xl mt-2">
            Produto: <p>{produto.descricao}</p>
          </CardTitle>

          <CardContent className=" p-2 text-black text-xl text-start">
            Quantidade: <p>{produto.qtd} unidade(s)</p>
          </CardContent>

          <CardFooter className=" p-2 flex justify-around gap-x-2 flex-col">
            <BotaoEditar id={produto.id} carregarProdutos={carregarProdutos} />

            <BotaoExcluir id={produto.id} carregarProdutos={carregarProdutos} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
