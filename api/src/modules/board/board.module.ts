import { Global, Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { PrismaService } from 'src/shared/service/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [BoardController],
  providers: [BoardService,PrismaService],
})
export class BoardModule {}
