-- AlterTable
ALTER TABLE "tarefas" ADD COLUMN     "dia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hora" TEXT NOT NULL DEFAULT '00:00';
