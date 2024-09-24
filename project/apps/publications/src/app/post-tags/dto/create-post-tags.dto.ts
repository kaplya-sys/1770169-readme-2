import { ApiProperty } from '@nestjs/swagger';

export class CreatePostTagDto {
  @ApiProperty({
    description: 'List of publication tags.',
    example: '#city#japan#sunrise#tokio'
  })
  public tags: string;
}
