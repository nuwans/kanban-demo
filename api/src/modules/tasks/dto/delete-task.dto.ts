import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteTask {
 
  @ApiProperty()
  @IsNotEmpty({ message: 'Id should not be Empty' })
  readonly id: number;

  

}
