import { PokemonAbilityDto } from '@/modules/pokemons/infrastructure/http/dtos/pokemon-ability.dto';
import { SpecieDto } from '@/modules/pokemons/infrastructure/http/dtos/specie.dto';
import { StatsDto } from '@/modules/pokemons/infrastructure/http/dtos/stats.dto';
import { TypesDto } from '@/modules/pokemons/infrastructure/http/dtos/types.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsObject,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty()
  public readonly id: number;

  @ApiProperty()
  @IsString()
  @MaxLength(64)
  public readonly name: string;

  @ApiProperty()
  @IsPositive()
  public readonly height: number;

  @ApiProperty()
  @IsPositive()
  public readonly weight: number;

  @ApiProperty()
  @IsPositive()
  public readonly baseExperience: number;

  @ApiProperty({ type: [PokemonAbilityDto], isArray: true })
  @Type(() => PokemonAbilityDto)
  @ValidateNested({ each: true })
  public readonly abilities: PokemonAbilityDto[];

  @ApiProperty({ type: SpecieDto })
  @Type(() => SpecieDto)
  @ValidateNested()
  @IsObject()
  public readonly species: SpecieDto;

  @ApiProperty({ type: [StatsDto], isArray: true })
  @Type(() => StatsDto)
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  public readonly stats: StatsDto[];

  @ApiProperty({ type: [TypesDto], isArray: true })
  @Type(() => TypesDto)
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  public readonly types: TypesDto[];
}
