import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditBoard {
  @IsNotEmpty({ message: 'Name should not be Empty' })
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty({ message: 'Id should not be Empty' })
  @ApiProperty()
  readonly id: number;
  
  @ApiProperty()
  readonly columns?: EditBoardColumn[];
}

export class EditBoardColumn{
    @IsNotEmpty({ message: 'Name should not be Empty' })
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty({ message: 'id should not be Empty' })
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty({ message: 'board idshould not be Empty' })
    @ApiProperty()
    readonly boardId?: number;
}
