import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateColumn {
  @IsNotEmpty({ message: 'Name should not be Empty' })
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty({ message: 'Id  should not be Empty' })
  @ApiProperty()
  readonly boardId: number;


}
