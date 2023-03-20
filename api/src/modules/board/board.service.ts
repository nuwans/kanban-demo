import { HttpException, Injectable } from '@nestjs/common';
import { CreateBoard } from './dto/create-board.dto';
import { PrismaService } from 'src/shared/service/prisma.service';
import { EditBoard, EditBoardColumn } from './dto/edit-board.dto';
import { CreateColumn } from '../coloumns/dto/create-column.dto';
import { DeleteBoard } from './dto/delete-board.dto';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}
  async addBoard(board: CreateBoard) {
    const { name, columns = [] } = board;
    const b = await this.prisma.board.create({
      data: {
        name,
        columns: {
          create: [...columns],
        },
      },
    });

    return b;
  }
  async getBoards() {
    const bords = await this.prisma.board.findMany({
      where: {},
      include: {
        columns: {
          include: { tasks: { include: { subTasks: true } } },
        },
      },
    });
    return bords;
  }
  async editBoard(board: EditBoard) {
    const { name, columns = [], id } = board;
    const existing: EditBoard = await this.prisma.board.findFirst({
      where: { id: id },
      include: {
        columns: true,
      },
    });
    if (!existing) {
      throw new HttpException({ error: 'Board not found!' }, 404);
    }
    const feilds: {
      updating: any[];
      deleting: Partial<EditBoardColumn>[];
      newColumns: CreateColumn[];
    } = {
      updating: [],
      deleting: [],
      newColumns: [],
    };
    const del = existing.columns
      .filter((ex) => {
        const obj = columns.find((ne) => ne.id === ex.id);
        return obj === undefined;
      })
      .map((r) => {
        return { id: r.id };
      });

    const newColumns = columns.filter((obj2) => {
      const obj1 = existing.columns.find((obj1) => obj1.id === obj2.id);
      return !obj1;
    });
    for (const item2 of columns) {
      const item1: EditBoardColumn = existing.columns.find(
        (x) => x.id === item2.id,
      );
      if (item1 && item1.name !== item2.name) {
        const { name, id, boardId } = item2;
        feilds.updating.push({ where: { id }, data: { name } });
      }
    }
    feilds.deleting.push(...del);
    feilds.newColumns = newColumns.map((nc) => {
      const { name } = nc;
      return { name, boardId: id };
    });
    const rs = await this.prisma.$transaction(async (prisma) => {
      const updatedRoot = await this.prisma.board.update({
        where: {
          id,
        },
        data: {
          name,
          columns: {
            deleteMany: [...feilds.deleting],
          },
        },
      });
      const inserted = await prisma.column.createMany({
        data: feilds.newColumns,
      });
      const updated = feilds.updating.map(async (updating) => {
        return await prisma.column.update({ ...updating });
      });

      const newOne = await prisma.board.findFirst({
        where: { id },
        include: { columns: true },
      });

      return { updatedRoot, updated, inserted, newOne };
    });

    return { existing, feilds, rs };
  }

  async deleteBoard(board:DeleteBoard) {
    const {id}=board;
    const rs = await this.prisma.$transaction(async (prisma) => {
      const deletedTasks = await this.prisma.task.deleteMany({
        where: {
          boardId:+id
        },
      });
      const deletedColumns = await this.prisma.column.deleteMany({
        where: {
          boardId:+id
        },
      });
      const deletedBoard = await this.prisma.board.delete({
        where: { id:+id }
      });
      return { deletedBoard };
    });
    
    return rs;
  }
}
