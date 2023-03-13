import { Global, Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaService } from 'src/shared/service/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
