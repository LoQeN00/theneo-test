import { ApiProperty } from '@nestjs/swagger';

export class CreateHelloDto {
  @ApiProperty({
    description: 'The name of the person',
    minLength: 1,
    maxLength: 20,
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The age of the person',
    minimum: 1,
    maximum: 120,
    type: Number,
  })
  age: number;
}
