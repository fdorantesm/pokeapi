import { StatDto } from '@/modules/pokemons/infrastructure/http/dtos/stat.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsObject, IsPositive, Min, ValidateNested } from 'class-validator';

export class StatsDto {
  @ApiProperty({ type: Number })
  @IsPositive()
  @IsInt()
  public readonly baseStat: number;

  @ApiProperty({ type: Number })
  @IsInt()
  @Min(0)
  public readonly effort: number;

  @ApiProperty({ type: StatDto })
  @Type(() => StatDto)
  @ValidateNested()
  @IsObject()
  public readonly stat: StatDto;
}
