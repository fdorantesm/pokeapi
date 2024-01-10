import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class SpecieDto {
  @ApiProperty({ type: String })
  @IsString()
  public readonly name: string;

  @ApiProperty({ type: String })
  @IsUrl()
  public readonly url: string;
}
