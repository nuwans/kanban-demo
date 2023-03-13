import { Injectable } from '@nestjs/common';
import { CreateColumn } from './dto/create-column.dto';
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class ColumnService {
  constructor(private prisma: PrismaService) {}
  async addColumn(column: CreateColumn) {
    const { name,boardId } = column;
    const s = await this.prisma.column.create({
      data: { name,boardId },
    });
    return s;
  }

}
