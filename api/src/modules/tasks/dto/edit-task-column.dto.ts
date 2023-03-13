import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditTaskColumn {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty({ message: 'Stage should not be Empty' })
  @ApiProperty()
  readonly columnId: number;
}
