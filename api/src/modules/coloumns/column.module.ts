import { Global, Module } from '@nestjs/common';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';
import { PrismaService } from 'src/shared/service/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [ColumnController],
  providers: [ColumnService,PrismaService],
})
export class StageModule {}
