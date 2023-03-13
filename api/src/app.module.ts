import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './modules/board/board.module';
import { StageModule } from './modules/coloumns/column.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [BoardModule,StageModule,TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
