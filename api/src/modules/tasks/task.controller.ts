import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Put, UsePipes } from '@nestjs/common';
import { TaskService } from './task.service';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import {  CreateTask } from './dto/create-task.dto';
import { EditTaskStatus } from './dto/edit-task-status.dto';
import { EditTaskColumn } from './dto/edit-task-column.dto';
import { UpdateTask } from './dto/update-task.dto';


@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async addTask(@Body() task:CreateTask) {
    return this.taskService.addTask(task);
  }

  @UsePipes(new ValidationPipe())
  @Put()
  async updateTask(@Body() task:UpdateTask) {
    return this.taskService.updateTask(task);
  }

  @UsePipes(new ValidationPipe())
  @Put('/subtask')
  async editSubTask(@Body() task:EditTaskStatus) {
    return this.taskService.editSubTask(task);
  }
  @UsePipes(new ValidationPipe())
  @Put('/column')
  async changeColumn(@Body() task:EditTaskColumn) {
    return this.taskService.editTaskColumn(task);
  }

}