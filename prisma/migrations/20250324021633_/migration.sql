-- CreateTable
CREATE TABLE "tarefas" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "cidade" TEXT NOT NULL DEFAULT 'Lavras',

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tarefas_id_key" ON "tarefas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tarefas_uuid_key" ON "tarefas"("uuid");
