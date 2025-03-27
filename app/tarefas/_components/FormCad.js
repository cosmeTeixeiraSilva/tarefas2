"use client"
//Importando a Server Actions 
import { criarTarefa } from "../actions";

export default function FormCad() {


    return (
        <>
            {/* Formulário para Criar Nova Tarefa */}
            < form action={criarTarefa} className='flex flex-col gap-4 w-full  items-center justify-center ' >


                <input type="text" autoFocus name="descricao" placeholder="Descrição Curta da Tarefa..." required className='p-2 rounded text-black  w-[90vw] sm:w-1/3   ' />
                {/*Quando Clicar no botão chama a ServerAction criarTarefa */}
                <button type="submit" className='bg-orange-500 p-2 rounded w-[90vw] sm:w-1/3 text-bold text-sm text-white font-bold sm:text-xl hover:opacity-55'>Adicionar Tarefa</button>

            </form >
        </>

    )
}
