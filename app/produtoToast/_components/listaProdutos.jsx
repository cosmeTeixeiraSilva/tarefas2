"use client";

export default function ListagemProdutos({ produtos }) {
  return (
    <div className="text-white text-start w-1/3 mt-8">
      <h2>Meus Produtos Cadastrados</h2>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
