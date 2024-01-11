import { cubone } from '#/mocks/pokemons';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class TypeDto {
  @ApiProperty({ type: String, example: cubone.types.at(0).type.name })
  @IsString()
  public readonly name: string;

  @ApiProperty({ type: String, example: cubone.types.at(0).type.url })
  @IsUrl()
  public readonly url: string;
}
