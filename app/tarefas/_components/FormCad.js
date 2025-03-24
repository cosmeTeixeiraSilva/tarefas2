"use client"
//Importando a Server Actions 
import { criarTarefa } from "../actions";

export default function FormCad() {


    return (
        <>
            {/* Formulário para Criar Nova Tarefa */}
            < form action={criarTarefa} className='flex flex-col gap-4 w-full  items-center justify-center ' >

                <input type="text" name="titulo" placeholder="Título" required className='px-2 rounded w-1/2 text-black' autoFocus />
                <input type="text" name="descricao" placeholder="Descrição" required className='px-2 rounded w-1/2 text-black' />
                {/*Quando Clicar no botão chama a ServerAction criarTarefa */}
                <button type="submit" className='bg-slate-500 p-1 rounded w-1/2 text-bold'>Adicionar</button>

            </form >
        </>

    )
}
