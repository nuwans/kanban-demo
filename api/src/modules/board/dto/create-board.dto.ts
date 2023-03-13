import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoard {
  @IsNotEmpty({ message: 'Name should not be Empty' })
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly columns?: BoardColumn[];
}

export class BoardColumn{
    @IsNotEmpty({ message: 'Name should not be Empty' })
    @ApiProperty()
    readonly name: string;
}