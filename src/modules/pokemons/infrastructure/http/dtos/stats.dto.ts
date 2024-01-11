import { cubone } from '#/mocks/pokemons';
import { StatDto } from '@/modules/pokemons/infrastructure/http/dtos/stat.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsObject, IsPositive, Min, ValidateNested } from 'class-validator';

export class StatsDto {
  @ApiProperty({ type: Number, example: cubone.stats.at(0).baseStat })
  @IsPositive()
  @IsInt()
  public readonly baseStat: number;

  @ApiProperty({ type: Number, example: cubone.stats.at(0).effort })
  @IsInt()
  @Min(0)
  public readonly effort: number;

  @ApiProperty({ type: StatDto, example: cubone.stats.at(0).stat })
  @Type(() => StatDto)
  @ValidateNested()
  @IsObject()
  public readonly stat: StatDto;
}
