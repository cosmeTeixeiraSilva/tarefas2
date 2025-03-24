// lib/TarefaService.js
import prisma from './db';

export class TarefaService {
    async criarTarefa(titulo, descricao) {
        return await prisma.tarefas.create({
            data: { titulo, descricao, status: "Pendente" }
        });
    }

    async listarTarefas() {
        return await prisma.tarefas.findMany({
            orderBy: {
                status: 'asc', // Ordena o status em ordem decrescente
            },
        });
    }


    async atualizarTarefa(id, status) {
        return await prisma.tarefas.update({
            where: { id },
            data: { status }
        });
    }

    async excluirTarefa(id) {
        return await prisma.tarefas.delete({
            where: { id }
        });
    }
    //Total de Tarefas
    async totalTarefas() {
        const qtdTarefas = await prisma.tarefas.count();
        return qtdTarefas;
    }
    // Total de Tarefas Pendentes
    async totalTarefasPendentes() {
        const qtdTarefas = await prisma.tarefas.count({
            where: {
                status: "Pendente"
            }
        });
        return qtdTarefas;
    }
    // Total de Tarefas Concluída
    async totalTarefasConcluida() {
        const qtdTarefas = await prisma.tarefas.count({
            where: {
                status: "Concluída"
            }
        });
        return qtdTarefas;
    }
    // Total de Tarefas Em Andamento
    async totalTarefasAndamento() {
        const qtdTarefas = await prisma.tarefas.count({
            where: {
                status: "Andamento"
            }
        });
        return qtdTarefas;
    }



}
