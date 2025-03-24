// app/tarefas/actions.js
'use server';
import { TarefaService } from '../../lib/TarefaService';
import { revalidatePath } from 'next/cache';

export async function criarTarefa(formData) {
    const tarefaService = new TarefaService();
    const titulo = formData.get('titulo');
    const descricao = formData.get('descricao');
    await tarefaService.criarTarefa(titulo, descricao);
    revalidatePath("/tarefas"); // Atualiza a página principal automaticamente
    return { status: true, message: "Tarefa Criada com Sucesso..." }
}

export async function listarTarefas() {
    const tarefaService = new TarefaService();
    //retorna um array com todos os dados
    return await tarefaService.listarTarefas();
}

export async function atualizarTarefa(formData) {

    const tarefaService = new TarefaService();
    const id = parseInt(formData.get('id'));
    const status = formData.get('status');
    console.log(status);
    await tarefaService.atualizarTarefa(id, status);
    revalidatePath("/tarefas"); // Atualiza a página principal automaticamente
    return { status: true, message: "Tarefa Atualizada com Sucesso..." }


}

export async function excluirTarefa(formData) {
    const tarefaService = new TarefaService();
    const id = parseInt(formData.get('id'));
    await tarefaService.excluirTarefa(id);
    revalidatePath("/tarefas"); // Atualiza a página principal automaticamente
    return { status: true, message: "Tarefa Excluida com Sucesso..." }

}
