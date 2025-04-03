-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL DEFAULT 0,
    "fornecedor" TEXT NOT NULL DEFAULT 'Senac Lavras',

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_id_key" ON "produtos"("id");
