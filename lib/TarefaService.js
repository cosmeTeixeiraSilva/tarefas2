// lib/TarefaService.js

import prisma from './db';

export class TarefaService {
    async criarTarefa(titulo, descricao) {
        return await prisma.tarefas.create({
            data: { titulo, descricao, status: "Pendente" }
        });
    }

    async listarTarefas() {
        const tarefas = await prisma.tarefas.findMany({
            orderBy: [
                {
                    descricao: 'desc',
                }
            ]
        });

        return tarefas;
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
}
