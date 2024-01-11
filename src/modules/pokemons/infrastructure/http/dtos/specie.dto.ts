import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class SpecieDto {
  @ApiProperty({ type: String, example: 'ground-pokemon' })
  @IsString()
  public readonly name: string;

  @ApiProperty({ type: String, example: 'https://pokeapi.co/api/v2/pokemon-species/104/' })
  @IsUrl()
  public readonly url: string;
}
