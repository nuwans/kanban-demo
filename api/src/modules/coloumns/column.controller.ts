import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { CreateColumn } from './dto/create-column.dto';


@ApiTags('columns')
@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async addSColumn(@Body() column:CreateColumn) {
    return this.columnService.addColumn(column);
  }
  
}