-- DropIndex
DROP INDEX "Board_name_key";

-- CreateTable
CREATE TABLE "Stages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "boardId" INTEGER NOT NULL,

    CONSTRAINT "Stages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stages" ADD CONSTRAINT "Stages_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
