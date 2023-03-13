import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTask {
 
  @ApiProperty()
  readonly id?: number;

  @IsNotEmpty({ message: 'Title should not be Empty' })
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly description?: string;

  @IsNotEmpty({ message: 'BoardId should not be Empty' })
  @ApiProperty()
  readonly boardId: number;

  @IsNotEmpty({ message: 'Stage should not be Empty' })
  @ApiProperty()
  readonly columnId: number;

  @ApiProperty()
  readonly status: boolean;

  @ApiProperty()
  readonly parentId?: number;

  @ApiProperty()
  readonly subTasks?: CreateTask[];

}
