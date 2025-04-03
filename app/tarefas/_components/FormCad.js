"use client"
//Importando a Server Actions 
import { criarTarefa } from "../actions";

export default function FormCad({ carregarTarefas }) {
    //Função executada quando clica no botão
    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne recarregar a página automaticamente
        const formData = new FormData(event.target);
        //Chamando a Server Action para Registrar o produto no Banco de Dados no arquivo action.js
        const res = await criarTarefa(formData);
        // Atualiza a lista de produtos após adicionar
        carregarTarefas();

    };


    return (


        <>
            {/* Formulário para Criar Nova Tarefa */}
            < form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full  items-center justify-center ' >


                <input type="text" autoFocus name="descricao" placeholder="Descrição Curta da Tarefa..." required className='p-2 rounded text-black  w-[90vw] sm:w-1/3   ' />
                {/*Quando Clicar no botão chama a ServerAction criarTarefa */}
                <button type="submit" className='bg-orange-500 p-2 rounded w-[90vw] sm:w-1/3 text-bold text-sm text-white font-bold sm:text-xl hover:opacity-55'>Adicionar Tarefa</button>

            </form >
        </>

    )
}
