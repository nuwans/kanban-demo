import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Put, UsePipes } from '@nestjs/common';
import { BoardService } from './board.service';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { CreateBoard } from './dto/create-board.dto';
import { EditBoard } from './dto/edit-board.dto';


@ApiTags('boards')
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async addBoard(@Body() board:CreateBoard) {
    return this.boardService.addBoard(board);
  }
  @Get()
  async getBoards() {
    return this.boardService.getBoards();
  }
  @Put()
  async editBoard(@Body() board:EditBoard) {
    return this.boardService.editBoard(board);
  }
}
