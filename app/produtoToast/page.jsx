"use client";
import { useState, useEffect } from "react";
import { criarProduto, ListarProdutos } from "./actions";
import ListagemProdutos from "./_components/listaProdutos";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const { toast } = useToast(); // Hook para exibir o toast
  const [message, setMessage] = useState("");
  const [messageBG, setMessageBG] = useState("bg-green-500");
  const [produtos, setProdutos] = useState([]);

  // Função para atualizar a lista de produtos
  const atualizarLista = async () => {
    const { status, produtos } = await ListarProdutos();
    setProdutos(produtos);
    console.log(status);
  };

  useEffect(() => {
    atualizarLista(); // Carrega os produtos ao montar o componente
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne recarregar a página automaticamente
    const formData = new FormData(event.target);
    const qtd = formData.get("qtd");

    if (!Number(qtd)) {
      setMessageBG("bg-red-800");
      setMessage("Campo quantidade deve ser numérico.");
      return;
    } else {
      setMessageBG("bg-green-500");
    }
    setMessage("Processando requisição...");
    const res = await criarProduto(formData);

    if (res.status === true) {
      console.log(res.message);
      toast({
        title: "Sucesso!",
        description: res.message,
        variant: "default",
      });
      atualizarLista(); // Atualiza a lista de produtos após adicionar
    }
  };

  // Faz a mensagem sumir após 3 segundos
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Limpa a mensagem após 3 segundos
      }, 3000);

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }
  }, [message]);

  return (
    <div className="w-full m-auto flex items-center justify-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center bg-white w-1/3 p-4 mt-16 rounded"
      >
        <h2 className="text-lg font-bold">Cadastrando Produto:</h2>

        <input
          type="text"
          name="descricao"
          placeholder="Descrição Curta do Produto..."
          required
          className="p-2 rounded text-black border border-black w-full"
        />
        <input
          type="text"
          name="qtd"
          placeholder="Quantidade de Entrada..."
          required
          className="p-2 rounded text-black border border-black w-full"
        />
        <input
          type="text"
          name="fornecedor"
          placeholder="Fornecedor do Produto..."
          required
          className="p-2 rounded text-black border border-black w-full"
        />

        {/* Botão  */}
        <button
          type="submit"
          name="actionType"
          value="produto1"
          className="bg-orange-500 p-2 rounded w-full text-bold text-sm text-white font-bold sm:text-xl hover:opacity-55"
        >
          Adicionar Produto.
        </button>
      </form>

      {/* Mensagem de sucesso/erro */}
      {message && (
        <h1
          className={`text-white text-center text-xl font-semibold mt-8 p-4 border border-white rounded w-1/3 ${messageBG}`}
        >
          {message}
        </h1>
      )}

      {/* Listagem dos Produtos */}
      <ListagemProdutos produtos={produtos} />
    </div>
  );
}
