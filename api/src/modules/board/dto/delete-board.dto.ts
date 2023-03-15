import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteBoard {
 
  @IsNotEmpty({ message: 'Id should not be Empty' })
  @ApiProperty()
  readonly id: number;
  
}
