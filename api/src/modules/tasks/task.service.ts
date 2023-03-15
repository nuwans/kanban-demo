import { HttpException, Injectable } from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';
import { PrismaService } from 'src/shared/service/prisma.service';
import { EditTaskStatus } from './dto/edit-task-status.dto';
import { EditTaskColumn } from './dto/edit-task-column.dto';
import { UpdateTask } from './dto/update-task.dto';
import { DeleteTask } from './dto/delete-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async addTask(task: CreateTask) {
    const { title, boardId, columnId, description, subTasks } = task;
    const column = await this.prisma.column.findFirst({
      where: {
        boardId,
        id: columnId,
      },
    });
    const newSubTasks: any[] = subTasks.map((st: CreateTask) => {
      console.log(st);
      const { id, ...rest } = st;
      console.log(rest);
      return {
        ...rest,
      };
    });
    const t = await this.prisma.task.create({
      data: {
        title,
        description,
        boardId,
        columnId,
        subTasks: {
          create: [...newSubTasks],
        },
      },
    });
    return { task, t };
  }
  async editSubTask(task: EditTaskStatus) {
    const { id, status } = task;
    const t = await this.prisma.task.update({
      where: { id },
      data: {
        status,
      },
      include: {
        subTasks: true,
      },
    });
    return await this.prisma.task.findFirst({
      where: { id: t.parentId },
      include: { subTasks: true },
    });
  }
  async editTaskColumn(task: EditTaskColumn) {
    const { id, columnId } = task;
    return await this.prisma.task.update({
      where: { id },
      data: {
        columnId,
        subTasks: {
          updateMany: {
            where: { parentId: id },
            data: {
              columnId,
            },
          },
        },
      },
      include: {
        subTasks: true,
      },
    });
  }
  async updateTask(task: UpdateTask) {
    const { title, boardId, columnId, description, subTasks, id, parentId } =
      task;
    const existing: UpdateTask = await this.prisma.task.findFirst({
      where: {
        id: id,
      },
      include: {
        subTasks: true,
      },
    });
    if (!existing) {
      throw new HttpException({ error: 'Board not found!' }, 404);
    }
    const feilds: {
      updating: any[];
      deleting: Partial<UpdateTask>[];
      newColumns: CreateTask[];
    } = {
      updating: [],
      deleting: [],
      newColumns: [],
    };
    const del = existing.subTasks
      .filter((ex) => {
        const obj = subTasks.find((ne) => ne.id === ex.id);
        return obj === undefined;
      })
      .map((r) => {
        return { id: r.id };
      });
    const newTasks = subTasks.filter((obj2) => {
      const obj1 = existing.subTasks.find((obj1) => obj1.id === obj2.id);
      return !obj1;
    });
    for (const item2 of subTasks) {
      const item1: UpdateTask = existing.subTasks.find(
        (x) => x.id === item2.id,
      );
      if (item1 && item1.title !== item2.title) {
        const { title, id, boardId, parentId } = item2;
        feilds.updating.push({ where: { id }, data: { title } });
      }
    }
    feilds.deleting.push(...del);
    feilds.newColumns = newTasks.map((nc) => {
      const { title, status = false } = nc;
      return {
        title,
        boardId: existing.boardId,
        description: '',
        parentId: existing.id,
        columnId: existing.columnId,
        status,
      };
    });
    const rs = await this.prisma.$transaction(async (prisma) => {
      const updatedRoot = await this.prisma.task.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          subTasks: {
            deleteMany: [...feilds.deleting],
          },
        },
      });
      const inserted = await prisma.task.createMany({
        data: feilds.newColumns,
      });
      const updated = feilds.updating.map(async (updating) => {
        return await prisma.task.update({ ...updating });
      });

      const newOne = await prisma.task.findFirst({
        where: { id },
        include: { subTasks: true },
      });

      return { newOne };
    });

    return { ...rs };
  }
  async deleteTask(task: DeleteTask) {
    const { id } = task;
    console.log(task,'wddwdwdddedeed')
    const rs = await this.prisma.$transaction(async (prisma) => {
      const deleteSubTasks = await this.prisma.task.deleteMany({
        where: {
          parentId: +id,
        },
      });
      const deletedTask = await prisma.task.delete({
        where: { id: +id },
      });

      return { deleteSubTasks, deletedTask };
    });

    return { ...rs };
  }
}
