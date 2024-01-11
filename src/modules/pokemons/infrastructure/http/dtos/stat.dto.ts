import { cubone } from '#/mocks/pokemons';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class StatDto {
  @ApiProperty({ type: String, example: cubone.stats.at(0).stat.name })
  @IsString()
  public readonly name: string;

  @ApiProperty({ type: String, example: cubone.stats.at(0).stat.url })
  @IsUrl()
  public readonly url: string;
}
