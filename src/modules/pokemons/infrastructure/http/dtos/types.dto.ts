import { cubone } from '#/mocks/pokemons';
import { TypeDto } from '@/modules/pokemons/infrastructure/http/dtos/type.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsObject, IsPositive, ValidateNested } from 'class-validator';

export class TypesDto {
  @ApiProperty({ type: Number, example: cubone.types.at(0).slot })
  @IsInt()
  @IsPositive()
  public readonly slot: number;

  @ApiProperty({ type: TypeDto, example: cubone.types.at(0).type })
  @Type(() => TypeDto)
  @IsObject()
  @ValidateNested()
  public readonly type: TypeDto;
}
